import { Chip, Container, Divider } from "@mui/material";
import React from "react";
import PeopleIcon from '@mui/icons-material/People';


const DividerLine = ({label}) => {
  return (
    <Container maxWidth="lg" sx={{marginTop:"40px", marginBottom:"40px"}}>
      <Divider component="div" role="presentation">
        <Chip
          icon={<PeopleIcon />}
          label={label}
          variant="contained"
          size='medium'
          color="secondary"
        />
      </Divider>
    </Container>
  );
};

export default DividerLine;
