import { Box } from "@mui/material";
import React from "react";

const Achievements = () => {
  return (
    <Box sx={{position:"relative", overflow:"hidden", height:"250px", width:"70%", borderRadius: "10%", cursor:"pointer", fontSize: "20px", fontWeight:"bold", boxShadow: "2px 2px 2px black"}}>
      <Box class="z-10 absolute w-full h-full peer"></Box>
      <Box class="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-[#9b8f00] transition-all duration-500"></Box>
      <Box class="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-[#9b8f00] transition-all duration-500">
        Nice to meet u,
        <br />
        Uiverse
      </Box>
      <Box class="w-full h-full items-center justify-center flex uppercase">
        hover me
      </Box>
    </Box>
  );
};

export default Achievements;
