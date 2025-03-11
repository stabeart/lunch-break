import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import LiteraryMenu from './components/MagazineMenu';
import About from './components/About';
import DonatePage from './components/DonatePage';
import Submissions from './components/Submissions';
import CurrentIssue from './components/CurrentIssue';
import PastIssues from './components/PastIssues';
import WeeklySpecials from './components/WeeklySpecials';
import Archive from './components/Archive';
import ArchivePiece from './components/ArchivePiece';
import ProseSpecials from './components/ProseSpecials';

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
          <Route path="/specials" element={<WeeklySpecials />} />
          <Route path="/weekly" element={<WeeklySpecials />} />
          <Route path="/weekly/prose" element={<ProseSpecials />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/archive/:id" element={<ArchivePiece />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </div>
  );
}

export default App;