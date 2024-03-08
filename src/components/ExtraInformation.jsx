import { Container, Typography, Stack, useTheme, useMediaQuery, Divider, Box, Button } from "@mui/material";
import React, { useState } from "react";
import Results from "./Results";
import AccordionAbout from "./AccordionAbout";
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import SchoolIcon from '@mui/icons-material/School';


const ExtraInformation = () => {

  const theme = useTheme()
  const smScreen = useMediaQuery(theme.breakpoints.down("sm"))
  const mdScreen = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <Container maxWidth="lg" sx={{ marginY: "40px" }} component="section">
      <Stack textAlign={smScreen ? "center" : "left"} spacing={2}>
        <Stack flex flexDirection={mdScreen ? "col" : "row"} alignItems="center" divider={<Divider orientation="vertical" flexItem />}>
          <Typography variant="body1" width={mdScreen ? "100%" : "50%"} fontFamily="primary" sx={{marginX:"auto"}}>Unidos por la pasión e impulsados por la acción decidimos conformar <span style={{fontSize: "25px", fontFamily:"Chilanka", fontWeight:700, textDecoration:"underline", textDecorationColor:"#3A7B50",textDecorationThickness: '2px', textUnderlineOffset: '4px',}}>Agenda para el Desarrollo </span> , una asociación civil que encarna el espíritu de transformación. Juntos, queremos forjar un camino hacia un mañana mejor, porque creemos que la verdadera esencia de cada uno se encuentra en la lucha por un mundo más justo y desarrollado.
          </Typography>
          <Stack sx={{width:"50%", height:"300px", display:"flex", alignItems:"center", justifyContent:"center"}}>
          <AccordionAbout />
          </Stack>
        </Stack>
      <Results />

      </Stack>
      <Typography variant="body1" marginTop={smScreen ? "100px" : "0px"}  textAlign={smScreen ? "center" : "left"}> Somos Agenda para el Desarrollo, una Asociación Civil comprometida con la construcción de un futuro más <span style={{fontFamily:"Chilanka", fontWeight:700, fontSize:"25px"}}> equitativo y próspero</span> </Typography>
  </Container>
  );
};

export default ExtraInformation;
