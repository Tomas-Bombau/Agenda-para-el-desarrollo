import { Container, Typography, Stack, useTheme, useMediaQuery, Divider, Box, Button, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React, { useState } from "react";
import Results from "./Results";
import AccordionAbout from "./AccordionAbout";
import VerifiedIcon from "@mui/icons-material/Verified";
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import SchoolIcon from '@mui/icons-material/School';


const ExtraInformation = () => {

  const theme = useTheme()
  const smScreen = useMediaQuery(theme.breakpoints.down("sm"))
  const mdScreen = useMediaQuery(theme.breakpoints.down("md"))

  const metas = [
    "Creemos que hay enfrentar la realidad con valentía, comprendiendo que la verdadera identidad de las personas y los pueblos se forjan en la lucha por alcanzar los sueños",
    "Creemos que la transformación exige responsabilidad para impulsar el desarrollo sostenible y empoderar a las comunidades.",
  ];

  const metas2 = [
    "Creemos que cada miembro de nuestra asociación es un constructor del progreso, que busca crear puentes entre oportunidades y desafíos",
    "Creemos en un mundo donde laigualdad, la educación y la justicia sean accesibles para todos.",
  ]


  return (
    <Container maxWidth="lg" sx={{ marginY: "40px" }} component="section">
      <Stack textAlign={smScreen ? "center" : "left"} spacing={2}>
        <Stack flex flexDirection={mdScreen ? "col" : "row"} alignItems="center" divider={<Divider orientation="vertical" flexItem />}>
        <List sx>
              {metas.map((meta, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <VerifiedIcon color="green" />
                  </ListItemIcon>
                  <ListItemText primary={<Typography variant="body1"> {meta}</Typography>}/>
                </ListItem>
              ))}
        </List>
          <List>
              {metas2.map((meta, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <VerifiedIcon color="green" />
                  </ListItemIcon>
                  <ListItemText primary={<Typography variant="body1"> {meta}</Typography>}/>
                </ListItem>
              ))}
            </List>
        </Stack>
      </Stack>
      <Results />
      <Typography variant="body1" marginTop="50px"  textAlign={smScreen ? "center" : "left"}> <span style={{fontFamily:"Chilanka", fontWeight:700, fontSize:"25px"}}>Agenda para el Desarrollo</span>, una Asociación Civil comprometida con la construcción de un futuro más <span style={{fontFamily:"Chilanka", fontWeight:700, fontSize:"25px"}}> equitativo y próspero</span> </Typography>
  </Container>
  );
};

export default ExtraInformation;
