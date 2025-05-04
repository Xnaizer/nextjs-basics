import { IActiveTask, ITask } from "@/types/task"; // mengambil tipe data yang sesuai
import { useDraggable } from "@dnd-kit/core"; // menggunakan properti useDraggalbe untuk mendapatkann isi data dom 
import { useState } from "react"; // menggunakan useState untuk menyembunyikan tombol edit dan delete

interface TaskCardType { // membuat pendeklarasian tipe data 
    key?: string; // mengambil key yang  di passing
    task: ITask; // menyesuaikan isi data yang diterima
    setActiveTask: ({activity, task} : IActiveTask) => void; // fungsi ini digunakan untuk mengetahui card mana yang aktif
}


export default function TaskCard(props:TaskCardType) { // pembuatan komponen TaskCard dengan props sesuai tipe data yang ditetntukan
    const {key, task, setActiveTask} = props; // destruction object untuk mempermudah pembacaan props
    const {attributes, listeners, setNodeRef, transform} = useDraggable({ 
        id: task.id
    });
    // attributes digunakan untuk elemen dapat di drag dengan aksesbilitas
    // listerners digunakan untuk mengaktifkan interaksi drag.
    // setNodeRef digunakan untuk mengregistrasi elemen dom
    // transform digunakan untuk mengetahui posisi x dan y pada saat didrag

    const [showDropDown, setShowDropDown] = useState<boolean>(false); // ini useState yang digunakan untuk menyembunyikan tombol edit dan delete

    const style = transform ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`, transition: 'transform ease'
    } : undefined; // pada saat bergerak di drag maka lakukan style ini untuk memindahkan card dan membuat transisi dengan smooth

    return (
        <section
            key={key}
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            style={style}
            // memasukkan semua hal yang akan dibutuhkan oleh card untuk dapat di drag
        >
            <div>
                <h3 className="font-medium text-neutral-700">{task.title}</h3>
                <p className="mt-2 text-neutral-500">{task.description}</p>
            </div>
            {/* div ini digunakan hanya untuk menampilkan judul dan deskripsi task */}

            <div 
                className="cursor-pointer relative h-fit"
                onMouseEnter={() => setShowDropDown(true)}
                onMouseLeave={() => setShowDropDown(false)}
                // ketika mouse dekat dengan = tampilakan tombol dan ketika menjauh hilangkan tombolp
            >
                =
                <div 
                    className={`absolute right-0 top-0 w-48 p-2 bg-white shadow-md transition-all duration-200 ${showDropDown ? "flex flex-col":"hidden"}`}
                >

                    <div
                        className="cursor-pointer p-2 rounded-md hover:bg-neutral-100"
                        onMouseDown={() => setActiveTask({activity: 'update', task})}
                        // ini tombol edit
                    >
                        Edit Data
                    </div>

                    <div
                        className="cursor-pointer p-2 rounded-md hover:bg-neutral-100"
                        onMouseDown={() => setActiveTask({activity: 'delete', task})}
                        // ini tombol delete
                    >
                        Delete Data
                    </div>

                </div>

            </div>




        </section>
    )

}