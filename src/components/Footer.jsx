import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";

const Footer = () => {
  return (
    <Box
    color={"secondary"}
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
        marginTop: 10,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
          <Typography variant="h5" color="#3A7B50" fontWeight={"700"} align="center" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              Donado 1275, Ciudad Autónoma de Buenos Aires
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              Email: agendaparaeldesarrollo@gmail.com
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              Phone: +5491165939393
            </Typography>
               
          </Grid>
          <Grid item xs={12} sm={4}>
          <Typography variant="h5" color="#3A7B50" fontWeight={"700"} align="center" gutterBottom>
            Agenda para el Desarrollo
            </Typography>   
            <Typography variant="body2" align="center" color="text.secondary">
            Somos esos pequeños soñadores, que buscan otros, para transformar el mundo.
            </Typography>
            <Link to="/" className="flex flex-row justify-center"><img className="h-20 w-20 mt-10" src="https://images.vexels.com/media/users/3/142789/isolated/preview/2bfb04ad814c4995f0c537c68db5cd0b-multicolor-swirls-circle-logo.png" /></Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h5" color="#3A7B50" fontWeight={"700"} align="center" gutterBottom>
              Seguinos en redes
            </Typography>
            <Stack flex flexDirection="row" alignItems="center" justifyContent="center">
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook fontSize="large" />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram fontSize="large" sx={{"$:hover":{color:"#3A7B50"}}} />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit" >
              <Twitter fontSize="large" color=""/>
            </Link>
            </Stack>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body1" align="center">
            {"Copyright © Agenda para el Desarrollo "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer