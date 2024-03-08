import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Slide,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import VerifiedIcon from "@mui/icons-material/Verified";
import React from "react";
import { useTheme } from "@emotion/react";


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
                  <Button variant="contained" fontWeight={500} color="red" endIcon={<ReadMoreIcon />} >
                    Conocé a todo el equipo
                  </Button>
                </Stack>
              <Box sx={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", zIndex: "1"}}>
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", width: "100%", height: "100%"}}>
                  <polygon points="30,0 100,0 70,100 0,100" fill="#FEE78A"/>
                </svg>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6}>
            <List>
              {metas.map((meta) => (
                <ListItem>
                  <ListItemIcon>
                    <VerifiedIcon color="green" />
                  </ListItemIcon>
                  <ListItemText primary={<Typography variant="body1"> {meta}</Typography>}/>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
};

export default About;
