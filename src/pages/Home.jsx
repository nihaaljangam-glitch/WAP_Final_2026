import { useState, useEffect } from 'react';
import VideoCard from '../components/VideoCard';
import { CATEGORIES } from '../utils/data';

const Home = ({ videos, watchLater, setWatchLater }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredVideos, setFilteredVideos] = useState(videos);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredVideos(videos);
    } else {
      setFilteredVideos(videos.filter(v => v.category === activeCategory));
    }
  }, [activeCategory, videos]);

  return (
    <>
      <div className="categories-container">
        {CATEGORIES.map(category => (
          <button
            key={category}
            className={`category-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="video-grid">
        {filteredVideos.map(video => (
          <VideoCard 
            key={video.id} 
            video={video} 
            watchLater={watchLater}
            setWatchLater={setWatchLater}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
