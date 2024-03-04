import React from "react";
import {
  Container,
  Grid,
} from "@mui/material";
import Notes from "./Notes";

const Blog = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Notes />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Notes />
        </Grid>
        <Grid item xs={12} sm={4}>
          {" "}
          <Notes />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Blog;
