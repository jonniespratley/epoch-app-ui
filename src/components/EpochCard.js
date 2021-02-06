import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardMedia,
  Link,
  makeStyles
} from '@material-ui/core';

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

function getFirstImage(images) {
  return images[0].url;
}

export const EpochCard = ({
  id,
  name,
  link,
  images,
  image = 'http://placehold.it/200'
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        title={`${name} Image`}
        image={getFirstImage(images)}
        className={classes.media}
      />
      {link && <CardContent>
        <Link component={RouterLink} to={link} className={classes.link}>
          {name}
        </Link>
      </CardContent>}
    </Card>
  );
};
