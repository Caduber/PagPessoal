import '../styles/global.css';
import '../styles/header.css';

export default function Header() {
    return (
        <header>
            <div id="h-logo">
                <a href="#hero" ><span>Carlos Lopes</span></a>
            </div>
            <div id="h-links">
                <a href="#sobre">Sobre</a>
                <a href="#portfolio">Portfólio</a>
                <a href="https://wa.me/5514998315316" target='_blank'><button data-cursor="text">Contato</button></a>
            </div>
        </header>
    )
}