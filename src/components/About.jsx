import { BookOpen, GraduationCap, Code, Server, Flame } from 'lucide-react';

export default function About() {
  return (
    <div className="w-full animate-fade-in max-w-5xl mt-12 pb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        
        {/* Columna Izquierda: Bio y Highlights */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">Sobre mí</h2>
          <div className="space-y-6 text-sm text-gray-400 leading-relaxed mb-10">
            <p>
              Soy un Desarrollador Web Fullstack autodidacta y estudiante de Ingeniería en Tecnologías de la Información e Innovación Digital en la Universidad Politécnica de Chiapas. Mi pasión por la tecnología me ha llevado a construir plataformas comerciales y experimentar con infraestructura de servidores desde mi propio laboratorio en casa.
            </p>
            <p>
              Creo firmemente en la disciplina como motor de crecimiento, un valor que aplico tanto en la programación constante como en mi entrenamiento diario en el gimnasio.
            </p>
          </div>

          {/* Highlights (Pequeñas tarjetas que llenan espacio y te hacen ver más profesional) */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl flex flex-col gap-3">
              <Code className="text-[#facc15] w-5 h-5" />
              <span className="text-sm font-semibold text-white">Fullstack Dev</span>
              <span className="text-xs text-white/40 leading-tight">Manejo fluido desde el diseño UI hasta bases de datos SQL.</span>
            </div>
            <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl flex flex-col gap-3">
              <Server className="text-[#facc15] w-5 h-5" />
              <span className="text-sm font-semibold text-white">Self-Hosted</span>
              <span className="text-xs text-white/40 leading-tight">Experiencia configurando hardware local y despliegues.</span>
            </div>
            <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl flex flex-col gap-3">
              <Flame className="text-[#facc15] w-5 h-5" />
              <span className="text-sm font-semibold text-white">Autodidacta</span>
              <span className="text-xs text-white/40 leading-tight">Aprendizaje continuo para resolver problemas de negocio reales.</span>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Idiomas y Educación (con íconos de Lucide) */}
        <div className="space-y-16">
          
          <div>
            <h3 className="text-[#facc15] font-semibold tracking-wider text-xs mb-8 uppercase flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> Idiomas
            </h3>
            <div className="space-y-6">
              {[
                { name: 'Español', level: '100%', label: 'Nativo' },
                { name: 'Inglés', level: '60%', label: 'Intermedio' }
              ].map(lang => (
                <div key={lang.name}>
                  <div className="flex justify-between text-xs text-white/80 mb-2 font-medium">
                    <span>{lang.name}</span>
                    <span className="text-white/40">{lang.label}</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#facc15] rounded-full" style={{ width: lang.level }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[#facc15] font-semibold tracking-wider text-xs mb-8 uppercase flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> Educación Oficial
            </h3>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#facc15] before:via-white/10 before:to-transparent">
              
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-[#1c1815] bg-[#facc15] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 left-[-2px]"></div>
                <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] p-4 rounded-2xl border border-white/5 bg-white/[0.02]">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-white text-sm">Universidad Politécnica de Chiapas</div>
                  </div>
                  <div className="text-xs text-[#facc15] mb-2">Ing. en TI e Innovación Digital</div>
                  <div className="text-[10px] text-white/40">5° Cuatrimestre (Cursando)</div>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-[#1c1815] bg-white/20 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 left-[-2px]"></div>
                <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] p-4 rounded-2xl border border-white/5 bg-white/[0.02]">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-white text-sm">Técnico en Ofimática</div>
                  </div>
                  <div className="text-xs text-white/60 mb-2">Nivel Medio Superior</div>
                  <div className="text-[10px] text-[#facc15] bg-[#facc15]/10 px-2 py-1 rounded w-max">Graduación: 2024</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}