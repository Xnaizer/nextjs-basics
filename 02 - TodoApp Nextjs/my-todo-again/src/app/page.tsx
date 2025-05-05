"use client"

import Buttons from "@/components/Buttons";
// Mengimpor komponen tombol yang kemungkinan berisi tombol-tombol utama aplikasi (misal: tambah task)
import Columns from "@/components/Columns";
// Mengimpor komponen kolom yang digunakan untuk menampilkan task berdasarkan kategorinya (misal: todo, in progress, done)
import ModalConfirm from "@/components/ModalConfirm";
// Mengimpor komponen modal konfirmasi, kemungkinan digunakan saat menghapus task
import ModalTask from "@/components/ModalTask";
// Mengimpor komponen modal untuk membuat atau mengedit task
import { COLUMNS, INITIAL_TASKS } from "@/Constant/Task.constans";
// Mengimpor konstanta COLUMNS (untuk label kolom) dan INITIAL_TASKS (data awal task)
import { ITask } from "@/types/task";
// Mengimpor tipe data `ITask` untuk memastikan struktur objek task (misal: id, title, status)
import { DndContext, DragEndEvent } from "@dnd-kit/core";
// Mengimpor konteks dan event drag dari library DnD Kit untuk implementasi fitur drag and drop
import { useEffect, useState } from "react";
// Mengimpor hook React untuk mengelola state dan efek samping


