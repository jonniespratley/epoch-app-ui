import React from "react";

import { GraphQLClient, ClientContext } from "graphql-hooks";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Browse, Profile, Details } from "./pages";
import { Navbar } from "./components/Navbar";
import data from "./data/data.json";
import { Container } from "@material-ui/core";

const client = new GraphQLClient({
  url: "/graphql"
});
console.log(data);

function App({ children }) {
  return (
    <Router>
      <Container>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Browse items={Object.keys(data.users)} />
          </Route>
          <Route path="/browse/:username">
            <Profile />
          </Route>
          <Route path="/browse/:username/:id">
            <Details />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
