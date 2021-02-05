import { Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

export const Browse = ({ users = ['shawnsakamoto'] }) => {
  return (
    <div id="browse">
      <ul>
        {users &&
          users.map((name) => (
            <li key={name}>
              <Link to={`/browse/${name}`}>{name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
