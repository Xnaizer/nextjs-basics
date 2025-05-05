import { ITask } from "@/types/task"; // import kebutuhan tipe data
import Buttons from "./Buttons"; // import komponen button

interface ModalTaskType { // membuat deklarasi tipe data
    type? : 'Add' | 'Edit'; // menentukan tipe tombol yang nantinya akan digunakan
    activeTask?: ITask; // mengakses data card yang sedang di drag
    onCancel: () => void; // cancel untuk melakukan edit/add data
    onSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void; // tombol untuk submit pembaruan dari data yang di add atau di edit
}


export default function ModalTask(props:ModalTaskType ) { // melakukan pendeklarasian komponen modalTask
    const {type='Add', activeTask, onCancel, onSubmit} = props; // melakukan destructuring object untuk mempermudah pembacaan props

    return (
        <section className="fixed inset-0 items-center justify-center bg-black/50 flex">
            <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
                <h2 className="mb-4 text-lg text-neutral-700 font-bold">{type} Task</h2> 
                {/* disini modaltask akan memberikan infomasi sesuai dengan card yang di pilih untuk edit atau add */}
                <form className="space-y-4" onSubmit={onSubmit}>
                    {/* form ini berisikan informasi untuk data yang dapat di update dan di add */}
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
                            // input ini akan mengambil text dan wajib disini dengan nama title yang nanti bisa diakses untuk menjadi acuan saat fungsi handleCreate/UpdateTask
                         />
                    </label>

                    <label htmlFor="description" className="flex flex-col gap-1">
                        <span className="font-semibold text-neutral-500">description</span>
                        <textarea
                            
                            placeholder="Insert Task Description"
                            className="rounded-lg border border-neutral-300 p-2"
                            name="description"
                            required
                            id="description"
                            defaultValue={activeTask?.description}
                         />
                    </label>

                    <div className="flex w-full items-center justify-end gap-2">
                        <Buttons
                            type="button"
                            onClick={onCancel}
                            className="text-white bg-slate-600 hover:bg-slate-700 cursor-pointer"
                        >
                            Cancel
                        </Buttons>

                        <Buttons 
                        type="submit" 
                        onClick={() => onSubmit}
                        className="text-white bg-blue-600 hover:bg-blue-700 cursor-pointer"
                        >
                            {type} Task
                        </Buttons>

                    </div>

                </form>


            </div>

        </section>
    )
}