import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Container id="nosotros" component="section" className="my-10" maxWidth="lg">
        <Typography variant="h3" gutterBottom>Cambia todo cambia...</Typography>
          <Stack spacing={4} direction="column">
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
              dolores quisquam molestiae quasi, iusto voluptate optio dolore tempore
              mollitia maiores amet fugit, minima, voluptas rem sapiente! Odio nobis
              rerum magni?Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Non possimus, nemo fuga nobis minus veniam odio neque exercitationem
              autem provident excepturi repellat tenetur. Tenetur nihil voluptates
              illum corporis ducimus dolorem!
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
              dolores quisquam molestiae quasi, iusto voluptate optio dolore tempore
              mollitia maiores amet fugit, minima, voluptas rem sapiente! Odio nobis
              rerum magni?Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Non possimus, nemo fuga nobis minus veniam odio neque exercitationem
              autem provident excepturi repellat tenetur. Tenetur nihil voluptates
              illum corporis ducimus dolorem!
            </Typography>
          </Stack>
    </Container>
  );
};

export default About;
