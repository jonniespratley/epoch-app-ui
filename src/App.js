import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Browse, Epochs, NoMatch } from './pages';
import { Navbar } from './components';

const App = ({ children }) => {
  return (
    <Container>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Browse />} />
          <Route path="browse/*" element={<Epochs />} />
          <Route element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};
export default App;
