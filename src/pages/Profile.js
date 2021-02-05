import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Divider, Grid } from '@material-ui/core';
import { Header, EpochCard } from '../components';

import data from '../data/data.json';

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
    <Grid item xs={12} sm={3} key={item.id}>
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

  // TODO - extract and fetch from backend
  const userData = data.users[username];
  if (!userData) {
    return <div>Could not find user.</div>;
  }

  return (
    <section>
      {userData && <Header username={username} avatar={userData.image} />}
      <Grid container spacing={2}>
        {userData.items &&
          userData.items.map((item) => renderGridItem({ username, item }))}
      </Grid>
    </section>
  );
};
