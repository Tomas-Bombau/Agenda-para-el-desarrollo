import { Container } from '@mui/material'
import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import Banners from '../components/Banners'
import Footer from '../components/Footer'
import ActivityTabs from '../components/ActivityTabs'
import PaletteIcon from "@mui/icons-material/Palette";
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import Introduction from '../components/Introduction'

const Cultura = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const introduction = {
    title: "Cultura",
    image: "https://res.cloudinary.com/dhw5ulqje/image/upload/v1710771476/Agenda/Culture/WhatsApp_Image_2022-08-23_at_12.25.07_PM_gu9bhk.jpg",
    parragraph1: "En los barrios populares, la cultura actúa como un faro de resistencia y cohesión social, ofreciendo a los sectores vulnerables un sentido de pertenencia, oportunidades de socialización y herramientas para expandir sus horizontes.",
    parragraph2: "Al proporcionar espacios de entretenimiento y expresión artística, fomentamos la integración comunitaria y ofrecemos nuevas vías para explorar el mundo.",
    parragraph3: "Creemos que el arte es un motor para nuestros niños, niñas y adolescentes para pensar una agenda de desarrollo sostenible."
  }

  const cultureGeneral = {
   bannerImage: "https://res.cloudinary.com/dhw5ulqje/image/upload/v1710377808/Agenda/Culture/wl0x3qzx9unnyn0yoyyn.jpg",
   subTitle : "Actividades",
   backgroundTabs: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh5gGMIC9zdOGet5t4fhEmkZ50Tnc6R_aWCA&usqp=CAU",
   cite: "",
   subCite: ""
  }
  
  // <b style={{ fontWeight: "700", fontStyle: 'italic', color:"#3A7B50", fontSize:"20px" }} </b>>

  const culture = [
    {
      label: "Arte en Las Torres",
      image:
        "https://res.cloudinary.com/dhw5ulqje/image/upload/v1710370195/Agenda/Culture/TallerLasTorres.jpg",
      title: "+ 50 niños y niñas",
      description: "Assiten al taller que se realiza semanalmente en el barrio. Allí pintan, dibujan, trabajan los materiales reciblados y realizan obras de arte que a fin de año se exponen",
      parragraph1: <> En el taller de arte del barrio Las Torres, Esteban Echeverría, se crea un espacio vibrante donde la creatividad florece y los lazos comunitarios se fortalecen gracias al trabajo de la Profe Julia. El arte se convierte en un vehículo para la reflexión y el diálogo sobre temas sociales cruciales: el respeto, la convivencia, la diversidad y el respeto. Los sueños por cumplir y las esperanzas se plasman en dibujos, collages, retratos, etc. </>,
      citeCard: "« Mi sueño era poder brindarle a mi barrio, desde mi humilde hogar, lo que tanto amo. El arte cambia vidas. »", 
      citeAuthor: "Profe Julia",
      citePhoto:  <PaletteIcon color="green" sx={{ pb: 0.5 }} />,
      parragraph2: <> A través de la expresión artística y el reciclado, los niños y niñas del barrio exploran no solo técnicas y estilos, sino también valores fundamentales como el respeto, la colaboración, el respeto por el otro y por el  que nos rodea. </>
    },
    {
      label: "Potenciar Artistas",
      image:
        "https://res.cloudinary.com/dhw5ulqje/image/upload/v1710380924/Agenda/Culture/nd3u6q12apsxavsq6qei.jpg",
      title: "El estudio de Panda",
      description: "Se realizaron +20 visitas al estudio para que niños y niñas conozcan el entorno de producción de sus artístas favoritos. También se realizaron acompañamientos a artistas de barrio con el fin de potenciar su talento.",
      parragraph1: <> A través de Potenciar Artistas, los participantes tienen la oportunidad única de visitar un  de grabación en Villa Ortúzar, donde son recibidos por expertos de la industria musical. Estos mentores no solo comparten valiosos consejos y conocimientos, sino que también ofrecen una plataforma para que los artistas produzcan su propia música. </>,
      citeCard: "Lo que muchos artistas barriales no tienen es la oportunidad real. Acá se lo damos, porque talento les sobra.",
      citeAuthor: "Panda Elliot",
      citePhoto:  <LibraryMusicIcon color="green" sx={{ pb: 0.5 }} />,
      parragraph2:  <> Este programa representa un puente esencial entre el talento crudo y las oportunidades tangibles en la industria musical. Además de recibir orientación práctica, los participantes tienen la oportunidad de expandir sus redes profesionales y establecer conexiones significativas en la industria </>
    },
  ];


  return (
    <Container maxWidth="2xl" disableGutters sx={{backgroundColor: "#fafafa"}}>
      <NavBar />
      <Introduction introduction={introduction} />
      <Banners bannerImage={cultureGeneral.bannerImage}/>
      <ActivityTabs general={cultureGeneral} subject={culture}/>
      <Footer />
    </Container>
  )
}

export default Cultura