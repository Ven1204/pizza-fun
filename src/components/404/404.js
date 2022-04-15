import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound(props) {
  return (
    <div>
      <Link to="/">
        404 page not found
        <button>Home</button>
      </Link>

    </div>
  );
}

export default PageNotFound;
