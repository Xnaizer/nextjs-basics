import { ITugas } from "@/types/Task";

import Buttons from "./Button";

interface ModalTugasType {
    type? : 'Add' | 'Edit';
    activeTask? : ITugas;
    onCancel: () => void;
    onSubmit: (e:React.ChangeEvent<HTMLFormElement>) => void;
}


export default function ModalTugas(props: ModalTugasType) {
    const { onCancel, onSubmit, type = 'Add', activeTask } = props;

    return (
        <section className="fixed inset-0 items-center flex justify-center bg-black/50 ">
            
            <div className="w-full max-w-md rounded-lg bg-whtie p-6 shadow-lg bg-white">
                <h2 className="mb-4 text-lg text-neutral-700 font-bold"> {type} Task</h2>

                <form 
                    className="space-y-4"
                    onSubmit={onSubmit}
                >
                    <label htmlFor="judul" className="flex flex-col gap-1">
                        <span className="font-semibold text-neutral-500">Judul</span>
                        <input type="text"
                            placeholder="Masukkan Judul Tugas"
                            className="rounded-lg border border-neutral-300 p-2"
                            name="judul"
                            required
                            id="judul"
                            defaultValue={activeTask?.judul}
                        />

                    </label>

                    <label htmlFor="deskripsi" className="flex flex-col gap-1">
                        <span className="font-semibold text-neutral-500">Deskripsi</span>
                        <textarea
                            placeholder="Masukkan Judul Tugas"
                            className="rounded-lg border border-neutral-300 p-2"
                            name="deskripsi"
                            required
                            id="deskripsi"
                            defaultValue={activeTask?.deskripsi}
                        />

                    </label>

                    <div className="flex w-full items-center justify-end gap-2 ">

                        <Buttons
                            type="button"
                            onClick={onCancel}
                            className="text-white bg-slate-600 hover:bg-slate-700 gap-2" 
                        >
                            Cancel
                        </Buttons>

                        <Buttons
                            type="submit"
                            onClick={() => onSubmit}
                            className="text-white bg-blue-600 hover:bg-blue-700 cursor-pointer gap-2" 
                        >
                            {type} Submit
                        </Buttons>

                    </div>

                </form>



            </div>


        </section>
    )
}