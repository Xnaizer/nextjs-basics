import { IActiveTask, ITask } from "@/types/Task";
import { useDraggable } from "@dnd-kit/core";
import { useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";

interface TaskCardType {
    task: ITask;
    key?: string;
    setActiveTask: ({activity, task}: IActiveTask) => void
}


export default function TaskCard(props:TaskCardType) {
    const { task, key, setActiveTask } = props;
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: task.id
    })

    const [showDropDown, setShowDropDown] = useState<boolean>(false)

    const style = transform ? {
        transform: `translate(${transform.x}px,${transform.y}px)`,
        transition: 'transform  ease'
    } : undefined;


    return (
        <div 
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            key={key}
            className="flex justify-between cursor-grab rounded-lg bg-neutral-50 p-4 shadow-sm hover:shadow-md"
            style={style}
         >
            <div>
                <h3 className="font-medium text-neutral-700">{task.title}</h3>
                <p className="mt-2 text-neutral-500">{task.description}</p>
            </div>
            <div className="cursor-pointer relative h-fit" onMouseEnter={() => setShowDropDown(true)} onMouseLeave={() => setShowDropDown(false)}>
                <HiDotsHorizontal />
                <div className={`absolute right-0 top-0 w-48 p-2   bg-white shadow-md transition-all duration-200 ${showDropDown ? "flex flex-col" : 'hidden'} `}>
                    <div 
                        className="cursor-pointer p-2 rounded-md hover:bg-neutral-100"
                        onMouseDown={() => setActiveTask({activity: 'update', task})}
                    >
                        Update
                    </div>
                    <div 
                        className="text-red-500 cursor-pointer p-2 rounded-md hover:bg-neutral-100"
                        onMouseDown={() => setActiveTask({activity: 'delete', task})}
                    >
                        Delete
                    </div>
                </div>
            </div>

        </div>
    )
}