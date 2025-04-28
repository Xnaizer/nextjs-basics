import { ITask } from "@/types/Task";
import { useDraggable } from "@dnd-kit/core";

interface TaskCardType {
    task: ITask;
    key?: string;
}


export default function TaskCard(props:TaskCardType) {
    const { task, key } = props;
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: task.id
    })

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
            className="cursor-grab rounded-lg bg-neutral-50 p-4 shadow-sm hover:shadow-md"
            style={style}
         >
            <h3 className="font-medium text-neutral-700">{task.title}</h3>
            <p className="mt-2 text-neutral-500">{task.description}</p>
        </div>
    )
}