import { type ReactNode } from "react";

interface BtnProps {
    className? : string;
    type: 'button' | 'submit' | 'reset' | undefined;
    children: ReactNode;
    onClick: () => void;
}

export default function Buttons(props: BtnProps) {
    const {className, type="button",onClick, children} = props
    return (
        <button type={type} className={`text-black ${className}`} onClick={onClick}>
            {children}
        </button>
    );

}