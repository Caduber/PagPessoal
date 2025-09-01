import React from "react";

type CircleProps = {
    size: number;
    color: string;
    children: React.ReactNode;
}

export default function Circle({size, color, children}: CircleProps) {
    return (
        <div style={{width: size, height: size, backgroundColor: color, }} className="rounded-4xl flex items-center justify-center hover:scale-100 hover:-translate-y-1 duration-250">
            {children}
        </div>
    );
}