import '../styles/global.css';
import '../styles/hero.css';
import Face from '../assets/Face.png'
import { Linkedin, Github, Mail } from 'lucide-react';
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
                <h1 id='h-titulo' >{textoAtual}</h1>
                <span id='apresenta' data-cursor="text">Eu sou Carlos Lopes</span>
                
                <div id='sociais'>
                    <a href="https://github.com/Caduber" target='_blank'><Github className='muda-cor' strokeWidth={0} fill='#ff819eff' /></a>
                    <a href="https://www.linkedin.com/in/caduber/" target='_blank'><Linkedin className='muda-cor' strokeWidth={0} fill='#ff819eff' /></a>
                    <a href="mailto:caduberdev@gmail.com" target='_blank'><Mail className='muda-cor-stroke' color='#ff819eff' strokeWidth={2.5}/></a>
                </div>
            </div>
            <div id='botoes'>
                <a href="https://github.com/Caduber" target='_blank'><button id='port'>Portfólio</button></a>
                <a href="https://www.linkedin.com/in/caduber/" target='_blank'><button id='exp'>Experiência</button></a>
            </div>
        </div>
        <div id='hero-foto'>
            <img src={Face} alt="Minha foto" data-cursor="text"/>
            <p>Software Engineer</p>
        </div>
        </section>
    );
}

