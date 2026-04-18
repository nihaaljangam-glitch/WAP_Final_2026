import { Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const VideoCard = ({ video, watchLater, setWatchLater }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/watch/${video.id}`, { state: { video } });
  };

  const handleWatchLater = (e) => {
    e.stopPropagation();
    if (!setWatchLater) return;
    
    if (watchLater.some(v => v.id === video.id)) {
      setWatchLater(watchLater.filter(v => v.id !== video.id));
    } else {
      setWatchLater([...watchLater, video]);
    }
  };

  const isSaved = watchLater && watchLater.some(v => v.id === video.id);

  return (
    <div className="video-card" onClick={handleCardClick}>
      <div className="thumbnail-container">
        <img src={video.thumbnail} alt={video.title} className="thumbnail" />
        {setWatchLater && (
          <button 
            className="save-btn" 
            onClick={handleWatchLater}
            title={isSaved ? "Remove from Watch Later" : "Add to Watch Later"}
          >
            <Clock size={20} fill={isSaved ? "white" : "none"} color="white" />
          </button>
        )}
      </div>
      <div className="card-info">
        <img src={video.channelAvatar || `https://i.pravatar.cc/150?u=${video.id}`} alt={video.channel} className="card-avatar" />
        <div className="card-text">
          <h3 className="card-title">{video.title}</h3>
          <div className="card-channel">{video.channel}</div>
          <div className="card-stats">
            {video.views} views • {video.timestamp || 'Just now'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
