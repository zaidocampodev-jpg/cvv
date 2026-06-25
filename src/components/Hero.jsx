import { Mail, Phone, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <div className="w-full h-full flex flex-col pt-12 sm:pt-20 animate-fade-in relative z-10">
      
      <div className="w-full flex justify-between items-start">
        <div className="flex items-center gap-3 text-xs font-medium text-white/80 bg-white/5 border border-white/5 px-4 py-2 rounded-full backdrop-blur-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.6)]"></span>
          Disponible para proyectos
        </div>
        <a href="/tu-cv.pdf" download className="bg-[#facc15] hover:bg-[#eab308] text-black px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm transition shadow-[0_0_15px_rgba(250,204,21,0.2)]">
          Descargar CV
        </a>
      </div>

      <div className="max-w-3xl mt-16 sm:mt-24">
        <p className="text-[#facc15] font-semibold tracking-[0.2em] text-xs sm:text-sm mb-6 uppercase drop-shadow-md">
          Fullstack Web Developer
        </p>
        
        <h1 className="text-6xl sm:text-8xl lg:text-[7.5rem] font-bold leading-[1.05] text-white tracking-tighter mb-12 drop-shadow-2xl">
          Ángel Zaid<br />
          <span className="text-white/80">Ocampo</span>
        </h1>

        {/* Ajustamos el tamaño a w-5 h-5 en todos los íconos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8 text-sm text-gray-300 max-w-2xl">
           
           <a href="mailto:zaidocampo.dev@gmail.com" className="flex items-center gap-4 hover:text-[#facc15] transition">
             <Mail className="w-5 h-5 text-[#facc15]" strokeWidth={1.5} />
             zaidocampo.dev@gmail.com
           </a>

           <a href="https://github.com/zaidocampodev-jpg" target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:text-[#facc15] transition">
             <svg className="w-5 h-5 text-[#facc15]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
               <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
             </svg>
             GitHub
           </a>

           <a href="https://www.linkedin.com/in/ángel-zaid-ocampo-gonzález-b547293aa" target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:text-[#facc15] transition">
             <svg className="w-5 h-5 text-[#facc15]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
               <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
               <rect x="2" y="9" width="4" height="12"></rect>
               <circle cx="4" cy="4" r="2"></circle>
             </svg>
             LinkedIn
           </a>
           
           <a href="https://www.instagram.com/_zaid.o.g_/?__pwa=1#" target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:text-[#facc15] transition">
             <svg className="w-5 h-5 text-[#facc15]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
               <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
               <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
               <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
             </svg>
             Instagram
           </a>

           <span className="flex items-center gap-4">
             <Phone className="w-5 h-5 text-[#facc15]" strokeWidth={1.5} />
             +52 961 123 4567
           </span>

           <span className="flex items-center gap-4">
             <MapPin className="w-5 h-5 text-[#facc15]" strokeWidth={1.5} />
             Suchiapa, Chiapas
           </span>

        </div>
      </div>
    </div>
  );
}