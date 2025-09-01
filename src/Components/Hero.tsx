import type React from 'react';
import '../css/tailwind.css';
import Socials from './Socials';

export default function Hero({children}: React.PropsWithChildren){
    return (
        <div className="bg-amber-300 flex flex-col justify-center items-center w-1/2">
            <div className='flex flex-row items-center'>
                <div className='hover:-translate-2 duration-250'>
                    <img src="/support image 1.png" className='absolute w-60 z-0 pr-5 pt-7' alt="Composição com a Foto" />
                    <img src="/favicon.png" className='relative w-60 z-1 pr-10' alt="Foto"/>
                </div>
                <div>
                    <h2 className="font-mono text-3xl">Carlos Lopes</h2>
                    <Socials/>
                    
                </div>
            </div>
            {children}
        </div>
    )
}