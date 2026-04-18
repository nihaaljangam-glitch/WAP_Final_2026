// Minor update for WAP Final 2026 deployment
import { useState } from 'react';
import { PlaySquare, BarChart2, Users, Eye } from 'lucide-react';

const Dashboard = ({ videos, setVideos }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: 'Coding',
    thumbnail: ''
  });

  const totalViews = videos.reduce((acc, curr) => acc + (parseInt(curr.views.replace(/[^0-9]/g, '')) || 0), 0);
  const totalLikes = videos.reduce((acc, curr) => acc + (curr.likes || 0), 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.thumbnail) return;

    const newVideo = {
      id: Date.now().toString(),
      title: formData.title,
      category: formData.category,
      thumbnail: formData.thumbnail,
      channel: 'You',
      channelAvatar: 'https://i.pravatar.cc/150?u=you',
      views: '0',
      likes: 0,
      timestamp: 'Just now'
    };

    setVideos([newVideo, ...videos]);
    setFormData({ title: '', category: 'Coding', thumbnail: '' });
    alert("Video successfully uploaded!");
  };

  return (
    <div className="dashboard-page">
      <h1 className="dash-header">Creator Dashboard</h1>
      
      <div className="stats-grid">
        <div className="stat-card">
          <PlaySquare size={32} style={{color: 'var(--accent-color)', marginBottom: 16}} />
          <div className="stat-value">{videos.length}</div>
          <div className="stat-label">Total Videos</div>
        </div>
        <div className="stat-card">
          <Eye size={32} style={{color: '#4285f4', marginBottom: 16}} />
          <div className="stat-value">{totalViews > 0 ? `${totalViews}K+` : '0'}</div>
          <div className="stat-label">Total Views</div>
        </div>
        <div className="stat-card">
          <ThumbsUp size={32} style={{color: '#0f9d58', marginBottom: 16}} />
          <div className="stat-value">{totalLikes.toLocaleString()}</div>
          <div className="stat-label">Total Likes</div>
        </div>
        <div className="stat-card">
          <Users size={32} style={{color: '#f4b400', marginBottom: 16}} />
          <div className="stat-value">1.2M</div>
          <div className="stat-label">Subscribers</div>
        </div>
      </div>

      <div className="upload-section">
        <h2 style={{marginBottom: 24}}>Upload New Video (Simulated)</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Video Title</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="Enter video title"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Category</label>
            <select 
              className="form-input" 
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
            >
              <option value="Coding">Coding</option>
              <option value="Music">Music</option>
              <option value="Gaming">Gaming</option>
              <option value="React">React</option>
              <option value="News">News</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Thumbnail URL</label>
            <input 
              type="url" 
              className="form-input" 
              placeholder="https://example.com/image.jpg"
              value={formData.thumbnail}
              onChange={(e) => setFormData({...formData, thumbnail: e.target.value})}
              required
            />
          </div>
          
          <button type="submit" className="submit-btn" style={{marginTop: '16px'}}>
            Upload Video
          </button>
        </form>
      </div>
    </div>
  );
};

// Need to import ThumbsUp since we used it in dashboard
import { ThumbsUp } from 'lucide-react';

export default Dashboard;
