import { Container, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import Activity from "./Activity";



const Activities = () => {



  const activities = [{
    image: "https://media.puntal.com.ar/p/2c651d36302a93005933f093ff849ee1/adjuntos/270/imagenes/001/514/0001514450/1200x0/smart/educacionjpg.jpg",
    title: "EDUCACION",
    info:"Conocé más",
  },
  {
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "CULTURA",
    info:"Conocé más",
  },
  {
    image: "https://images.unsplash.com/photo-1663782464052-d4f9a77b24a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "EMPRENDEDURISMO",
    info:"Conocé más",
  },
  {
    image: "https://deportes.misiones.gob.ar/wp-content/uploads/2020/08/DEPOR-7.jpg",
    title: "SALUD Y DEPORTES",
    info:"Conocé más",
  }]

  return (
    <Container id="actividades" component="section" maxWidth="lg" sx={{ marginTop: "20px" }}>
      <Typography gutterBottom variant="h3" fontFamily="Chilanka" className="text-center lg:text-left" sx={{textDecoration: "underline #3A7B50" ,textDecorationThickness: "4px", textUnderlineOffset: "5px"}}>
          QUÉ HACEMOS 
        </Typography>
      <Grid container spacing={3}>
        {activities.map(a => {return (
          <Grid item xs={12}>
          <Activity
            image={a.image}
            title={a.title}
            info={a.info}
          />
        </Grid>
        )})}
      </Grid>
    </Container>
  );
};

export default Activities;
