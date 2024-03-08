import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Stack, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

export default function AccordionExpandDefault() {

  const theme = useTheme()
  const smScreen = useMediaQuery(theme.breakpoints.down("sm"))
  const mdScreen = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <Stack width={mdScreen ? "100%" : "80%"} flex flexDirection="col" justifyContent="center" alignItems="center" >
      <Accordion sx={{"&:hover": {backgroundColor: "#dddddd", transition: "background-color 1s ease-in-out"}}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography fontWeight="bold">Nuestra misión</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Construir un futuro más brillante y equitativo para todos
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{"&:hover": {backgroundColor: "#dddddd", transition: "background-color 1s ease-in-out"}}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography fontWeight="bold">¿Donde estamos?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='body1' color="black">
          La Boca, Esteban Echeverría, Lomas de Zamora, Quilmes y La Pampa. Es en estas calles donde encontramos nuestropropósito.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{"&:hover": {backgroundColor: "#dddddd", transition: "background-color 1s ease-in-out"}}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography fontWeight="bold">¿Con quienes?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Todos son bienvenidos. Si querés sumarte, hacé <Link to="/voluntariado" className='text-[#E15244] underline font-semibold'>¡click acá!</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
}