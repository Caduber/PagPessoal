import '../styles/global.css';
import '../styles/header.css';

export default function Header() {
    return (
        <header>
            <div id="h-logo">
                <a href="#hero"><span>Carlos Lopes</span></a>
            </div>
            <div id="h-links">
                <a href="#sobre">Sobre</a>
                <a href="#portfolio">Portfólio</a>
                <a href=""><button>Contato</button></a>
            </div>
        </header>
    )
}