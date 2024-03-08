import { Container, Typography, Stack, useTheme, useMediaQuery, Divider, Box } from "@mui/material";
import React, { useState } from "react";
import Results from "./Results";
import TextAnimation from "./TextAnimation";


const ExtraInformation = () => {

  const theme = useTheme()
  const smScreen = useMediaQuery(theme.breakpoints.down("sm"))
  const mdScreen = useMediaQuery(theme.breakpoints.down("md"))
  const [textOrImage, setTextOrImage] = useState(0)

  return (
    <Container maxWidth="lg" sx={{ marginY: "40px" }} component="section">
      
      <Stack textAlign={smScreen ? "center" : "left"} spacing={2}>
        <Stack flex flexDirection={mdScreen ? "col" : "row"} alignItems="center" divider={<Divider orientation="vertical" flexItem />}>
          <Typography variant="body1" width={mdScreen ? "100%" : "50%"} fontFamily="primary" sx={{marginX:"auto"}}>Unidos por la pasión e impulsados por la acción decidimos conformar <span style={{fontSize: "22px", fontFamily:"Chilanka", fontWeight:700, textDecoration:"underline", textDecorationColor:"#3A7B50",textDecorationThickness: '2px', textUnderlineOffset: '4px',}}>Agenda para el Desarrollo </span> , una asociación civil que encarna el espíritu de transformación. Juntos, queremos forjar un camino hacia   un mañana mejor, porque creemos que la verdadera esencia de cada uno se encuentra en la lucha por un mundo más justo y desarrollado.
          </Typography>
          <Stack sx={{width:"50%", height:"200px", display:"flex", justifyContent:"center", alignItems:"center"}}>
            {textOrImage === 0 ? <Typography>Agenda para el Desarrollo</Typography> : <Typography variant="body1" fontFamily="primary" >En los vibrantes corazones de <span style={{fontFamily:"Chilanka", fontWeight:500}}>La Boca, Esteban Echeverría, Lomas de Zamora y Quilmes, </span> estamos comprometidos con la transformación de las comunidades más vulnerables. </Typography>}
          </Stack>
        </Stack>
      <Results />
      </Stack>
      <Typography variant="body1" marginTop={smScreen ? "100px" : "0px"}  textAlign={smScreen ? "center" : "left"}> Es en estas calles donde encontramos nuestra pasión y propósito: <span style={{fontFamily:"Chilanka", fontWeight:700}}>construir un futuro más brillante y equitativo para todos.</span></Typography>
  </Container>
  );
};

export default ExtraInformation;
