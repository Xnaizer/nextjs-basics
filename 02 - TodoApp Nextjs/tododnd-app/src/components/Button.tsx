import { ReactNode } from "react";

interface BtnProps {
    children: ReactNode;
    type? :'button' | 'submit' | 'reset';
    onClick?: () => void;
    className?: string;
}

export default function Button(props: BtnProps) {
    const {children,type, onClick, className} = props;
    return (
        <button onClick={onClick} type={type} className={`${className} rounded-lg bg-blue-500 py-2 px-3 font-semibold`}>
            {children}
        </button>
    )
}

// tes