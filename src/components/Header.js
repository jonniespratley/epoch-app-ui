import React, { Suspense } from 'react';
import { Avatar, Grid, makeStyles } from '@material-ui/core';

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

const HeaderComponent = ({ username, avatar }) => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <Avatar src={avatar} alt={username} className={classes.large}>
            {username}
          </Avatar>
        </Grid>
      </Grid>
    </header>
  );
};
export const Header = React.memo(HeaderComponent);
