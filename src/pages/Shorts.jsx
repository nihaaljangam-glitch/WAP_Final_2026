import { ThumbsUp, ThumbsDown, MessageSquare, Share2, MoreHorizontal } from 'lucide-react';
import { MOCK_SHORTS } from '../utils/data';

const Shorts = () => {
  return (
    <div className="shorts-container">
      {MOCK_SHORTS.map(short => (
        <div key={short.id} className="short-card">
          <img src={short.thumbnail} alt={short.title} className="short-img" />
          <div className="short-overlay">
            <div className="short-info">
              <div style={{display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12}}>
                <img src={short.channelAvatar} alt={short.channel} style={{width: 32, height: 32, borderRadius: '50%'}} />
                <span style={{fontWeight: 'bold'}}>{short.channel}</span>
                <button style={{backgroundColor: 'white', color: 'black', padding: '4px 12px', borderRadius: 4, fontWeight: 'bold', fontSize: '0.8rem'}}>Subscribe</button>
              </div>
              <p style={{fontSize: '0.9rem', marginBottom: 8}}>{short.title}</p>
            </div>
            
            <div className="short-actions">
              <button className="short-action-btn">
                <ThumbsUp size={24} />
                {short.likes}
              </button>
              <button className="short-action-btn">
                <ThumbsDown size={24} />
                Dislike
              </button>
              <button className="short-action-btn">
                <MessageSquare size={24} />
                12k
              </button>
              <button className="short-action-btn">
                <Share2 size={24} />
                Share
              </button>
              <button className="short-action-btn" style={{marginTop: 8}}>
                <MoreHorizontal size={24} style={{padding: 4}} />
              </button>
              <img src={short.channelAvatar} style={{width: 40, height: 40, borderRadius: 8, marginTop: 8, border: '2px solid white'}} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shorts;
