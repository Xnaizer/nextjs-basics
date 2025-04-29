import Button from "./Button";

interface ModalConfirmType {
    onCancel : () => void;
    onConfirm : () => void;
    message: string;
    title : string;
    type? : 'Confirm' | 'Delete'
}

export default function ModalConfirm(props : ModalConfirmType) {
    const { onCancel, onConfirm, message, title, type = 'Confirm'} = props;

    return (
        <section className="fixed inset-0 items-center justify-center bg-black/50 flex">
            <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
                <h2 className="mb-4 text-lg text-neutral-700 font-bold">{title}</h2>
                <div className="flex flex-col gap-4">
                    <p className="text-neutral-700">{message}</p>
                    <div className="flex w-full items-center justify-end gap-2">
                            <Button 
                                type="button" 
                                onClick={onCancel}
                                className="text-white bg-slate-600 hover:bg-slate-700 cursor-pointer"
                            >
                                Cancel
                            </Button>

                            <Button 
                            type="button" 
                            onClick={() => onConfirm()}
                            className={type === 'Delete' ? 'bg-red-500' : 'bg-blue-500'}
                            >
                                {type} 
                            </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}