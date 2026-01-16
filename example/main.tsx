import React from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowRight, ArrowLeft, Check, X, Plus, Minus, Search, Menu } from '../src'
import { AnimatedIcon } from '../src/animated'
import '../src/styles.css'

const App = () => (
  <div style={{ padding: 40, fontFamily: 'system-ui' }}>
    <h1>React Vectoria Demo</h1>
    
    <h2>Basic Icons</h2>
    <div style={{ display: 'flex', gap: 16 }}>
      <ArrowRight size={32} />
      <ArrowLeft size={32} />
      <Check size={32} color="green" />
      <X size={32} color="red" />
      <Plus size={32} />
      <Minus size={32} />
      <Search size={32} />
      <Menu size={32} />
    </div>

    <h2>CSS Animations</h2>
    <div style={{ display: 'flex', gap: 16 }}>
      <ArrowRight size={32} animation="spin" />
      <ArrowRight size={32} animation="pulse" />
      <ArrowRight size={32} animation="bounce" />
      <ArrowRight size={32} animation="shake" />
      <ArrowRight size={32} animation="ping" />
    </div>

    <h2>Framer Motion</h2>
    <div style={{ display: 'flex', gap: 16 }}>
      <AnimatedIcon icon={ArrowRight} iconProps={{ size: 32 }} variant="hover" />
      <AnimatedIcon icon={Check} iconProps={{ size: 32, color: 'green' }} whileHover={{ scale: 1.3, rotate: 10 }} />
    </div>
  </div>
)

createRoot(document.getElementById('root')!).render(<App />)
