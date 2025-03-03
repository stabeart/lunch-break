import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LiteraryMenu from './components/MagazineMenu';
import About from './components/About';
import DonatePage from './components/DonatePage';
import Submissions from './components/Submissions';
import CurrentIssue from './components/CurrentIssue';
import PastIssues from './components/PastIssues';
import Specials from './components/Specials';
import Weekly from './components/Weekly';

function App() {
  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LiteraryMenu />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/submissions" element={<Submissions />} />
          <Route path="/current" element={<CurrentIssue />} />
          <Route path="/past" element={<PastIssues />} />
          <Route path="/specials" element={<Specials />} />
          <Route path="/weekly" element={<Weekly />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;