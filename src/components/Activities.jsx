import { Container, Grid } from "@mui/material";
import React from "react";
import derechosHumanos from "../assets/DerechosHumanos.jpg";
import Activity from "./Activity";

const Activities = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: "20px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Activity
            image={
              "https://media.puntal.com.ar/p/2c651d36302a93005933f093ff849ee1/adjuntos/270/imagenes/001/514/0001514450/1200x0/smart/educacionjpg.jpg"
            }
            title={"EDUCACION"}
            info={"Conocé más"}
          />
        </Grid>
        <Grid item xs={12}>
          <Activity
            image={derechosHumanos}
            title={"DERECHOS HUMANOS"}
            info={"Conocé más"}
          />
        </Grid>
        <Grid item xs={12}>
          <Activity
            image={
              "https://images.unsplash.com/photo-1663782464052-d4f9a77b24a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            title={"EMPRENDEDURISMO"}
            info={"Conocé más"}
          />
        </Grid>
        <Grid item xs={12}>
          <Activity
            image={
              "https://deportes.misiones.gob.ar/wp-content/uploads/2020/08/DEPOR-7.jpg"
            }
            title={"SALUD Y DEPORTES"}
            info={"Conocé más"}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Activities;
