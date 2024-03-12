import { Box, Container, Stack } from '@mui/material'
import React from 'react'

const Banners = ({image}) => {
  return (
    <Container maxWidth="2xl" disableGutters sx={{height:"500px", backgroundImage: `url(${image})`, backgroundSize:"cover", backgroundPosition:"center"}}>
    </Container>
  )
}

export default Banners