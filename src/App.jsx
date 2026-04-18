// Minor update for WAP Final 2026 deployment
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Watch from './pages/Watch';
import Search from './pages/Search';
import WatchLater from './pages/WatchLater';
import LikedVideos from './pages/LikedVideos';
import Shorts from './pages/Shorts';
import Dashboard from './pages/Dashboard';
import { MOCK_VIDEOS } from './utils/data';

function App() {
  const [videos, setVideos] = useState(MOCK_VIDEOS);
  const [watchLater, setWatchLater] = useState([]);
  const [likedVideos, setLikedVideos] = useState([]);

  // Load from local storage on initial mount
  useEffect(() => {
    const savedWatchLater = localStorage.getItem('streamsphere_watchLater');
    const savedLiked = localStorage.getItem('streamsphere_liked');
    const savedVideos = localStorage.getItem('streamsphere_videos');
    
    if (savedWatchLater) setWatchLater(JSON.parse(savedWatchLater));
    if (savedLiked) setLikedVideos(JSON.parse(savedLiked));
    if (savedVideos) setVideos(JSON.parse(savedVideos));
  }, []);

  // Save to local storage whenever state changes
  useEffect(() => {
    localStorage.setItem('streamsphere_watchLater', JSON.stringify(watchLater));
  }, [watchLater]);

  useEffect(() => {
    localStorage.setItem('streamsphere_liked', JSON.stringify(likedVideos));
  }, [likedVideos]);

  useEffect(() => {
    localStorage.setItem('streamsphere_videos', JSON.stringify(videos));
  }, [videos]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home videos={videos} watchLater={watchLater} setWatchLater={setWatchLater} />} />
          <Route path="watch/:id" element={<Watch likedVideos={likedVideos} setLikedVideos={setLikedVideos} />} />
          <Route path="search" element={<Search videos={videos} watchLater={watchLater} setWatchLater={setWatchLater} />} />
          <Route path="watch-later" element={<WatchLater watchLater={watchLater} setWatchLater={setWatchLater} />} />
          <Route path="liked" element={<LikedVideos likedVideos={likedVideos} watchLater={watchLater} setWatchLater={setWatchLater} />} />
          <Route path="shorts" element={<Shorts />} />
          <Route path="dashboard" element={<Dashboard videos={videos} setVideos={setVideos} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
