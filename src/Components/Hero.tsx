import type React from 'react';
import '../css/tailwind.css';
import Socials from './Socials';

export default function Hero({children}: React.PropsWithChildren){
    return (
        <div className=" flex flex-col justify-center w-screen text" style={{backgroundColor: "#212A31", color: "#D3D9D4"}}>
            <div className='flex flex-row items-center'>
                <div>
                    <h2 className="font-bold text-8xl">Carlos Lopes</h2>
                    <p className="text-2xl pt-4">Desenvolvedor Web Full-Stack com foco em React, Node.JS e .NET</p>
                    
                    <Socials/>
                    
                </div>
            </div>
            {children}
        </div>
    )
}