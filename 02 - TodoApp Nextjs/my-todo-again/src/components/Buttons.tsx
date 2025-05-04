import { type ReactNode  } from "react"; // mengimport Type React Node ke code

interface BtnType { // membuat interface tipe data untuk Btn
    children: ReactNode; // untuk mendeklarasikan semua hal yang bisa di render oleh react. seperti Elemen JSX, String, angka, null, undefined, false, array, fragment
    type?: 'button' | 'submit' | 'reset'
    onClick: () => void; // ini tipe data yang akan mengembalikan void
    className? : string; // classname string
}


export default function Buttons(props:BtnType) { // membuat komponen buttons dengan pendeklarasian props di destructuring object
    const {children, type='button', onClick,className} = props; // props ini nantinya akan sesuai dengan tipe data yang dideklarasikan

    return (
        <button type={type} onClick={onClick} className={`${className} rounded-lg bg-blue-500 py-2 px-3 font-semibold`}>
            {children}
        </button>

        // disini kita akan secara mudah membuat object komponen button saat akan digunakan nantinya di komponen lainnya dengan props yang dilempar yaitu type, classname, dan ketika nanti button di klik
    )
}