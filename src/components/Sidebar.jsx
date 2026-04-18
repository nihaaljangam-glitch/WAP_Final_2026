import { Home, Compass, PlaySquare, Clock, ThumbsUp, History, MonitorPlay } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = ({ isCollapsed }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  const mainLinks = [
    { icon: <Home size={24} />, name: 'Home', path: '/' },
    { icon: <Compass size={24} />, name: 'Shorts', path: '/shorts' },
    { icon: <MonitorPlay size={24} />, name: 'Dashboard', path: '/dashboard' },
  ];

  const userLinks = [
    { icon: <History size={24} />, name: 'History', path: '#' },
    { icon: <PlaySquare size={24} />, name: 'Your videos', path: '/dashboard' },
    { icon: <Clock size={24} />, name: 'Watch later', path: '/watch-later' },
    { icon: <ThumbsUp size={24} />, name: 'Liked videos', path: '/liked' },
  ];

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      {mainLinks.map((link) => (
        <div 
          key={link.name} 
          className={`sidebar-item ${path === link.path ? 'active' : ''}`}
          onClick={() => link.path !== '#' && navigate(link.path)}
        >
          {link.icon}
          <span className="sidebar-text">{link.name}</span>
        </div>
      ))}
      
      <div className="sidebar-divider"></div>
      
      <div className="sidebar-header">You</div>
      {userLinks.map((link) => (
        <div 
          key={link.name} 
          className={`sidebar-item ${path === link.path ? 'active' : ''}`}
          onClick={() => link.path !== '#' && navigate(link.path)}
        >
          {link.icon}
          <span className="sidebar-text">{link.name}</span>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
