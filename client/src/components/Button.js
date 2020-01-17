import React from 'react';
import { Button } from 'reactstrap';

const ActionButton = (props) => {

    let action;

    switch(props.action) {
        case "saveArticle":
            action = props.saveArticles
            break;
    }
  return (
    <div>
      <Button color="primary">{action}</Button>{' '}
    </div>
  );
}

export default ActionButton;