import { Stack, Container, Grid, useMediaQuery, Typography } from '@mui/material'
import React from 'react'
import CardAchievement from "./CardAchievement";
import { useTheme } from "@emotion/react";

const Results = () => {

    
  const theme = useTheme()
  const smScreen = useMediaQuery(theme.breakpoints.down("sm"))
  const mdScreen = useMediaQuery(theme.breakpoints.down("md"))

    const achievements = [
      {image: "https://media.lmcipolletti.com/p/0f77bc3b6e84516d06d3d91518574122/adjuntos/198/imagenes/007/480/0007480992/medicion-peso-talla-ninosjpg.jpg", title: "Salud", description: "+10 operativos sanitarios en barrios populares"},
      {image: "https://www.olavarria.gov.ar/wp-content/uploads/2023/09/DH-Centro-Dia-Clases-Matematicas-3.jpg", title: "Educación", description: "+100 niños acompañados en su trayectoria educativa"}, 
      {image: "https://res.cloudinary.com/dhw5ulqje/image/upload/v1710168087/Agenda/hrg08zgvusywzpns8naw.jpg", title: "Emprendimientos", description: "5 emprendimientos acompañados"}]


  return (
    <Container maxWidth="lg" component="section" className="my-10"> 
       <Grid
        container >
          <Stack flex direction={mdScreen ? "column" : "row"} alignItems="center" width="100%" height="100%" gap={2} >
          {achievements.map(a => {return (
              <Grid item xs={12} md={4} sx={{display: "flex", alignItems: "center", justifyContent: "center", flexWrap:"wrap", zIndex:"2"}}>
                  <CardAchievement image={a.image} title={a.title} description={a.description} label={a.label}/>
              </Grid>
            )})}
            {/* <Stack position="absolute"  zIndex={1} top={0} left={0} width="100%" height="100%">
                  <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", width: "100%", height: "100%"}}>
                    <polygon points="0,25 50,30 100,25 100,75 50,70 0,75" fill="#3A7B50" stroke="rgb(0, 0, 0, 0.3)" strokeWidth="0.2" />
                  </svg>
            </Stack> */}
          </Stack>        
        </Grid>
    </Container>
  )
}

export default Results