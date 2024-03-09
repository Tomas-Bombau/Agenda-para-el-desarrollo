import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ReadMoreIcon from '@mui/icons-material/ReadMore';

import React from "react";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";
import SwipperPhotosMain from "./SwiperComponent";


const About = () => {
  const metas = [
    "Creemos que hay enfrentar la realidad con valentía, comprendiendo que la verdadera identidad de las personas y los pueblos se forjan en la lucha por alcanzar los sueños",
    "Creemos que la transformación exige responsabilidad para impulsar el desarrollo sostenible y empoderar a las comunidades.",
    "Creemos que cada miembro de nuestra asociación es un constructor del progreso, que busca crear puentes entre oportunidades y desafíos",
    "Creemos en un mundo donde laigualdad, la educación y la justicia sean accesibles para todos.",
  ];

  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.down('md'));


  return (
    <Container id="nosotros" component="section" className="my-10">
      <Stack spacing={4} direction="column">
        <Typography variant="h3" fontFamily="Chilanka" className="text-center lg:text-left" sx={{textDecoration: "underline #3A7B50" ,textDecorationThickness: "4px", textUnderlineOffset: "5px", color:"primaryLight"}}>
          NOSOTROS 
        </Typography>
        <Grid container>
          <Grid item md={6} sx={{display: "flex", justifyContent: "center", alignItems: "start"}}>
            <Box sx={{ width: smScreen ? "100%" : "80%", height: smScreen ? "100%": 400, position: "relative", display:"flex", alignItems:"center"}}>
                <Stack spacing={4} direction="column" alignItems={smScreen ? "center" : "start"} sx={{ position: "relative", zIndex: "2"}}>
                  <Typography textAlign={smScreen ? "center" : "start"} fontFamily="Raleway" fontWeight={700} variant="h3" gutterBottom>
                    "Mucha gente pequeña, en lugares pequeños, haciendo cosas pequeñas, puede cambiar el mundo"
                  </Typography>
                  <Typography variant="underline" textAlign={smScreen ? "center" : "start"} gutterBottom>
                    Tomas Bombau, presidente Agenda para el Desarrollo
                  </Typography>
                  <Link to="nosotros">
                  <Button variant="contained" fontWeight={500} color="red" endIcon={<ReadMoreIcon />} >
                    Conocé a todo el equipo
                  </Button>
                  </Link>
                </Stack>
              <Box sx={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", zIndex: "1"}}>
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", width: "100%", height: "100%"}}>
                  <polygon points="30,0 100,0 70,100 0,100" fill="#FEE78A"/>
                </svg>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} >
            <Typography variant="body1" fontFamily="primary" sx={{marginX:"auto"}}>Unidos por la pasión e impulsados por la acción decidimos conformar <span style={{fontSize: "25px", fontFamily:"Chilanka", color:"#3A7B50", fontWeight:700, textDecoration:"underline", textDecorationColor:"#E15244",textDecorationThickness: '2px', textUnderlineOffset: '4px',}}>Agenda para el Desarrollo </span> , una asociación civil que encarna el espíritu de transformación. Juntos, queremos forjar un camino hacia un mañana mejor, porque creemos que la verdadera esencia de cada uno se encuentra en la lucha por un mundo más justo y desarrollado.
            </Typography>
            <SwipperPhotosMain />
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
};

export default About;
