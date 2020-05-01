import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";
import RightPane from "./rightPane";
import LeftPane from "./leftPane";

export default class exercise extends Component {
  render() {
    const styles = {
      Paper: { padding: 20, marginTop: 10, marginBottom: 10 },
    };
    return (
      <Grid container>
        <Grid item sm>
          <LeftPane style={styles} />
        </Grid>
        <Grid item lg>
          <RightPane style={styles} />
        </Grid>
      </Grid>
    );
  }
}
