import '../styles/sobre.css'
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Sobre() {

    // Gsap

    const sobreRef = useRef(null);

    gsap.registerPlugin(SplitText);
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        if (sobreRef.current) {
            const split = new SplitText(".s-titulo", {
                type: "chars",
                linesClass: "line",
                mask: "lines",
            });
        
            gsap.from(split.chars, {
                scrollTrigger: ".sobre",
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
        <section id="sobre">
            <h1 ref={sobreRef} id='titulo' className='s-titulo' data-cursor="text"><span data-cursor="text">Sobre</span></h1>
        </section>
    )
}