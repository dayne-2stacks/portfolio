// import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import { IndexPage } from "./pages";

import { BlogListPage } from './pages/blogs';
import {BlogPage} from './pages/blog';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route exact path="/" element={<IndexPage />} />
        <Route path="/blog/post/:slug" element={<BlogPage />} />
        <Route path="/blog" element={<BlogListPage />} />

      </Routes>
    </Router>
    </div>
  );
}

export default App;
