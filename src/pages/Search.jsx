import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import { SearchX } from 'lucide-react';

const Search = ({ videos, watchLater, setWatchLater }) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      const lowerQuery = query.toLowerCase();
      const filtered = videos.filter(v => 
        v.title.toLowerCase().includes(lowerQuery) || 
        v.category.toLowerCase().includes(lowerQuery) ||
        v.channel.toLowerCase().includes(lowerQuery)
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query, videos]);

  return (
    <>
      <h2 style={{marginBottom: 24, fontWeight: 'normal'}}>
        Search results for <span style={{fontWeight: 'bold'}}>"{query}"</span>
      </h2>
      
      {results.length > 0 ? (
        <div className="video-grid">
          {results.map(video => (
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
          <SearchX size={64} />
          <h2>No results found</h2>
          <p>Try different keywords or remove search filters</p>
        </div>
      )}
    </>
  );
};

export default Search;
