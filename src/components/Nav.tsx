import { useNavigate, useLocation } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <div className="nav">
        <div 
          className={`nav-item ${(location.pathname === '/dashboard' || location.pathname === '/') ? 'active' : ''}`}
          onClick={() => handleNav('/dashboard')}
        >
          <svg viewBox="0 0 24 24"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/></svg>
          Home
        </div>
        <div 
          className={`nav-item ${location.pathname === '/search' ? 'active' : ''}`}
          onClick={() => handleNav('/search')}
        >
          <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m16.5 16.5 4 4"/></svg>
          Search
        </div>
        <div 
          className={`nav-item ${location.pathname === '/docs' ? 'active' : ''}`}
          onClick={() => handleNav('/docs')}
        >
          <svg viewBox="0 0 24 24"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v5h5"/><path d="M9 13h6"/><path d="M9 17h6"/></svg>
          Docs
        </div>
        <div 
          className={`nav-item ${location.pathname === '/chat' ? 'active' : ''}`}
          onClick={() => handleNav('/chat')}
        >
          <svg viewBox="0 0 24 24"><path d="M4 5h16v11H8l-4 4z"/><path d="M8 9h8"/><path d="M8 13h5"/></svg>
          Chat
        </div>
      </div>
      <div className="home-indicator"></div>
    </>
  );
};

export default Nav;
