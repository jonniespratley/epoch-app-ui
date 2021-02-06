import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  styled,
  Typography
} from '@material-ui/core';
import React, { useReducer, useState } from 'react';
import { useParams } from 'react-router-dom';
import { EpochCard } from 'src/components';
import { useFetch } from '../hooks';

function getFirstImage(images) {
  if (images) {
    return images[0].url;
  }
}

const BlackButton = styled(Button)({
  background: 'transparent',
  color: 'white'
});

const ListenButtons = ({playlist}) => {
  return (
    <Grid item>
      <BlackButton>
        <img
          src="/assets/listen-on-music-button.png"
          alt="Listen on Apple Music"
          width={125}
        />
      </BlackButton>
      <BlackButton onClick={() => {
        window.open(playlist.external_urls.spotify)
      }}>
        <img
          src="/assets/listen-on-sptfy-button.png"
          alt="Listen on Spotify"
          width={125}
        />
      </BlackButton>
    </Grid>
  );
};


function getTrackArtist(track){
  return track.artists[0].name
}
function getTrackAlbum(track){
  return track.album.name
}
function getTrackImage(track) {
  return track.album.images[2].url;
}

function renderTrackItem(item, index) {
  return (
    <ListItem key={item.track.name} button>
      <ListItemAvatar>
        <Avatar src={getTrackImage(item.track)} />
      </ListItemAvatar>
      <ListItemText 
        primary={`${index + 1} - ${item.track.name}`} 
        secondary={`${getTrackArtist(item.track)} - ${getTrackAlbum(item.track)}`}
        />
      
    </ListItem>
  );
}

export const Details = () => {
  let { username, playlist } = useParams();
  const [query, setQuery] = useState(`${username}/${playlist}`);
  const url = query && `/data/${query}.json`;

  const { status, data, error } = useFetch(url);
  const playlistData = data;
  return (
    <Box my={2}>
      <Grid container direction="column" justify="center" alignItems="center">
        {status === 'error' && <div>{error}</div>}

        {status === 'fetching' && (
          <div className="loading">
            <CircularProgress />
          </div>
        )}
        {status === 'fetched' && (
          <Grid container justify="center" alignItems="center" direction="column">
            {playlistData && (
              <Grid item>
                <Typography variant="h4">{playlistData.name}</Typography>
                <img
                  width={300}
                  src={getFirstImage(playlistData.images)}
                  alt="Playlist Thumb"
                />
              </Grid>
            )}
            <ListenButtons playlist={playlistData}/>

            <Grid item>
              <List>
                {playlistData.tracks.items &&
                  playlistData.tracks.items.map((item, index) =>
                    renderTrackItem(item, index)
                  )}
              </List>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};
