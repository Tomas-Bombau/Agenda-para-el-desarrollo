import { Container } from '@mui/material'
import React from 'react'
import NavBar from '../components/NavBar'
import Banners from '../components/Banners'
import Footer from '../components/Footer'
import CultureTabs from '../components/Culture/CultureTabs'

const Cultura = () => {

  let image = "https://res.cloudinary.com/dhw5ulqje/image/upload/v1710377808/Agenda/wl0x3qzx9unnyn0yoyyn.jpg"
  
  const culture = [
    {
      label: "Arte en Las Torres",
      image:
        "https://res.cloudinary.com/dhw5ulqje/image/upload/v1710370195/Agenda/eiptocfhdk1aksbml2pb.jpg",
      title: "+ 50",
      description: "Niños y niñas se acercan todas las semanas a confeccionar arte con materiales reciclados"
    },
    {
      label: "Potenciar Artistas",
      image:
        "https://res.cloudinary.com/dhw5ulqje/image/upload/v1710380924/Agenda/nd3u6q12apsxavsq6qei.jpg",
      title: "asd",
      description: "HOLA"
    },
  ];


  return (
    <Container maxWidth="2xl" disableGutters>
      <NavBar />
      <Banners image={image}/>
      <CultureTabs subject={culture}/>
      <Footer />
    </Container>
  )
}

export default Cultura