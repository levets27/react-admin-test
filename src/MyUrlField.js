import React from "react";
import { withStyles } from "@material-ui/core/styles";
import LaunchIcon from "@material-ui/icons/Launch";

const styles = {
  link: {
    textDecoration: "none"
  },
  icon: {
    width: ".5em",
    paddingLeft: 2
  }
};

const MyUrlField = ({ record = {}, source, classes }) => (
  <a href={record[source]}>
    {record[source]}
    <LaunchIcon className={classes.icon} />
  </a>
);

export default withStyles(styles)(MyUrlField);