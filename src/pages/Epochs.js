import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Profile } from './Profile';
import { Details } from './Details';

export const Epochs = () => {
  return (
    <Routes>
      <Route path=":username" element={<Profile />} />
      <Route path=":username/:playlist" element={<Details />} />
    </Routes>
  );
};
