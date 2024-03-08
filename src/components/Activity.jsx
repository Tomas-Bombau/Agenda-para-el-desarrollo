import { Box, Button, Stack, Typography, useTheme, useMediaQuery } from "@mui/material";
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import React from "react";

const Activity = ({image, title, info}) => {

  const theme = useTheme()
  const mdScreen = useMediaQuery(theme.breakpoints.down('sm'));

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
      <Stack flex flexDirection={mdScreen ? "col" : "row"} justifyContent={mdScreen ? "end" : "space-between"} alignItems={mdScreen ? "justify-start" : "end"} height={200} marginX={mdScreen ? 1 : 2}>
        <Typography
          marginBottom={2}
          color={title == "CULTURA" || title == "SALUD Y DEPORTES" ? "black" : "white"}
          variant="h3"
          sx={{
            fontWeight: "bold"
          }}
        >
          {title}
        </Typography>
        <Button
          variant="contained"
          color="red"
          size="small"
          endIcon={<PlayCircleOutlinedIcon sx={{color: "white"}}/>}
          sx={{
            marginBottom:"20px",
            "&:hover":{
                transform: "scale(1.02)"
            }
          }}
        >
          <Typography fontWeight={400} color="white">{info} </Typography>
        </Button>
      </Stack>
    </Box>
  );
};

export default Activity;
