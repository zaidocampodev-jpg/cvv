const skills = [
  { name: 'React', level: 'Avanzado', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'JavaScript', level: 'Avanzado', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'Node.js', level: 'Intermedio', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'Java', level: 'Intermedio', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
  { name: 'PostgreSQL', level: 'Intermedio', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  { name: 'MySQL', level: 'Intermedio', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
  { name: 'HTML5', level: 'Avanzado', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'CSS3', level: 'Avanzado', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  { name: 'AWS', level: 'Básico', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Figma', level: 'Intermedio', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
  { name: 'Git', level: 'Avanzado', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'Prisma', level: 'Intermedio', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg' },
  { name: 'Notion', level: 'Avanzado', src: 'https://cdn.simpleicons.org/notion/white' },
];

export default function Skills() {
  return (
    <div className="w-full animate-fade-in max-w-5xl mx-auto pt-16 sm:pt-24 pb-20">
      
      <div className="mb-16">
        <h2 className="text-[#facc15] font-semibold tracking-[0.2em] text-xs mb-4 uppercase">
          Stack Técnico
        </h2>
        <h3 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
          Habilidades & Tecnologías
        </h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-6">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center justify-center group p-6 rounded-3xl hover:bg-white/[0.02] transition-colors border border-transparent hover:border-white/5">
            
            {/* Ícono */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:-translate-y-3 group-hover:scale-110 group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]">
              <img src={skill.src} alt={skill.name} className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
            </div>

            {/* Nombre y Nivel */}
            <span className="text-sm sm:text-base text-white font-bold tracking-wide mb-2 text-center">
              {skill.name}
            </span>
            <span className="text-[9px] sm:text-[10px] text-[#facc15] uppercase tracking-widest font-semibold bg-[#facc15]/10 px-3 py-1.5 rounded-md text-center">
              {skill.level}
            </span>
            
          </div>
        ))}
      </div>
    </div>
  );
}