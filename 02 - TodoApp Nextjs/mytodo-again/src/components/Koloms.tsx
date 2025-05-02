import { IKolom, ITugas, ITugasAktif } from "@/types/Task"
import { useDroppable } from "@dnd-kit/core";
import CardTugas from "./CardTugas";

interface KolomType {
    kolom : IKolom;
    tugas : ITugas[];
    key? : string;
    setActiveTask: ({aktivitas, tugas}: ITugasAktif) => void;
    
}

export default function Koloms(props : KolomType) {
    const {kolom, tugas, key, setActiveTask} = props;
    const { setNodeRef, over } = useDroppable({
        id: kolom.id
    })

    return (
        <div key={key} className={`flex flex-1 w-80 flex-col rounded-lg bg-neutral-100 p-4 ${over?.id === kolom.id && 'bg-neutral-200 outline-2 outline-blue-500 outline-dashed'}`} >
            <h2 className="mb-4 font-semibold text-neutral-700"> {kolom.judul}</h2>
            <div ref={setNodeRef} className="flex flex-col flex-1 gap-4">
                {tugas.map((task) => (
                    <CardTugas key={task.id} tugas={task} setActiveTask={setActiveTask} />
                ))}

            </div>
        </div>
    )
}