import React from 'react';
import { Card } from '@material-ui/core';

const SavedCard = props => {
  return (
    <Card>
      <h3>{props.grant.grant_title}</h3>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ display: 'flex' }}>
          <p>Due: {props.grant.due_date}</p>
        </div>
        <div style={{ display: 'flex' }}>
          <p>Amount: ${props.grant.grant_amount}</p>
        </div>
      </div>
    </Card>
  );
};

export default SavedCard;
