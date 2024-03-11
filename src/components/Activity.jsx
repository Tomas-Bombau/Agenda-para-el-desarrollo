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
        backgroundImage: `linear-gradient(170deg, rgba(255,255,255,0.6) 0%, rgba(0,0,0,0.4) 50%), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "10px 10px 10px black",
        "&:hover": {
          backgroundImage: `url(${image})`,
        },
      }}
    >
      <Stack flex flexDirection={mdScreen ? "col" : "row"} justifyContent={mdScreen ? "end" : "space-between"} alignItems={mdScreen ? "justify-start" : "end"} height={200} marginX={mdScreen ? 1 : 5}>
        <Typography
          marginBottom={2}
          color="white"
          variant="h3"
          sx={{
            fontWeight: "bold"
          }}
        >
          {title}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          endIcon={<PlayCircleOutlinedIcon sx={{color: "white"}}/>}
          sx={{
            marginBottom:"20px",
            "&:hover":{
                transform: "scale(1.02)"
            }
          }}
        >
          <Typography fontFamily="Chilanka" fontWeight={400} color="white" mt={1}>{info} </Typography>
        </Button>
      </Stack>
    </Box>
  );
};

export default Activity;
