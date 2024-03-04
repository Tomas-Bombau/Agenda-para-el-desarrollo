import { Chip, Container, Divider } from "@mui/material";
import React from "react";
import PeopleIcon from '@mui/icons-material/People';


const DividerLine = () => {
  return (
    <Container maxWidth="xl">
      <Divider component="div" role="presentation">
        <Chip
          icon={<PeopleIcon />}
          label="Nosotros"
          variant="contained"
          size='medium'
          color="secondary"
        />
      </Divider>
    </Container>
  );
};

export default DividerLine;
