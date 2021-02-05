import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import { Profile } from './Profile';
import { Details } from './Details';
import { Box } from '@material-ui/core';

export const Epochs = () => {
  return (
    <Box py={4}>
      <Routes>
        <Route path=":username" element={<Profile />} />
        <Route path=":username/:playlist" element={<Details />} />
      </Routes>
    </Box>
  );
};
