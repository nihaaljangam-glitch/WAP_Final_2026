// Minor update: Multimedia functionality improvements
import VideoCard from '../components/VideoCard';
import { Clock } from 'lucide-react';

const WatchLater = ({ watchLater, setWatchLater }) => {
  return (
    <>
      <h1 style={{marginBottom: 24}}>Watch Later</h1>
      
      {watchLater.length > 0 ? (
        <div className="video-grid">
          {watchLater.map(video => (
            <VideoCard 
              key={video.id} 
              video={video} 
              watchLater={watchLater}
              setWatchLater={setWatchLater}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <Clock size={64} />
          <h2>Your Watch Later list is empty</h2>
          <p>Save videos to watch them later</p>
        </div>
      )}
    </>
  );
};

export default WatchLater;
