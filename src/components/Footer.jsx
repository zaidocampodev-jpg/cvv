const projects = [
  {
    num: '01',
    title: 'Academia Estilo Latino',
    description:
      'Plataforma web integral para la gestión operativa, administrativa y de marketing de una academia de baile.',
    tech: ['React', 'Node.js', 'Brevo API', 'Hostinger'],
    achievements: [
      'Arquitectura con Control de Acceso Basado en Roles (RBAC)',
      'Dashboard Administrativo con control del 70% del contenido y gestión de finanzas',
      'Integración de API de Brevo para marketing y correos transaccionales (Magic Links)',
    ],
    emoji: '💃',
  },
  {
    num: '02',
    title: 'Vivero Calu — Comercial',
    description:
      'E-commerce escalable con sistema de membresías y módulo educativo biológico respaldado por especialista.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Prisma ORM', 'Pasarela de Pagos'],
    achievements: [
      'Modelo B2B/B2C mediante cuentas Premium',
      'Integración de pagos y envíos',
      'Módulo de especies en cumplimiento normativo (SEMARNAT)',
    ],
    emoji: '🌱',
  },
  {
    num: '03',
    title: 'Home Server & Automatización Lab',
    description:
      'Servidor personal en hardware reciclado para self-hosting y experimentación DevOps.',
    tech: ['Linux', 'Cloudflare Tunnels', 'n8n'],
    achievements: [
      'Exposición segura de servicios locales a internet mediante Cloudflare Tunnels',
      'Automatización de flujos de trabajo con n8n',
    ],
    emoji: '🖥️',
  },
  {
    num: '04',
    title: 'Vivero Calu — MVP Integrador',
    description:
      'Prototipo inicial del E-commerce desarrollado como proyecto integrador universitario.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Java (Javalin)', 'MySQL', 'AWS EC2'],
    achievements: [
      'Catálogo con carrito de compras funcional',
      'Despliegue del backend en la nube utilizando AWS EC2',
    ],
    emoji: '🪴',
  },
]

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <line x1="7" y1="17" x2="17" y2="7"/>
    <polyline points="7 7 17 7 17 17"/>
  </svg>
)

export default function Projects() {
  return (
    <section id="projects">
      <div className="section">
        <p className="section-label">Portafolio</p>
        <h2 className="section-title">
          Proyectos que <span>entregan valor</span>
        </h2>

        <div className="projects-grid">
          {projects.map(p => (
            <div key={p.num} className="project-card glass fade-up">
              <div className="project-header">
                <span className="project-num">Proyecto {p.num}</span>
                <span style={{ fontSize: 28 }}>{p.emoji}</span>
              </div>

              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.description}</p>

              <div className="project-achievements">
                {p.achievements.map((a, i) => (
                  <div key={i} className="project-achievement">{a}</div>
                ))}
              </div>

              <div className="project-tech">
                {p.tech.map(t => (
                  <span key={t} className="tech-chip">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}