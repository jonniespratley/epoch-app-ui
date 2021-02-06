import React, { Suspense } from 'react';
import { Avatar, Grid, makeStyles } from '@material-ui/core';

import { useFetch } from '../hooks';
const useStyles = makeStyles((theme) => ({
  root: {
    background: 'rgba(0, 0, 0, 0.1)',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  large: {
    margin: '0 auto',
    width: theme.spacing(20),
    height: theme.spacing(20)
  }
}));
export const Header = ({ username, avatar }) => {
  const classes = useStyles();
  const url = username && `/data/${username}/profile.json`;
  const { status, data, error } = useFetch(url);

  console.log('Header', status, data);
  return (
    <header className={classes.root}>
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <Suspense fallback={<span>Loading..</span>}>
            <Avatar src={avatar} alt={username} className={classes.large}>
              {username}
            </Avatar>
          </Suspense>
        </Grid>
      </Grid>
    </header>
  );
};
