import React from "react";
import styles from "./CardAchievement.module.css";
import { Box } from "@mui/material";

const CardAchievement = ({image, label, title, description}) => {
  return (
    <Box className={styles.card} sx={{backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition:"center"}}>
      <div class={styles.removeWhenUse}>
        <label>{label}</label>
      </div>
      <div class={styles.details}>
        <label>{title}</label>
        <p>
          {description}
        </p>
      </div>
    </Box>
  );
};

export default CardAchievement;
