import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Container, Grid, Typography, styled, Paper, Button, useTheme, Stack, useMediaQuery } from "@mui/material";
import StarRateIcon from '@mui/icons-material/StarRate';
import { Link } from "react-router-dom";
import EducationResults from "./EducationResults";

export default function CenteredTabs({ subject, title, cite, subCite }) {
  const theme = useTheme()
  const mdScreen = useMediaQuery(theme.breakpoints.down('md'));
  const lgScreen = useMediaQuery(theme.breakpoints.down('lg'));
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg" disableGutters>
      <Stack component={"section"} mt={5} gap={2} padding={2}>
          <Typography gutterBottom variant="h3" fontFamily="Chilanka" className="text-center lg:text-left" sx={{textDecoration: "underline #3A7B50" ,textDecorationThickness: "4px", textUnderlineOffset: "5px"}}>
          {title}
        </Typography>
        <Typography variant="h1" fontFamily="Chilanka" fontWeight={800} textAlign={"center"}> {cite}</Typography>
        <Typography variant="overline" textAlign={"center"}> {subCite} </Typography>
      </Stack>
      <Tabs component={"ul"} textColor="white" indicatorColor="" value={value} aria-label="education tabs" onChange={handleChange} sx={{width:"fit-content", mt:5, borderRadius:"10px 10px 0 0"}}>
          <Tab component={"li"} key={0} label={subject[0].label} sx={{fontSize: mdScreen ? 14 : 18, color: "black", fontWeight:900, textIndent: 2, letterSpacing: 2, borderRight: value == 0 ? "1px solid black" : "null", borderTop: value == 0 ? "1px solid black" : null, borderLeft: value == 0 ? "1px solid black" : null, boxShadow:"1px 1px 2px black",  backgroundColor: value === 0 ? "white" : "#d4d4d8" }}/>;
          <Tab component={"li"} key={1} label={subject[1].label} sx={{fontSize: mdScreen ? 14 : 18, color: "black", fontWeight:900, textIndent: 2, letterSpacing: 2, borderLeft: value == 1 ? "1px solid black" : "null", borderTop: value == 1 ? "1px solid black" : null, borderRight: value == 1 ? "1px solid black" : null, boxShadow:"1px 1px 2px black",  backgroundColor: value === 1 ? "white" : "#d4d4d8" }}/>;
      </Tabs>
      <Paper component={"section"} sx={{ width: "100%"}}>
        <Grid container >
          <Grid container direction="column" justifyContent="space-between" gap={2} item xs={12} md={8} padding={2}>
            <Typography textAlign={mdScreen ? "center" : "left"}>
              {value == 1 ?  <>
                La integración de nuevas tecnologías en el proceso de aprendizaje es fundamental para mantenerse al día con las necesidades y preferencias de los estudiantes. Queremos que nuestros chicos aprendan <b style={{ fontWeight: "700", fontStyle: 'italic', color:"#3A7B50", fontSize:"20px" }}> jugando, disfrutando y haciendo usos responsables de las mismas </b> </>
                :
                <>
                  Nuestro plan de alfabetización es una aventura. Es un plan que pone en el centro el juego del descubrimiento con el objetivo de despertar la <b style={{ fontWeight: "700", fontStyle: 'italic', color:"#3A7B50", fontSize:"20px" }}>  curiosidad, el pensamiento crítico y la pasión por el conocimiento </b>.
                </>}  
            </Typography>
            <Box sx={{display: lgScreen ? "column" : "flex", justifyContent: lgScreen ? "center" : "space-around", alignItems:"center"}}>
              {value == 0 ? <EducationResults subject={subject[0]} /> : <EducationResults subject={subject[1]} />}
              <Box sx={{display: "flex", flexDirection:"column", alignItems: lgScreen ? "center" : "end"}}>
                  <Typography variant="h6" fontWeight="bold" paddingX={6} textAlign={lgScreen ? "center" : null } mt={mdScreen ? 5 : 0}> 
                    {value == 1 ? "« Tenemos que preparar a los estudiantes para su futuro, no para nuestro pasado »" : 
                    "« Todo el mundo tiene talento, es solo cuestión de moverse hasta descubrirlo »"}
                  </Typography>
                  <Typography variant="overline" fontWeight={800} fontFamily="Chilanka" paddingRight={lgScreen ? 0 : 10} paddingTop={2}> {value == 1 ? "Ian Jukes" : "George Lucas"} <StarRateIcon color="yellow" sx={{pb:0.5}} /></Typography>
              </Box>
            </Box>
            <Typography textAlign={mdScreen ? "center" : "left"}>
            {value == 1 ? <>Nos adecuamos a los gustos de los niños y las nuevas tendencias para fomentar ambientes educativos más <b style={{ fontWeight: "700", fontStyle: 'italic', color:"#3A7B50", fontSize:"20px" }}> estimulantes, divertidos, coloridos y motivadores. </b> </> : 
              <> Valoramos la creatividad y la expresión individual, fomentando un ambiente donde los estudiantes puedan sentirse libres de expresarse y explorar sus intereses. Creemos que la educación es un viaje que nunca termina, y estamos comprometidos a brindar el apoyo necesario para que los niños y niñas se sientan <b style={{ fontWeight: "700", fontStyle: 'italic', color:"#3A7B50", fontSize:"20px" }}> seguros, felices y puedan desarrollarse como así lo sueñan </b>. </>}
            </Typography>
            <Typography textAlign={mdScreen ? "center" : "left"}>
              {" "}
              {value == 1 ? "Al proporcionar contenido educativo que sea interactivo, dinámico y fácilmente accesible a través de dispositivos tecnológicos, podemos involucrar a los estudiantes de una manera que los motive a explorar y aprender de manera autónoma." : 
              ""}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} p={2}>
            <img 
                src={value === 0 ? 'https://images.unsplash.com/photo-1560785496-284e257f0bf7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' : 'https://images.unsplash.com/photo-1584697964190-7383cbee8277?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} 
                alt="" 
                style={{width:"100%", objectFit: "cover", objectPosition: "center", height: mdScreen ? 200 : '100%', borderRadius:5, boxShadow:"5px 5px 1px #d4d4d8"}}
            />
        </Grid>
        </Grid>
      </Paper>
        <Box mt={5} sx={{width:"100%", display:"flex", justifyContent:"center", gap:5}}>
          <Link to="/voluntariado"><Button variant='contained' color='red' > <Typography fontWeight={600} color={"white"}> Sumate al equipo </Typography></Button></Link>
          <Link to="/donaciones"> <Button variant="contained" color="red"> <Typography fontWeight={600} color={"white"}> Colaborá con el proyecto</Typography></Button></Link>
        </Box>
    </Container>
  );
}
