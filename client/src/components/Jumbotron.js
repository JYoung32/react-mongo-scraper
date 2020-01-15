import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">MERN Scraper</h1>
        <hr className="my-2" />
        <p className="lead">NY Times Edition.</p>
      </Jumbotron>
    </div>
  );
};

export default Example;