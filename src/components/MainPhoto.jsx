import React, { useEffect, useState } from "react";
import { Box, Chip, Container } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const MainPhoto = () => {
  const [image, setImage] = useState(0);

  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const backgroundImageUrls = [
    "url(https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
    "url(https://images.unsplash.com/photo-1505748641491-f7ee2fd6fb4d?q=80&w=2129&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
    "url(https://plus.unsplash.com/premium_photo-1681841222599-6218dc7940f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hpbGRyZW5zJTIwZGF5fGVufDB8MHwwfHx8MA%3D%3D)",
  ];

  useEffect(() => {
    setTimeout(() => {
      image == 0 && setImage(1);
      image == 1 && setImage(2);
      image == 2 && setImage(0);
    }, 10000);
  }, [image]);

  return (
    <Container
      component="section"
      maxWidth="xl"
      className="my-10"
      sx={{
        position: "relative",
        height: smScreen ? 300 : 500,
        borderRadius: 5,
        boxShadow: "10px 9px 64px -29px black",
        backgroundImage: backgroundImageUrls[image],
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "5s ease",
      }}
    >
      <Box
        display="flex"
        gap={2}
        sx={{
          position: "absolute",
          bottom: 0,
          marginBottom: "10px",
          left: "47%",
        }}
      >
        <Chip
          onClick={() => setImage(0)}
          variant="outlined"
          sx={{
            border: 2,
            width: 13,
            height: 13,
            color: "white",
          }}
        />
        <Chip
          onClick={() => setImage(1)}
          variant="outlined"
          sx={{
            border: 2,
            width: 13,
            height: 13,
            color: "white",
          }}
        />
        <Chip
          onClick={() => setImage(2)}
          variant="outlined"
          sx={{
            border: 2,
            width: 13,
            height: 13,
            color: "white",
          }}
        />
      </Box>
    </Container>
  );
};

export default MainPhoto;
