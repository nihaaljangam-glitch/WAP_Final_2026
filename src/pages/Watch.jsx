import { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { ThumbsUp, ThumbsDown, Share2, Download, MoreHorizontal } from 'lucide-react';
import { MOCK_VIDEOS } from '../utils/data';

const Watch = ({ likedVideos, setLikedVideos }) => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [video, setVideo] = useState(location.state?.video || null);
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    // If navigated directly without state, find the video
    if (!video) {
        const found = MOCK_VIDEOS.find(v => v.id === id);
        if (found) setVideo(found);
    }
    
    // Set recommended (excluding current)
    setRecommended(MOCK_VIDEOS.filter(v => v.id !== id).slice(0, 5));
    window.scrollTo(0, 0);
  }, [id, video]);

  if (!video) return <div className="page-container">Loading...</div>;

  const isLiked = likedVideos.some(v => v.id === video.id);

  const handleLike = () => {
    if (isLiked) {
      setLikedVideos(likedVideos.filter(v => v.id !== video.id));
    } else {
      setLikedVideos([...likedVideos, video]);
    }
  };

  return (
    <div className="watch-page">
      <div className="watch-main">
        <div className="player-container">
          <img src={video.thumbnail} alt={video.title} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
          <div style={{position: 'absolute', backgroundColor: 'rgba(0,0,0,0.6)', padding: '16px', borderRadius: '8px'}}>
             Simulated Video Player 
          </div>
        </div>
        
        <h1 className="watch-title">{video.title}</h1>
        
        <div className="watch-actions">
          <div className="channel-info">
            <img src={video.channelAvatar || `https://i.pravatar.cc/150?u=${video.id}`} alt={video.channel} className="card-avatar" style={{width: 40, height: 40}} />
            <div>
              <div className="channel-name">{video.channel}</div>
              <div className="channel-subs">1.2M subscribers</div>
            </div>
            <button className="subscribe-btn">Subscribe</button>
          </div>
          
          <div className="action-buttons">
            <button className={`action-btn ${isLiked ? 'active' : ''}`} onClick={handleLike}>
              <ThumbsUp size={20} fill={isLiked ? "currentColor" : "none"} /> 
              {isLiked ? (video.likes + 1).toLocaleString() : video.likes.toLocaleString()}
              <div style={{width: 1, height: 20, backgroundColor: 'var(--border-color)', margin: '0 8px'}}></div>
              <ThumbsDown size={20} />
            </button>
            <button className="action-btn">
              <Share2 size={20} /> Share
            </button>
            <button className="action-btn">
              <Download size={20} /> Download
            </button>
            <button className="action-btn" style={{padding: '8px', borderRadius: '50%'}}>
              <MoreHorizontal size={20} />
            </button>
          </div>
        </div>
        
        <div className="description-box">
          <div className="desc-stats">{video.views} views • {video.timestamp}</div>
          <p>This is a simulated description for the video. In a real application, you would fetch this data from an API and render it here with support for links, hashtags, and formatting.</p>
        </div>
        
        {/* Simple Comment Section */}
        <div className="comments-section" style={{marginTop: 32}}>
          <h3 style={{marginBottom: 16}}>124 Comments</h3>
          <div style={{display: 'flex', gap: 16, marginBottom: 24}}>
             <img src="https://i.pravatar.cc/150?u=loopedlogic" alt="loopedlogic" style={{width: 40, height: 40, borderRadius: '50%'}} />
             <input type="text" placeholder="Add a comment..." style={{flex: 1, background: 'transparent', border: 'none', borderBottom: '1px solid var(--border-color)', color: 'white', padding: '8px 0', outline: 'none'}} />
          </div>
        </div>
      </div>
      
      <div className="watch-sidebar">
        {recommended.map(rec => (
          <div key={rec.id} className="recommended-card" onClick={() => navigate(`/watch/${rec.id}`, { state: { video: rec } })}>
            <img src={rec.thumbnail} alt={rec.title} className="recommended-img" />
            <div className="recommended-info">
              <h4 className="recommended-title">{rec.title}</h4>
              <div className="recommended-author">{rec.channel}</div>
              <div className="recommended-author">{rec.views} views • {rec.timestamp}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watch;
