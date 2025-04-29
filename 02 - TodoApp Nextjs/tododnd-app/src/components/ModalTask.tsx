import { ITask } from "@/types/Task";
import Button from "./Button";

interface ModalTaskProps {
    type?: 'Add' | 'Edit';
    activeTask? : ITask; 
    onCancel: () => void;
    onSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void;
}

export default function ModalTaks(props: ModalTaskProps){
    const { onCancel, onSubmit, type='Add', activeTask } = props;

    return (
        <section className="fixed inset-0 items-center justify-center bg-black/50 flex">
            <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
                <h2 className="mb-4 text-lg text-neutral-700 font-bold">{type}Add Task</h2>
                <form 
                className="space-y-4"
                onSubmit={onSubmit}
                >
                    <label htmlFor="title" className="flex flex-col gap-1">
                        <span className="font-semibold text-neutral-500">Title</span>
                        <input 
                        type="text" 
                        placeholder="Insert Task Title"
                        className="rounded-lg border border-neutral-300 p-2"
                        name="title"
                        required
                        id="title"
                        defaultValue={activeTask?.title}
                        />
                    </label>
                    <label htmlFor="description" className="flex flex-col gap-1">
                    <span className="font-semibold text-neutral-500">Description</span>
                        <textarea
                        
                            placeholder="Insert Task description"
                            className="rounded-lg border border-neutral-300 p-2"
                            name="description"
                            required
                            id="description"
                            defaultValue={activeTask?.description}
                        />
                    </label>
                    <div className="flex w-full items-center justify-end gap-2">
                        <Button 
                            type="button" 
                            onClick={onCancel}
                            className="text-white bg-slate-600 hover:bg-slate-700 cursor-pointer"
                        >
                            Cancel
                        </Button>

                        <Button 
                        type="submit" 
                        onClick={() => onSubmit}
                        className="text-white bg-blue-600 hover:bg-blue-700 cursor-pointer"
                        >
                            {type} Task
                        </Button>
                    </div>
                    

                </form>
            </div>
        </section>
    )
}