import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

export default function AccordionExpandDefault() {
  return (
    <Stack flex flexDirection="col" justifyContent="center" alignItems="center" >
      <Accordion  sx={{width:"80%"}}>
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
      <Accordion sx={{width:"80%" }}>
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
      <Accordion color="green" sx={{width:"80%"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography fontWeight="bold">¿Con quienes?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Todos son bienvenidos. Si querés sumarte, hacé <Link to="/voluntariado" className='text-[#3A7B50] underline font-semibold'>¡click acá!</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
}