import { useState } from 'react';
import { Menu, Search, Mic, Video, Bell, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ toggleSidebar }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <button className="icon-btn" onClick={toggleSidebar}>
          <Menu size={24} />
        </button>
        <div className="logo" onClick={() => navigate('/')} style={{cursor: 'pointer'}}>
          <Video size={28} fill="currentColor" />
          <span>StreamSphere</span>
        </div>
      </div>
      
      <div className="nav-center">
        <form className="search-form" onSubmit={handleSearch}>
          <input 
            type="text" 
            placeholder="Search" 
            className="search-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="search-btn">
            <Search size={20} />
          </button>
        </form>
        <button className="mic-btn">
          <Mic size={20} />
        </button>
      </div>

      <div className="nav-right">
        <button className="icon-btn" onClick={() => navigate('/dashboard')}>
          <Video size={24} />
        </button>
        <button className="icon-btn">
          <Bell size={24} />
        </button>
        <div className="icon-btn" onClick={() => navigate('/dashboard')} style={{cursor: 'pointer'}}>
          <User size={32} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
