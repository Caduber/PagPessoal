// import './styles/global.css';
import Header from './components/Header';
import Hero from './components/Hero';
import { ReactLenis } from 'lenis/react';

export default function App() {
  return (
    <>
    <ReactLenis root>
      <Header />
      <Hero />
    </ReactLenis>
    </>
  )
}