import { Stack, Container, Grid, useMediaQuery, Typography } from '@mui/material'
import React from 'react'
import CardAchievement from "./CardAchievement";
import { useTheme } from "@emotion/react";

const Results = () => {

    
  const theme = useTheme()
  const smScreen = useMediaQuery(theme.breakpoints.down("sm"))
  const mdScreen = useMediaQuery(theme.breakpoints.down("md"))

    const achievements = [
      {image: "https://res.cloudinary.com/dhw5ulqje/image/upload/v1710444646/Agenda/Landing/zipukl1ugo7w4fptnxnu.webp", title: "Salud", description: "+10 operativos sanitarios en barrios populares"},
      {image: "https://res.cloudinary.com/dhw5ulqje/image/upload/v1710444647/Agenda/Landing/mjn9ik4s05ot7r3a5lea.jpg", title: "Educación", description: "+100 niños acompañados en su trayectoria educativa"}, 
      {image: "https://res.cloudinary.com/dhw5ulqje/image/upload/v1710168087/Agenda/Landing/hrg08zgvusywzpns8naw.jpg", title: "Emprendimientos", description: "5 emprendimientos acompañados"}]


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
          </Stack>        
        </Grid>
    </Container>
  )
}

export default Results