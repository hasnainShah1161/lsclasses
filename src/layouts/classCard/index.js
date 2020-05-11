import React from 'react';
import { Card, makeStyles } from '@material-ui/core';
import { classCard } from 'src/theme';
const useStyles = makeStyles(theme => ({
  card: classCard.card
}));

const ClassCard = props => {
  const classes = useStyles();
  const { className = '', key = '' } = props;
  return (
    <>
      {' '}
      <Card key={key} className={classes.card + ' ' + className}>
        {props.children}
      </Card>
    </>
  );
};

export default ClassCard;
