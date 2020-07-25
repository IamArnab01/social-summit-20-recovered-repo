import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../Layout/Navbar/Navbar";
import Footer from "../Layout/Footer/Footer";
import Team from "./Team";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#111",
  },
}));

export default function Index() {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <div className={classes.root}>
        <Team />
      </div>
      <Footer />
    </div>
  );
}
