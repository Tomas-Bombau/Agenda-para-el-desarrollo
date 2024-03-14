import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const ContactanosTabs = () => {
  return (
    <Box
        mt={5}
        sx={{ width: "100%", display: "flex", justifyContent: "center", gap: 5, }}>
        <Link to="/voluntariado">
          <Button variant="contained" color="red">
            <Typography fontWeight={600} color={"white"}>
              Sumate al equipo{" "}
            </Typography>
          </Button>
        </Link>
        <Link to="/donaciones">
          <Button variant="contained" color="red">
            <Typography fontWeight={600} color={"white"}>
              Colaborá con el proyecto
            </Typography>
          </Button>
        </Link>
      </Box>
  )
}

export default ContactanosTabs