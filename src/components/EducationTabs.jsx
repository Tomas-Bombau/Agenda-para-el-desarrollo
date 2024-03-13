import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Container, Grid, Typography, styled, Paper, Button } from "@mui/material";

export default function CenteredTabs({ subject }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const Image = styled("img")({
    width: 200,
    height: 200,
    borderRadius: 4,
    boxShadow: "1px 1px 5px black",
    objectFit: "cover",
    objectPosition: "center"
  });

  return (
    <Container maxWidth="lg" disableGutters>
      <Box padding={2} sx={{ width: "100%"}}>
        <Tabs  variant="fullWidth" textColor="secondary" indicatorColor="secondary" value={value} onChange={handleChange} >
          {subject.map((s, index) => {
            return <Tab key={index} label={s} />;
          })}
        </Tabs>

      </Box>
      <Paper sx={{marginTop: 5}} >
        <Grid container >
          <Grid container direction="column" justifyContent="space-between" gap={2} item sm={8} padding={2}>
            <Typography variant="body1">
              {" "}
              {value == 1 ? "La integración de nuevas tecnologías en el proceso de aprendizaje es fundamental para mantenerse al día con las necesidades y preferencias de los estudiantes. Por eso es que planteamos el aprendizaje como una aventura que nos desafíe a nuevos conocimientos y descubrimientos. Queremos que nuestros chicos aprendan jugando y disfrutando junto a las nuevas tecnologías" : 
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum commodi autem distinctio dolorum nemo dicta, officiis placeat aliquam aut praesentium delectus temporibus voluptatem quisConsequuntur rerum eligendi sunt udantium debitis."}
            </Typography>
            <Box sx={{display: "flex", justifyContent:"space-around", alignItems:"center"}}>
              <Image src={value == 1 ? "https://radiofonica.com/wp-content/uploads/2021/10/BARRIO-POPULAR-ROSARIO.jpg" : "https://res.cloudinary.com/dhw5ulqje/image/upload/v1710286442/Agenda/hpseyykgkmdfzce5so2t.jpg"}/>
              <Box sx={{display: "flex", flexDirection:"column", alignItems:"end"}}>
                <Typography variant="h6" fontWeight="bold" paddingX={2}>
                  {value == 1 ? "«Tenemos que preparar a los estudiantes para su futuro, no para nuestro pasado»." : 
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum commodi autem distinctio dolorum nemo dicta, officiis placeat aliquam aut praesentium delectus temporibus voluptatem quisConsequuntur rerum eligendi sunt udantium debitis."}
                </Typography>
                <Typography variant="overline" fontWeight={800} fontFamily="Chilanka" paddingRight={10} paddingTop={2}>Ian Jukes</Typography>
              </Box>
            </Box>
            <Typography>
            {value == 1 ? "Nos adecuamos a los gustos de los niños y las nuevas tendencias para fomentar ambientes educativos más estimulantes, divertidos, coloridos y motivadores. " : 
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum commodi autem distinctio dolorum nemo dicta, officiis placeat aliquam aut praesentium delectus temporibus voluptatem quisConsequuntur rerum eligendi sunt udantium debitis."}
            </Typography>
            <Typography>
              {" "}
              {value == 1 ? "Al proporcionar contenido educativo que sea interactivo, dinámico y fácilmente accesible a través de dispositivos tecnológicos, podemos involucrar a los estudiantes de una manera que los motive a explorar y aprender de manera autónoma." : 
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum commodi autem distinctio dolorum nemo dicta, officiis placeat aliquam aut praesentium delectus temporibus voluptatem quisConsequuntur rerum eligendi sunt udantium debitis."}
            </Typography>
          </Grid>
          <Grid container direction="column"  justifyContent="space-between" item sm={4} sx={{backgroundImage: `url(${value === 0 ? 'https://images.unsplash.com/photo-1560785496-284e257f0bf7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' : 'https://images.unsplash.com/photo-1584697964190-7383cbee8277?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'})`, backgroundSize:"cover", backgroundPosition:"center"}}>
          </Grid>
        </Grid>
      </Paper>
        <Box mt={5} sx={{width:"100%", display:"flex", justifyContent:"center", gap:5}}>
          <Button variant="contained" color="secondary">Sumá tu tiempo</Button>
          <Button variant="contained" color="secondary">Colaborá con el proyecto</Button>
        </Box>
    </Container>
  );
}
