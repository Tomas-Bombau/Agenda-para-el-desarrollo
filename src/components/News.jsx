import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import SwiperComponent from "./SwiperComponent";
import Notes from "./Notes";

const News = () => {
  return (
    <Container maxWidth="lg" sx={{paddingY:"20px"}}>
      <Grid container spacing={10}>
        <Grid item xs={6} >
            <SwiperComponent
              card={<Notes title={"hola"} description={"asd"} />}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography textAlign="left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi unde facilis, necessitatibus beatae nesciunt ducimus nobis adipisci veritatis! Delectus labore eligendi explicabo repellendus, nostrum sapiente facilis corrupti minus nisi impedit.
            </Typography>
            
          </Grid>
      </Grid>
    </Container>
  );
};

export default News;
