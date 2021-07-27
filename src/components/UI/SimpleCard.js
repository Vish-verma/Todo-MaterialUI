import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import { Container } from "@material-ui/core";
import { Typography } from "@material-ui/core";
// import blue from "@material-ui/core/colors/blue";

// const color = blue["A100"];
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: 15,
    // borderColor: color,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const SimpleCard = (props) => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Card raised={true} className={classes.root} align="center">
        <CardContent>
          <Typography
            align="center"
            color="primary"
            variant="h5"
            component="h2"
            gutterBottom={true}
          >
            {props.title}
          </Typography>
          {props.children}
        </CardContent>
      </Card>
    </Container>
  );
};

export default SimpleCard;
