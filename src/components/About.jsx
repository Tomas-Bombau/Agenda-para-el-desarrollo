import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import React from "react";

const About = () => {
  const metas = [
    "Creemos que hay enfrentar la realidad con valentía, comprendiendo que la verdadera identidad de las personas y los pueblos se forjan en la lucha por alcanzar los sueños",
    "Creemos que la transformación exige responsabilidad para impulsar el desarrollo sostenible y empoderar a las comunidades.",
    "Creemos que cada miembro de nuestra asociación es un constructor del progreso, que busca crear puentes entre oportunidades y desafíos",
    "Creemos en un mundo donde laigualdad, la educación y la justicia sean accesibles para todos.",
  ];

  return (
    <Container
      id="nosotros"
      component="section"
      className="my-10"
    >
      <Typography variant="h3" gutterBottom>
        ¿Quién eres si no luchas por lo que crees?
      </Typography>
      <Typography variant="body1">
        Nosotros somos más que individuos; somos un grupo de personas unidas por
        la convicción de que la transformación positiva es posible.
        Quienes somos se define por la pasión que compartimos y la creencia
        inquebrantable en el potencial transformador de las personas.
      </Typography>
      <Stack spacing={4} direction="column">
        <Grid container >
          <Grid item xs={8}>
            <List>
              {metas.map((meta) => (
                <ListItem>
                  <ListItemIcon>
                    <VerifiedIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText primary={meta} />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={4}>
            <Box
              width="100%"
              height="100%"
              sx={{
                borderRadius: "8%",
                boxShadow: "10px 10px 20px black",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1527525443983-6e60c75fff46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG9nZXRoZXJ8ZW58MHwxfDB8fHwy)",
                // position: "relative", 
                // overflow: "hidden", 
                // "&:hover:before": {
                //   content: "''",
                //   position: "absolute",
                //   top: 0,
                //   left: 0,
                //   width: "100%",
                //   height: "100%",
                //   backgroundColor: "white", // Setting white background
                // },
                // transition: "transform 0.5s ease-in-out", // Adding transition property
                // "&:hover": {
                //   "&::before": {
                //     transform: "rotateY(0deg)", // Show the white background during flip
                //   },
                //   transform: "rotateY(180deg)", // Flip the card horizontally
                // },
            }}
            />
          </Grid>
        </Grid>
        <Typography variant="body1">
          Somos Agenda para el Desarrollo, una Asociación Civil comprometida con la construcción de un futuro más equitativo para todos
          
        </Typography>
      </Stack>
    </Container>
  );
};

export default About;
