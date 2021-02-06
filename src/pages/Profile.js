import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, CircularProgress, Divider, Grid } from '@material-ui/core';
import { Header, EpochCard } from '../components';
import { useFetch } from '../hooks';

const renderGridItem = ({ username, item }) => {
  if (item.type && item.type === 'section') {
    return (
      <Grid item xs={12} key={item.id}>
        <Box py={2}>
          <Divider />
        </Box>
      </Grid>
    );
  }
  return (
    <Grid item xs={12} sm={4} lg={2} key={item.id}>
      <EpochCard {...item} link={`/browse/${username}/${item.id}`} />
    </Grid>
  );
};

export const Profile = ({
  user = {
    username: ''
  }
}) => {
  const { username } = useParams();

  const url = username && `/data/${username}/playlists.json`;
  const { status, data, error } = useFetch(url);

  const userData = {
    username,
    items: data.items
  };

  if (!userData) {
    return <div>Could not find user.</div>;
  }

  return (
    <section>
      {userData && <Header username={username} />}
      {status === 'error' && <div>{error}</div>}
      {status === 'fetching' && (
        <div className="loading">
          <CircularProgress />
        </div>
      )}
      <Grid container spacing={2}>
        {userData.items &&
          userData.items.map((item) => renderGridItem({ username, item }))}
      </Grid>
    </section>
  );
};
