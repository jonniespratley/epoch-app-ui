import {
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  RootRef,
  styled,
  withStyles
} from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';

import data from '../data/data.json';

function getPlaylistFromData({ username, playlist }) {
  const userData = data.users[username];
  let out = {
    items: []
  };
  if (userData && userData.items) {
    out = userData.items.find((item) => item.id === playlist);
  }
  return out;
}

const BlackButton = styled(Button)({
  background: 'transparent',
  color: 'white'
});

const ListenButtons = () => {
  return (
    <Grid item>
      <BlackButton>
        <img
          src="/assets/listen-on-music-button.png"
          alt="Listen on Apple Music"
          width={150}
        />
      </BlackButton>
      <BlackButton>
        <img
          src="/assets/listen-on-sptfy-button.png"
          alt="Listen on Spotify"
          width={150}
        />
      </BlackButton>
    </Grid>
  );
};

export const Details = () => {
  let { username, playlist } = useParams();
  // TODO - Fetch playlist details
  const playlistData = getPlaylistFromData({ username, playlist });
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item>
        <img src={playlistData.image} alt="Playlist Thumb" />
      </Grid>
      <ListenButtons />
      <Grid item>
        <List>
          <ListItem>
            <ListItemText primary="Track 1" />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};
