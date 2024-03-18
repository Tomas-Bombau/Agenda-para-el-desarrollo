import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { Box, Container, Grid, IconButton, Stack, Tooltip, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import PaletteIcon from '@mui/icons-material/Palette';
import CelebrationIcon from '@mui/icons-material/Celebration';
import RecyclingIcon from '@mui/icons-material/Recycling';
import { useLocation } from "react-router-dom";

const Introduction = ({introduction}) => {

  const theme = useTheme()
  const location = useLocation()
  const mdScreen = useMediaQuery(theme.breakpoints.down("md"))

  const Image = styled("img")({
    borderRadius: "160px 0px 160px 0px",
    height: "500px",
    }
  )

  const Scotch = styled("img")({
      position:"absolute",
      top: 0,
      left: 0,
      height: "100px"
    }
  )

  const ScotchTwo = styled("img")({
    position:"absolute",
    bottom: 0,
    right: 0,
    height: "100px",
  }
)

  return (
    <Container maxWidth="lg" disableGutters >
      <Grid my={10} container>
        <Grid item container md={6} >
        <Typography gutterBottom fontFamily="Raleway" fontWeight={700} variant="h1" className="text-center lg:text-left" sx={{textDecoration: "underline #3A7B50", textDecorationThickness: "4px", textUnderlineOffset: "5px",}}>
        {introduction.title}
        </Typography>
        <Stack spacing={3}>
        <Typography>
          {introduction.parragraph1}
        </Typography>
        <Typography>
        {introduction.parragraph2}
        </Typography>
        <Typography>
        {introduction.parragraph3}
        </Typography>
        </Stack>
        {location.pathname == "/cultura" && 
        <Box sx={{alignSelf:"end"}}>
          <Tooltip title="Musica" color="secondary">
          <IconButton >
            <LibraryMusicIcon fontSize="large"/>
          </IconButton>
        </Tooltip>
        <Tooltip title="Dibujo y pintura" color="red">
          <IconButton >
            <PaletteIcon fontSize="large"/>
          </IconButton>
        </Tooltip>
        <Tooltip title="Materiales reciclados" color="green">
          <IconButton>
            <RecyclingIcon fontSize="large"/>
          </IconButton>
        </Tooltip>
        <Tooltip title="Celebraciones artísticas">
          <IconButton>
            <CelebrationIcon fontSize="large" color="primary"/>
          </IconButton>
        </Tooltip>
        </Box>}
        </Grid>
        <Grid container item md={6} justifyContent={mdScreen ? "center" : "end"}>
          <Box sx={{position:"relative"}}>
            <Image src={introduction.image} alt="" />
            <Scotch src="https://static.vecteezy.com/system/resources/thumbnails/009/337/967/small_2x/single-glued-duct-tape-taxture-for-design-element-png.png" alt="" />
            <ScotchTwo src="https://static.vecteezy.com/system/resources/thumbnails/009/337/967/small_2x/single-glued-duct-tape-taxture-for-design-element-png.png" alt="" />
          </Box> 
        </Grid>
      </Grid>
    </Container>
  );
};

export default Introduction;
