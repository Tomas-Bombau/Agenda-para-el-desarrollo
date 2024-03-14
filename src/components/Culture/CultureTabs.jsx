import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Container, Grid, Typography, Paper, Button, useTheme, Stack, useMediaQuery } from "@mui/material";
import PaletteIcon from '@mui/icons-material/Palette';
import { Link } from "react-router-dom";
import CultureResults from "./CultureResults";

export default function CenteredTabs({ subject }) {
  const theme = useTheme()
  const mdScreen = useMediaQuery(theme.breakpoints.down('md'));
  const lgScreen = useMediaQuery(theme.breakpoints.down('lg'));
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };




  return (
    <Container maxWidth="lg" disableGutters>
      <Stack component={"section"} mt={10} gap={2} padding={2}>

        {/* <Typography variant="h1" fontFamily="Chilanka" fontWeight={800} textAlign={"center"}> « El niño no es un vaso que hay que llenar, sino una antorcha que hay que encender » </Typography>
        <Typography variant="body1" textAlign={"center"}> Para nosotros la educación ha cobrado un nuevo significado y por eso es que emerge la necesidad de postular nuevas visiones acerca del fenómeno educativo que trasciendan la concepción de un aula disciplinar. Como en el arte, la educación abraza la creatividad y la individualidad dentro de la infinita diversidad de expresiones.</Typography>
        <Typography variant="h6" textAlign={"center"}>Creemos en una práctica educativa más sensible, creativa y porqué no, divertida.  </Typography> */}
      </Stack>
      <Tabs component={"ul"} textColor="white" indicatorColor="" value={value} aria-label="education tabs" onChange={handleChange} sx={{backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh5gGMIC9zdOGet5t4fhEmkZ50Tnc6R_aWCA&usqp=CAU)", backgroundPosition:"center", width:"fit-content", mt:5, borderRadius:"10px 10px 0 0"}}>
          <Tab component={"li"} key={0} label={subject[0].label} sx={{fontSize: mdScreen ? 14 : 18, color: "black", fontWeight:900, textIndent: 2, letterSpacing: 2, borderRight: value == 0 ? "1px solid black" : "null", borderTop: value == 0 ? "1px solid black" : null, borderLeft: value == 0 ? "1px solid black" : null, boxShadow:"1px 1px 2px black",  backgroundColor: value === 0 ? "transparent" : "#d4d4d8" }}/>;
          <Tab component={"li"} key={1} label={subject[1].label} sx={{fontSize: mdScreen ? 14 : 18, color: "black", fontWeight:900, textIndent: 2, letterSpacing: 2, borderLeft: value == 1 ? "1px solid black" : "null", borderTop: value == 1 ? "1px solid black" : null, borderRight: value == 1 ? "1px solid black" : null, boxShadow:"1px 1px 2px black",  backgroundColor: value === 1 ? "transparent" : "#d4d4d8" }}/>;
      </Tabs>
      <Paper component={"section"} sx={{ width: "100%"}}>
        <Grid container >
          <Grid container direction="column" justifyContent="space-between" gap={2} item xs={12} md={8} padding={2}>
            <Typography textAlign={mdScreen ? "center" : "left"}>
              {value == 1 ?  <>
                La integración de nuevas tecnologías en el proceso de aprendizaje es fundamental para mantenerse al día con las necesidades y preferencias de los estudiantes. Queremos que nuestros chicos aprendan <b style={{ fontWeight: "700", fontStyle: 'italic', color:"#3A7B50", fontSize:"20px" }}> jugando, disfrutando y haciendo usos responsables de las mismas </b> </>
                :
                <>
                  En el taller de arte del barrio Las Torres, Esteban Echeverría, se crea un espacio vibrante donde la creatividad florece y los lazos comunitarios se fortalecen. A través de la expresión artística con materiales reciblados , los niños y niñas del barrio exploran no solo técnicas y estilos, sino también valores fundamentales como el respeto, la colaboración y la empatía. 
                </>}  
            </Typography>
            <Box sx={{display: lgScreen ? "column" : "flex", justifyContent: lgScreen ? "center" : "space-around", alignItems:"center"}}>
              <Box sx={{display: "flex", flexDirection:"column", alignItems: lgScreen ? "center" : "end"}}>
                  <Typography variant="h6" fontWeight="bold" paddingX={6} textAlign={lgScreen ? "center" : null } mt={mdScreen ? 5 : 0}> 
                    {value == 1 ? "« Tenemos que preparar a los estudiantes para su futuro, no para nuestro pasado »" : 
                    "« Mi sueño era poder brindarle a mi barrio, desde mi humilde hogar, lo que tanto amo. El arte cambia vidas. »"}
                  </Typography>
                  <Typography variant="overline" fontWeight={800} fontFamily="Chilanka" paddingRight={lgScreen ? 0 : 10} paddingTop={2}> {value == 1 ? "Ian Jukes" : " Profe Julia "} <PaletteIcon color="green" sx={{pb:0.5}} /></Typography>
              </Box>
            </Box>
            <Typography textAlign={mdScreen ? "center" : "left"}>
            {value == 1 ? <>Nos adecuamos a los gustos de los niños y las nuevas tendencias para fomentar ambientes educativos más <b style={{ fontWeight: "700", fontStyle: 'italic', color:"#3A7B50", fontSize:"20px" }}> estimulantes, divertidos, coloridos y motivadores. </b> </> : 
              <> En este taller, el arte se convierte en un vehículo para la reflexión y el diálogo sobre temas sociales cruciales. Los participantes no solo desarrollan sus habilidades artísticas, sino que también aprenden a apreciar la diversidad, a enfrentar los desafíos con creatividad y a inspirarse mutuamente para crear un cambio positivo en la comunidad</>}
            </Typography>
            <Typography textAlign={mdScreen ? "center" : "left"}>
              {" "}
              {value == 1 ? "Al proporcionar contenido educativo que sea interactivo, dinámico y fácilmente accesible a través de dispositivos tecnológicos, podemos involucrar a los estudiantes de una manera que los motive a explorar y aprender de manera autónoma." : 
              ""}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} p={2}>
            <CultureResults subject={ value == 0 ? subject[0] : subject[1]}/>
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
