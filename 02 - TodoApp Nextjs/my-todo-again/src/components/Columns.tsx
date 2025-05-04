import { IActiveTask, IColumn, ITask } from "@/types/task"; // mengimport semua type yang diperlukan untuk kolom
import { useDroppable } from "@dnd-kit/core"; // karna kita akan meng drag and drop card oleh karnanya kita akan menggunkana kit dari dnd-kit
import TaskCard from "./TaskCard"; // disini kita akan melakukan looping untuk setiap card yang ada nantinya di pemyimpanan task


interface ColumnsType { // interface penyimpanan tipe kolom
    column : IColumn; // kolom ini akan menggunakan tipe yang sama dengan IColoum
    task: ITask[]; // task akan menerima semua task yang ada di penyimpanan nantinya akan digunakan untuk data card
    key?: string; // key digunakan untuk identitas cardnya
    setActiveTask: ({activity, task} : IActiveTask) => void; // ini nantinya digunakan pada saat card di drag kita dapat mengetahui card apa yang sedang di bawa dengan propertinya, pada saat di over ke kolom yang berbeda nantinya akan merubah posisi dengan cara merubah status card.
}


export default function Columns(props: ColumnsType) { // pendeklarasian komponen Columns yang nanti digunakan untuk membuat kolom dengan berbagai key atau space yang nantinya akan di tempati oleh card.
    const {column, task,key,setActiveTask} = props; // melakikan destructutring object untuk mempermudah pembacaan props
    const {setNodeRef, over} = useDroppable({ // mengambil libraray setNodeRef dan Over yang nantinya akan digunakan pada saat card di drag, setNodeRef akan digunakan untuk menetapkan referensii DOM ke sebuah elemen. Over adalah objek yang akan dimasukkan cardnya 
        id: column.id // kita menggunakan id kolom yang sesuai dengan kolom karna nantinya id akan digunakan untuk menentukan card apa yang berpindah dan status nantinya akan menentukan perubahan tempat card pada kolom
    })
    return (
        <section key={key} className={`flex flex-1 w-80 flex-col rounded-lg bg-neutral-100 p-4 ${over?.id === column.id && 'bg-neutral-200 outline-2 outline-blue-400 outline-dashed'}`}>
            {/* ini adalah pembungkus kolom, dimana akan berwarna biru dot ketika di over kedalam kolom yang dipilih */}

            <h2 className="mb-4 font-semibold text-neutral-700">{column.title}</h2>
            {/* ini adalah title kolom saja yang sesuai dengan daa di taks.d.ts */}

            <div className="flex flex-col flex-1 gap-4" ref={setNodeRef}>
                {/* ref ini adalah reference yang berarti kita ingin menyimpan referensi ke elemen div */}
                {task.map((item) => (
                    // melakukan looping dengan map untuk card
                    <TaskCard 
                        key={item.id}
                        task={item}
                        setActiveTask={setActiveTask}
                    />
                ))}

            </div>
        </section>
    )
}