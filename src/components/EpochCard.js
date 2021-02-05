import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Link,
  makeStyles
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    //maxWidth: 400
    background: 'transparent'
  },
  media: {
    height: 200
  },
  link: {
    color: '#655346',
    fontSize: 13,
    fontWeight: 'bold'
  }
});

export const EpochCard = ({
  id,
  name,
  link,
  image = 'http://placehold.it/200'
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
        <Link component={RouterLink} to={link} className={classes.link}>
          {name}
        </Link>
      </CardContent>
    </Card>
  );
};
