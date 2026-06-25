import { Users, ShoppingBag, Server, LayoutTemplate, Dumbbell } from 'lucide-react';

const projects = [
  {
    title: 'Gym Access MVP',
    type: 'Aplicación de Escritorio',
    desc: 'Prototipo de sistema integral para la gestión operativa de gimnasios. Desarrollado para automatizar entradas y salidas de clientes.',
    achievements: 'Control de acceso validado mediante registro de huella biométrica, gestión de mensualidades y un Punto de Venta (POS) para venta de suplementos y aguas.',
    tech: 'Java • MySQL • Biometría',
    iconLarge: <Dumbbell size={56} strokeWidth={1} />
  },
  {
    title: 'Academia Estilo Latino',
    type: 'Plataforma Web',
    desc: 'Rediseño y creación de una plataforma web integral para la gestión operativa, administrativa y de marketing de una academia de baile.',
    achievements: 'Arquitectura con Control de Acceso Basado en Roles (RBAC) y gestión financiera. Integración de Brevo API para marketing.',
    tech: 'React • Node.js • Brevo API',
    iconLarge: <Users size={56} strokeWidth={1} />
  },
  {
    title: 'Vivero Calu — Comercial',
    type: 'E-commerce B2B/B2C',
    desc: 'E-commerce escalable con sistema de membresías Premium y módulo educativo biológico en cumplimiento con normativas de la SEMARNAT.',
    achievements: 'Integración completa de pasarela de pagos y envíos, con un backend robusto respaldado por Prisma ORM.',
    tech: 'React • Node.js • PostgreSQL',
    iconLarge: <ShoppingBag size={56} strokeWidth={1} />
  },
  {
    title: 'Home Server Lab',
    type: 'Infraestructura / DevOps',
    desc: 'Servidor personal en hardware reciclado para self-hosting y experimentación DevOps.',
    achievements: 'Exposición segura de servicios mediante Cloudflare Tunnels y automatización de flujos con n8n.',
    tech: 'Linux • Cloudflare Tunnels • n8n',
    iconLarge: <Server size={56} strokeWidth={1} />
  },
  {
    title: 'Vivero Calu — MVP',
    type: 'Prototipo Universitario',
    desc: 'Prototipo inicial del E-commerce desarrollado como proyecto integrador universitario.',
    achievements: 'Catálogo con carrito de compras funcional. Despliegue del backend en la nube utilizando AWS EC2.',
    tech: 'HTML • JS • Java • MySQL',
    iconLarge: <LayoutTemplate size={56} strokeWidth={1} />
  }
];

export default function Projects() {
  return (
    <div className="w-full animate-fade-in max-w-4xl mx-auto mt-12 pb-48">
      <div className="space-y-32">
        {projects.map((p, index) => (
          <div key={index} className="flex flex-col">
            
            {/* Banner Abstracto Premium */}
            <div className="w-full aspect-[21/9] sm:aspect-[4/1] bg-gradient-to-br from-[#1c1815] to-[#0a0a0a] rounded-2xl sm:rounded-[2rem] border border-white/5 mb-10 relative overflow-hidden flex items-center justify-center group shadow-xl">
               
               <div className="absolute w-32 h-32 bg-[#facc15] opacity-[0.08] blur-[40px] rounded-full group-hover:opacity-20 group-hover:scale-150 transition-all duration-700"></div>
               
               <div className="text-white/20 group-hover:text-[#facc15]/80 transition-colors duration-500 group-hover:scale-110 relative z-10">
                  {p.iconLarge}
               </div>

            </div>

            <div className="px-2 sm:px-6">
              <h3 className="text-3xl sm:text-4xl font-bold text-[#facc15] mb-2">{p.title}</h3>
              <p className="text-xs text-white/40 tracking-[0.2em] uppercase mb-8">{p.type}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                <div>
                  <h4 className="font-bold text-white mb-3">Sobre el Proyecto</h4>
                  <p className="text-gray-400 leading-relaxed">{p.desc}</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-3">Logros Destacados</h4>
                  <p className="text-gray-400 leading-relaxed mb-6">{p.achievements}</p>
                  
                  <p className="text-[10px] text-[#facc15] tracking-widest uppercase font-mono bg-[#facc15]/10 inline-block px-3 py-1.5 rounded-md">
                    {p.tech}
                  </p>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}