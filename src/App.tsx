// import './styles/global.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Portfolio from './components/Portfolio';
import CustomCursor from './components/CustomCursor';
import { ReactLenis } from 'lenis/react';

export default function App() {
  return (
    <>
    <ReactLenis root>
      <Header />
      <Hero />
      <Sobre /> 
      <Portfolio />
      <CustomCursor />
    </ReactLenis>
    </>
  )
}