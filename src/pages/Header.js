import React from "react";
import { Avatar, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  large: {
    margin: "0 auto",
    width: theme.spacing(15),
    height: theme.spacing(15)
  }
}));
export const Header = ({ username, avatar }) => {
  const classes = useStyles();
  return (
    <header className="user-header">
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <Avatar src={avatar} alt={username} className={classes.large}>
            {username}
          </Avatar>
          <Typography variant="h4">{username}</Typography>
        </Grid>
      </Grid>
    </header>
  );
};
