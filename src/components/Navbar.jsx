// Íconos SVG minimalistas
const IconHome = () => <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>;
const IconUser = () => <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;
const IconZap = () => <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>;
const IconBriefcase = () => <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>;

const tabs = [
  { id: 'hero', label: 'Inicio', icon: <IconHome /> },
  { id: 'about', label: 'Sobre mí', icon: <IconUser /> },
  { id: 'skills', label: 'Skills', icon: <IconZap /> },
  { id: 'projects', label: 'Proyectos', icon: <IconBriefcase /> },
];

export default function Navbar({ activeTab, setActiveTab }) {
  return (
    /* EL SECRETO DEL FROSTED GLASS: Fondo muy transparente, desenfoque alto y borde súper fino */
    <nav className="bg-[#1a1a1a]/40 backdrop-blur-[24px] border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.5)] rounded-full p-1.5 flex items-center gap-1 sm:gap-2">
      
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2
            ${activeTab === tab.id 
              ? 'bg-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] text-white' 
              : 'text-white/50 hover:text-white/90 hover:bg-white/5'
            }`}
        >
          {/* El ícono brilla un poco si está activo */}
          <span className={activeTab === tab.id ? 'opacity-100 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]' : 'opacity-70'}>
            {tab.icon}
          </span>
          <span className="hidden sm:inline tracking-wide">{tab.label}</span>
        </button>
      ))}
      
    </nav>
  );
}