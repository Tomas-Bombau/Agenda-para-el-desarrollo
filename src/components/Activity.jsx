import { Box, Button, Typography } from "@mui/material";
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import React from "react";

const Activity = ({image, title, info}) => {
  return (
    <Box
      height={200}
      borderRadius={0}
      sx={{
        position: "relative",
        backgroundImage:
          `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "10px 10px 10px black",
        "&:hover::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(254,231,138, 0.5)", // Cambia el color y la opacidad según tu preferencia
        },
      }}
    >
      <Typography
        color={title == "ARTE" || title == "SALUD Y DEPORTES" ? "black" : "white"}
        variant="h3"
        sx={{
          position: "absolute",
          bottom: 20,
          left: 50,
          fontWeight: "bold"
        }}
      >
        {title}
      </Typography>
      <Button
        variant="contained"
        color="red"
        size="small"
        endIcon={<PlayCircleOutlinedIcon />}
        sx={{
          position: "absolute",
          bottom: 20,
          right: 50,
          cursor: "pointer",
          "&:hover":{
              transform: "scale(1.02)"
          }
        }}
      >
        {info}
      </Button>
    </Box>
  );
};

export default Activity;
