import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import Hero from './Components/Hero.tsx';
import Base from './Components/Base.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Base>
      <Hero></Hero>
    </Base>
  </StrictMode>,
)
