import React from "react";
import { useRouteMatch } from "react-router-dom";
import { Box, Grid } from "@material-ui/core";
import { EpochCard } from "../components/EpochCard";
import { Header } from "./Header";

import data from "../data/data.json";

export const Profile = ({
  user = {
    username: ""
  }
}) => {
  let match = useRouteMatch();

  const { username } = match.params;

  // TODO - extract and fetch from backend
  const userData = data.users[username];

  console.log(userData);

  return (
    <section>
      {userData && (
        <Header username={userData.username} avatar={userData.image} />
      )}
      <Grid container spacing={2}>
        {userData.items &&
          userData.items.map((t) => (
            <Grid item xs={12} md={3}>
              <EpochCard
                key={t.id}
                {...t}
                link={`/browse/${userData.username}/${t.id}`}
              />
            </Grid>
          ))}
      </Grid>
    </section>
  );
};
