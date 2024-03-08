import { Stack, Container, Grid, useMediaQuery } from '@mui/material'
import React from 'react'
import CardAchievement from "./CardAchievement";
import { useTheme } from "@emotion/react";

const Results = () => {

    
  const theme = useTheme()
  const smScreen = useMediaQuery(theme.breakpoints.down("sm"))

    const achievements = [
      {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn4pwPJHoGoceghrekfbb3Jw5lHmfVcH2W4w&usqp=CAU", title: "Salud", description: "+10 operativos sanitarios en barrios populares"},
      {image: "https://static.vecteezy.com/system/resources/previews/024/029/779/original/school-kids-clipart-transparent-background-free-png.png", title: "Educación", description: "+100 niños acompañados en su trayectoria educativa"}, 
      {image: "https://bio-emprender.iica.int/wp-content/uploads/2023/10/idea.png", title: "Emprendimientos", description: "5 emprendimientos acompañados"}]


  return (
    <Container maxWidth="lg" component="section">
       <Grid
        container  height={smScreen ? "600px" : "300px"}>
          <Stack flex direction={smScreen ? "column" : "row"} alignItems="center" position="relative" width="100%" height="100%" gap={2} >
          {achievements.map(a => {return (
              <Grid item xs={12} md={4} sx={{display: "flex", alignItems: "center", justifyContent: "center", flexWrap:"wrap", zIndex:"2"}}>
                  <CardAchievement image={a.image} title={a.title} description={a.description} label={a.label}/>
              </Grid>
            )})}
            <Stack position="absolute"  zIndex={1} top={0} left={0} width="100%" height="100%">
                  <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", width: "100%", height: "100%"}}>
                    <polygon points="0,25 50,30 100,25 100,75 50,70 0,75" fill="#3A7B50" stroke="rgb(0, 0, 0, 0.3)" strokeWidth="0.2" />
                  </svg>
            </Stack>
          </Stack>        
        </Grid>
    </Container>
  )
}

export default Results