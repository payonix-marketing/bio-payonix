import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BioLinkPage from './components/BioLinkPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BioLinkPage />} />
        <Route path="/:platform" element={<BioLinkPage />} />
      </Routes>
    </Router>
  );
};

export default App;