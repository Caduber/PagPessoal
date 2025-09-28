import { useEffect, useState} from 'react';
import '../styles/customCursor.css';
import { motion}  from 'framer-motion';

export default function CustomCursor() {

    // Use state
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [variant, setVariant] = useState("default");

    // Funciona pra mover o mouse, mas do outro jeito tem um escutador global

    // addEventListener('mousemove', (e) => {
    //     setPosition({ x: e.clientX, y: e.clientY });
    // });


    // Use effect

    useEffect(() => {
        const move = (e:any) => {
            setPosition({x: e.clientX, y: e.clientY});

            // altera o movimento
            if(e.target.dataset.cursor == "text") {
                setVariant("text");
            }
            else {
                setVariant("default");
            }
        }

        // Escuta qnd o mouse se move e aplica o "move" que seta nova posicao
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    })

    // Variants
    const variants = {
        default: {
            x: position.x -36,
            y: position.y -34,
        },
        text: {
            height: 150,
            width: 150,
            x: position.x -72,
            y: position.y -68,
        }
    }

    const enter = () => setVariant("text");
    const leave = () => setVariant("default");

    // Componente
    return (
            <motion.div id='cursor' variants={variants} animate={variant}/>
    )
}