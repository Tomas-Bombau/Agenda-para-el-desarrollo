import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Notes = () => {
  return (
    <Card>
      <CardMedia
        sx={{ height: 140 }}
        image="https://infofunes.com.ar/uploads/NuevaCarpeta%201/escuelajpg_web.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Las clases no comienzan
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt fugiat autem architecto mollitia necessitatibus laudantium quasi temporibus esse similique, beatae asperiores quidem vero fugit nulla repellat illum veniam. Quasi, voluptate.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Compartir noticia</Button>
      </CardActions>
    </Card>
  );
};

export default Notes;
