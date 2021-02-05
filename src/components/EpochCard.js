import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles
} from "@material-ui/core";

import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    //maxWidth: 400
    background: "transparent"
  },
  media: {
    height: 220
  }
});
export const EpochCard = ({
  id,
  name,
  link,
  image = "http://placehold.it/220"
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        title={`${name} Image`}
        image={image}
        className={classes.media}
      />
      <CardContent>
        <Link to={link}>{name}</Link>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};
