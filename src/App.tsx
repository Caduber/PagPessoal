// import './styles/global.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import CustomCursor from './components/CustomCursor';
import { ReactLenis } from 'lenis/react';

export default function App() {
  return (
    <>
    <ReactLenis root>
      <Header />
      <Hero />
      <Sobre /> 
      <CustomCursor />
    </ReactLenis>
    </>
  )
}