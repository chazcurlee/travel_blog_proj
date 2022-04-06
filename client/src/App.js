import './App.css';
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home';
import Posts from './pages/Posts'
import PostEntry from './pages/PostEntry';
import PostDetail from './pages/PostDetail'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <header>Travel Blog</header>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path="post-entry" element={<PostEntry />} />
        <Route path="posts/:id" element={<PostDetail />} />
        
      </Routes>
      
    </div>
  );
}

export default App;
