import Buttons from "./Button";


interface ModalConfirmType {
    onCancel: () => void;
    onConfirm: () => void;
    pesan: string;
    judul: string;
    type? : 'Confirm' | 'Delete';
}

export default function ModalConfirm(props: ModalConfirmType) {
    const { onCancel, onConfirm, pesan, judul, type="Confirm"} = props;

    return (
        <section className="fixed inset-0 items-center flex justify-center bg-black/50 b">
            <div className=" flex flex-1 flex-col p-8 rounded-2xl max-w-xl bg-white">
                <h2 className="mb-4 text-lg text-neutral-700 font-bold">{judul}</h2>
                <div className="flex flex-col gap-4">
                    <p className="text-neutral-700">{pesan}</p>
                    <div className="flex w-full items-center justify-end gap-2">
                        <Buttons 
                            type="button" 
                            onClick={onCancel}
                            className="text-white bg-slate-600 hover:bg-slate-700 cursor-pointer"
                        >
                            Cancel
                        </Buttons>

                        <Buttons 
                        type="button" 
                        
                        onClick={() => onConfirm()}
                        className={type === 'Delete' ? 'bg-red-500' : 'bg-blue-500'}
                        >
                            {type} 
                        </Buttons>
                    </div>
                </div>
            </div>
            

        </section>
    )

}