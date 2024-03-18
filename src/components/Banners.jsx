import { Box, Container, Stack } from '@mui/material'
import React from 'react'

const Banners = ({bannerImage}) => {
  return (
    <Container maxWidth="2xl" disableGutters sx={{height:"300px", backgroundImage: `url(${bannerImage})`, backgroundSize:"cover", backgroundPosition:"center"}}>
    </Container>
  )
}

export default Banners