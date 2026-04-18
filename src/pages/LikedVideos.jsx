import VideoCard from '../components/VideoCard';
import { ThumbsUp } from 'lucide-react';

const LikedVideos = ({ likedVideos, watchLater, setWatchLater }) => {
  return (
    <>
      <h1 style={{marginBottom: 24}}>Liked Videos</h1>
      
      {likedVideos.length > 0 ? (
        <div className="video-grid">
          {likedVideos.map(video => (
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
          <ThumbsUp size={64} />
          <h2>No liked videos yet</h2>
          <p>Videos you like will appear here</p>
        </div>
      )}
    </>
  );
};

export default LikedVideos;
