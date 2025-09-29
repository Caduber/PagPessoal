import '../styles/portfolio.css';
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Portfolio() {

    // Gsap

    // useRef acessa os lementos do DOM diretamente
    // ele diferente do useState, nao dispara re-renders
    // nesse caso serve pra selecionar um elemento especifico
    // se fosse sem, todos com a classe titulo seriam renderizados
    const titleRef = useRef(null);

    // importa os plugins
    gsap.registerPlugin(SplitText);
    gsap.registerPlugin(ScrollTrigger);

    // executa toda vez q a pag roda, mas limpa a bagunça automático (diferente do useEff)
    useGSAP(() => {
        // Ve se a pag ja carregou, se sim splitta o texto do titulo
        if (titleRef.current) {
            const split = new SplitText(".titulo", {
                type: "chars",
                linesClass: "line",
                mask: "lines",
            });
        
            
            // exeucacao da animacao, scrolltrigger faz o efeito rolar
            // so qnd chegar em portfolio
            gsap.from(split.chars, {
                scrollTrigger: ".portfolio",
                y: -100,
                opacity: 0,
                rotation: "random(-80, 80)",
                duration: 0.7,
                ease: "back",
                stagger: 0.15
            });
        }
    });

    //

    return (
        <section id='portfolio' className='portfolio'>
            <h1 ref={titleRef} className='titulo' data-cursor="text" id='p-titulo'><span data-cursor="text">Portfolio</span></h1>
        </section>
    )
}