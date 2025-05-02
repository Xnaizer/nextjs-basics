"use client"

import Buttons from "@/components/Button";
import Koloms from "@/components/Koloms";
import ModalTugas from "@/components/ModalTugas";
import { COLUMNS, INITIAL_TASKS } from "@/constants/Task.constant";
import { ITugas } from "@/types/Task";
import { DndContext, DragEndEvent } from "@dnd-kit/core";

import { useEffect, useState } from "react";

export default function Home() {

  const [tasks, setTasks] = useState<ITugas[]>([...INITIAL_TASKS])
  const [activeTask, setActiveTask] = useState<{
    aktivitas: string;
    tugas: ITugas;
  } | null >(null);
  const [showModal, setShowModal] = useState<boolean>(false);




  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");

    if(storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  },[setTasks]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  },[tasks]);

  const handleCreateFormTask = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const newData : ITugas = {
      id: String(Date.now()),
      judul: formData.get('judul') as string,
      deskripsi: formData.get('deskripsi') as string,
      status: 'IN_DEVELOPMENT'
    }

    setTasks((prev) => [...prev, newData]);
    e.currentTarget.reset();
    setShowModal(false);

  }

  const handleDragEnd = (event : DragEndEvent) => {
    const { active, over } = event;



    if ( !over ) return;

    const taskID = active.id as string;
    const newStatus = over.id as ITugas['status'];

    console.log(active)
    console.log(over)
    console.log(taskID)
    console.log(newStatus)

    const newTask = tasks.map((task) => {
      return task.id === taskID ? {
        ...task, status : newStatus,
      } : task
    })

    setTasks(newTask);

  }

  return (
    <section className="min-h-screen p-4 flex flex-col">
      
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-neutral-700">ToDo App List</h1>
        <Buttons onClick={() => setShowModal(true)}  >Add Tasks</Buttons>
      </div>

      <div className="flex gap-8 flex-1">
        <DndContext onDragEnd={handleDragEnd}>

          {
            COLUMNS.map((koloms) => (
              <Koloms 
                key={koloms.id}
                kolom={koloms}
                tugas={tasks.filter((tasks) => tasks.status === koloms.id)}
                setActiveTask={setActiveTask}
              />
            ))
          }

        </DndContext>

      </div>

      {showModal && <ModalTugas onCancel={() => setShowModal(false)} onSubmit={handleCreateFormTask} />}

      
    </section>
  );
}

