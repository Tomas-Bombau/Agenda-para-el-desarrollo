import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Notes = ({title, description}) => {
  return (
    <Card>
      <CardMedia
        sx={{ height: 250}}
        image="https://infofunes.com.ar/uploads/NuevaCarpeta%201/escuelajpg_web.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Compartir noticia</Button>
      </CardActions>
    </Card>
  );
};

export default Notes;
