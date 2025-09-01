import React from "react";
import '../css/tailwind.css';

export default function Base({children}: React.PropsWithChildren) {
    return (
        <div className="bg-zinc-800 w-full min-h-screen fixed flex flex-col items-center">
            {children}
        </div>
    );
}