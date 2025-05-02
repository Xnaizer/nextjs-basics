import { ReactNode } from "react";


interface BtnType {
    children : ReactNode;
    type? : 'button' | 'submit' | 'reset';
    onClick? : () => void;
    className? : string;
}

export default function Buttons(props: BtnType) {
    const { children, type = "button", onClick, className } = props;
    
    return (
        <button onClick={onClick} type={type} className={`${className} rounded-lg bg-blue-500 py-2 px-3 font-semibold`}>
            {children}
        </button>
    )
}