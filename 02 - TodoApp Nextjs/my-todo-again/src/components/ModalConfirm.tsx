import Buttons from "./Buttons"; // import button seperti biasa

interface ModalConfirmType  { // deklarasi tipe data Card Komfirmasi
    onCancel: () => void; // membuat tombol cancel
    onConfirm: () => void; // membuat tombol confirm saat melakukan delete
    message: string; // message peringatan nantinya
    title: string; // judul penghapusan data
    type?: 'Confirm' | 'Delete'; // tipe konfirmasi
}

export default function ModalConfirm(props: ModalConfirmType) { // pendeklarasian komponen card peringatan
    const {onCancel, onConfirm, message, title, type} = props; // destructuring object props

    return (
        <section
            className="fixed inset-0 items-center justify-center bg-black/50 flex"
        >
            <div
                className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg"
            >
                <h2
                    className="mb-4 text-lg text-neutral-700 font-bold"
                >
                    {title} 
                    {/* design title disini */}
                </h2>


                <div
                    className="flex flex-col gap-4"
                >
                    <p className="text-neutral-700">{message}</p>
                    {/* peringatan sebelum menghapus disini */}
                    <div className="flex w-full items-center justify-end gap-2">
                            <Buttons
                                type="button" 
                                onClick={onCancel}
                                className="text-white bg-slate-600 hover:bg-slate-700 cursor-pointer"
                            >
                                Cancel
                                {/* membuat tombol dan kebutuhannya */}
                            </Buttons>

                            <Buttons 
                            type="button" 
                            onClick={() => onConfirm()}
                            className={type === 'Delete' ? 'bg-red-500' : 'bg-blue-500'}
                            >
                                {type} 
                                {/* embuat tombol konfirmasi saat melakukan penghapusan data */}
                            </Buttons>
                    </div>

                </div>


            </div>

        </section>
    )

}