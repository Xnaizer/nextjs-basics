import { IActiveTask, IColumn, ITask } from "@/types/Task"
import TaskCard from "./TaskCard";
import { useDroppable } from "@dnd-kit/core";

interface ColumnType {
    column: IColumn;
    task: ITask[];
    key?: string;
    setActiveTask: ({activity, task}: IActiveTask) => void
}

export default function Column(props: ColumnType) {
    const { column, task,key, setActiveTask } = props;
    const { setNodeRef, over } = useDroppable({
        id: column.id
    })
    return (
        <div key={key} className={`flex flex-1 w-80 flex-col rounded-lg bg-neutral-100 p-4 ${over?.id === column.id && 'bg-neutral-200 outline-2 outline-blue-500 outline-dashed'}`}>
            <h2 className="mb-4 font-semibold text-neutral-700">{column.title}</h2>
            <div ref={setNodeRef} className="flex flex-col flex-1 gap-4">
                {task.map((tasks) => (
                    <TaskCard 
                        key={tasks.id} 
                        task={tasks} 
                        setActiveTask={setActiveTask}
                    />
                ))}
            </div>
        </div>
    )
}