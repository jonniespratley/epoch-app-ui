import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
      <p>
        Go back to <Link to="/">home</Link>
      </p>
    </div>
  );
}
