// Import required libraies
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

function Loader(props) {
  const { fullPage, message } = props;

  //Styling
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      margin: theme.spacing(1),
      "& > * + *": {
        margin: theme.spacing(5),
      },
      justifyContent: "center",
      alignItems: "center",
      ...(fullPage && {
        height: "100vh",
      }),
    },
    text: {
      color: "#ea3592",
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {message && <div className={classes.text}>{message}</div>}
      <CircularProgress color="secondary" size="1rem" />
    </div>
  );
}

export default Loader;
