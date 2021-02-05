import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = ({ title = 'epochs.app' }) => (
  <AppBar position="static" color="transparent">
    <Toolbar variant="dense">
      <Typography varient="h6" color="inherit">
        {title}
      </Typography>
    </Toolbar>
  </AppBar>
);
