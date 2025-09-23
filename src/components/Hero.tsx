import '../styles/global.css';
import '../styles/hero.css';
import Face from '../assets/Face.png'
import { Linkedin, Github } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
    const [textoAtual, setTextoAtual] = useState('');
    
    useEffect(() => {

        let indiceDigit: number = 0;
        const textoFinal: string = "Olá Mundo!";


            const escrita = setInterval(() => {
                if(indiceDigit <= textoFinal.length){
                    setTextoAtual(textoFinal.substring(0, indiceDigit));
                    indiceDigit++;
                }
                else {
                    clearInterval(escrita);
                    // const apagada = setInterval(() => {
                    //     if(indiceDigit >= 0){
                    //         setTextoAtual(textoFinal.substring(0, indiceDigit));
                    //         indiceDigit--;
                    //     }
                    //     else {
                    //         clearInterval(apagada);
                    //     }
                    // }, 50);
                }
            }, 100);

    }, [] );
    
    return (
        <section id="hero">
        <div id="hero-texto">
            <div>
                <h1 id='h-titulo'>{textoAtual}</h1>
                <span id='apresenta'>Eu sou Carlos Lopes</span>
                <div id='sociais'>
                    <a href="https://github.com/Caduber" target='_blank'><Github strokeWidth={0} fill='#ff819eff' /></a>
                    <a href="https://www.linkedin.com/in/caduber/" target='_blank'><Linkedin strokeWidth={0} fill='#ff819eff' /></a>
                
                </div>
            </div>
            <div id='botoes'>
                <button id='port'>Portfólio</button>
                <button id='exp'>Experiência</button>
            </div>
        </div>
        <div id='hero-foto'>
            <img src={Face} alt="Minha foto" />
            <p>Software Engineer</p>
        </div>
        </section>
    );
}

