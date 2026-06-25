import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

export default function Home() {
  const [activeTab, setActiveTab] = useState('hero');

  return (
    <div className="h-screen w-full bg-[#1c1815] flex flex-col relative overflow-hidden text-white font-sans">
      
      {/* 1. LA LUZ GIGANTE (Con opacidad reducida para no deslumbrar el texto) */}
      <div className="absolute top-[-30%] right-[-20%] w-[140vw] sm:w-[100vw] h-[140vw] sm:h-[100vw] bg-[radial-gradient(circle_at_center,_#ffb07c_0%,_#e65c00_40%,_transparent_70%)] opacity-35 blur-[80px] animate-pulse-glow pointer-events-none z-0"></div>
      
      {/* 2. EL LIQUID GLASS (Con un tinte ligeramente oscuro para dar contraste a las letras) */}
      <div className="absolute inset-0 backdrop-blur-[80px] bg-[#050505]/20 bg-noise pointer-events-none z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none z-0"></div>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 overflow-y-auto custom-scrollbar relative z-10 w-full h-full pb-32 pt-6">
        <div className="w-full max-w-7xl mx-auto h-full px-6 sm:px-16 lg:px-24">
          {activeTab === 'hero' && <Hero />}
          {activeTab === 'about' && <About />}
          {activeTab === 'skills' && <Skills />}
          {activeTab === 'projects' && <Projects />}
        </div>
      </main>

      {/* NAVBAR */}
      <div className="absolute bottom-0 left-0 w-full pb-8 pt-24 bg-gradient-to-t from-[#15120f] via-[#15120f]/90 to-transparent z-50 flex justify-center pointer-events-none">
        <div className="pointer-events-auto shadow-[0_10px_40px_rgba(0,0,0,0.4)] rounded-full">
          <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>
    </div>
  );
}