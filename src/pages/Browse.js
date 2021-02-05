import React from "react";
import { useQuery } from "graphql-hooks";
import { Link } from "react-router-dom";

const HOMEPAGE_QUERY = `
query searchSpotify($q:String){
  search(q:$q){
    tracks{
      items{
        name
        id
        album{
          images{
            url
          }
        }
      }
    }
  }
}`;

export const Browse = ({ items }) => {
  let msg;
  const loading = false;
  const error = null;
  const data = {
    users: []
  };
  /* const { loading, error, data } = useQuery(HOMEPAGE_QUERY, {
    variables: {
      q: "uzi-vert"
    }
  });

  if (loading) {
    msg = "Loading...";
  }
  if (error) {
    console.log(error);
    msg = "Something Bad Happened";
  }*/
  console.log(items);
  return (
    <div id="browse">
      <p>This view needs to be updated to look nicer</p>
      <ul>
        {items &&
          items.map((name) => (
            <li key={name}>
              <Link to={`/browse/${name}`}>{name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