export default function Home() {

  const [tasks, setTasks] = useState<ITask[]>([...INITIAL_TASKS]);
  // tasks disini akan membungkus semua hal terkait data card yang nantinya akan digunakan
  const [showModal, setShowModal] = useState<boolean>(false);
  // showModal ini digunakan untuk menjadi penutup dan pembuka card
  const [activeTask, setActiveTask] = useState<{
    activity: string,
    task: ITask
  } | null>(null);
  // State `activeTask` digunakan untuk menyimpan data task yang sedang aktif/diseret pada saat drag-and-drop
  // `activity` bisa menunjukkan nama kolom asal (misal: "Todo", "In Progress", dll)
  // `task` menyimpan data lengkap task tersebut (bertipe `ITask`)
  // Di-inisialisasi dengan `null` karena awalnya belum ada task yang sedang di-drag
  

  console.log(activeTask?.activity)
  console.log(activeTask?.task)

  useEffect(() => {
    const setDataTask = localStorage.getItem('task');
  
    if(setDataTask) {
      setTasks(JSON.parse(setDataTask));
    }
    
  }, [setTasks]);
  // useEffect ini akan dijalankan sekali setelah komponen dirender pertama kali
  // Fungsinya untuk mengambil data task dari localStorage (jika ada) dan mengatur ulang state `tasks`
  // Dengan ini, data task tetap tersimpan walaupun halaman di-refresh
  
  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(tasks))
  }, [tasks]);
  // useEffect ini akan dijalankan setiap kali state `tasks` berubah
  // Fungsinya untuk menyimpan data task terbaru ke dalam localStorage secara otomatis
  // Ini memastikan bahwa perubahan pada tasks tidak hilang ketika halaman direfresh
  
  const handleShowModalOpen = () => {
    setShowModal(true);
  }
  // Fungsi ini digunakan untuk membuka modal input task (mengubah `showModal` menjadi true)
  
  const handleShowModalClose = () => {
    setShowModal(false);
  }
  // Fungsi ini digunakan untuk menutup modal input task (mengubah `showModal` menjadi false)
  

  const handleCreateTask = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Mencegah perilaku default dari form saat disubmit (misalnya reload halaman)
  
    const formData = new FormData(e.currentTarget);
    // Mengambil data input dari form yang sedang disubmit, menggunakan `FormData`
  
    const newTask: ITask = {
      id: String(Date.now()),
      // Membuat ID unik berdasarkan timestamp saat ini
      title: formData.get('title') as string,
      // Mengambil nilai dari input dengan name="title"
      description: formData.get('description') as string,
      // Mengambil nilai dari input dengan name="description"
      status: 'NEW'
      // Status awal dari task baru yang dibuat
    }
  
    setTasks((prev) => [...prev, newTask])
    // Menambahkan task baru ke daftar tasks yang sudah ada
  
    e.currentTarget.reset();
    // Mereset form agar input kembali kosong setelah disubmit
  
    setShowModal(false);
    // Menutup modal setelah task berhasil dibuat
  }
  

  const handleUpdateTask = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Mencegah form melakukan reload saat disubmit
  
    const updateData = new FormData(e.currentTarget);
    // Mengambil data yang diinput dari form update
  
    const updatedData: ITask = {
      id: activeTask?.task.id as string,
      // Menggunakan ID task yang sedang aktif untuk memastikan task yang diupdate tetap punya ID yang sama
      title: updateData.get('title') as string,
      // Mengambil nilai terbaru dari input dengan name="title"
      description: updateData.get('description') as string,
      // Mengambil nilai terbaru dari input dengan name="description"
      status: activeTask?.task.status as ITask['status']
      // Menggunakan status yang sama dari task aktif (tidak diubah di sini)
    }
  
    setTasks((prev) =>
      prev.map((task) =>
        task.id === updatedData.id ? updatedData : task
      )
    );
    // Menambahkan task yang sudah diupdate ke daftar tasks 
  
    e.currentTarget.reset();
    // Mereset form setelah update
  
    setActiveTask(null);
    // Menghapus status aktif dari task yang diupdate
  }
  

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    // Mendestruktur objek event drag untuk mendapatkan elemen yang sedang didrag (active) dan target tempat dilepaskan (over)
  
    if (!over) return;
    // Jika tidak ada area drop yang valid, maka keluar dari fungsi
  
    const taskId = active.id as string;
    // Mengambil ID task yang sedang didrag
  
    const newStatus = over.id as ITask['status'];
    // Mengambil ID dari kolom tujuan drop, yang digunakan sebagai status baru task
  
    const newDragTask = tasks.map((item) => {
      return item.id === taskId ? {
        ...item,
        status: newStatus
        // Jika ID-nya cocok dengan task yang sedang didrag, ubah status-nya jadi status baru
      } : item
      // Jika bukan task yang sedang didrag, biarkan tetap seperti sebelumnya
    });
  
    setTasks(newDragTask);
    // Menyimpan kembali array tasks yang sudah diperbarui ke dalam state
  }
  

  const handleDeleteTask = () => {
    setTasks((prev) =>
      prev.filter((task) => task.id !== activeTask?.task.id)
    )
  }

  return (
      <section className="min-h-screen p-4 flex flex-col">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-neutral-700">To Do List App</h1>
          <Buttons onClick={handleShowModalOpen}>Add Task</Buttons>
        </div>

        <div className="flex gap-8 flex-1">
          <DndContext onDragEnd={handleDragEnd}>
            {
              COLUMNS.map((item) => (
                <Columns
                key={item.id}
                column={item}
                task={tasks.filter((task) => task.status === item.id)}
                setActiveTask={setActiveTask}
                ></Columns>
              ))
            }
          </DndContext>

        </div>

        {showModal && <ModalTask onCancel={handleShowModalClose} onSubmit={handleCreateTask}/> }

        {activeTask?.activity === 'update' && (
        <ModalTask
          onSubmit={handleUpdateTask} 
          onCancel={() => setActiveTask(null)}
          activeTask={activeTask.task}
          type="Edit"
        />
      )}

      {activeTask?.activity === 'delete' && (
        <ModalConfirm
          onConfirm={handleDeleteTask} 
          onCancel={() => setActiveTask(null)}
          title="Delete Task!"
          message="Are you sure you want to delete di task?"
          type="Delete"
        />
      )}


      </section>
  );
}
