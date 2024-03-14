import { Container } from '@mui/material'
import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import Banners from '../components/Banners'
import Footer from '../components/Footer'
import ActivityTabs from '../components/ActivityTabs'
import PaletteIcon from "@mui/icons-material/Palette";
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

const SaludYDeportes = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    
      let image = ""
      let title = "Salud y Deportes"
      let backgroundTabs = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh5gGMIC9zdOGet5t4fhEmkZ50Tnc6R_aWCA&usqp=CAU"
      let cite = ""
      let subCite = ""
      
    
      const culture = [
        {
          label: "Operativos",
          image:
            "https://res.cloudinary.com/dhw5ulqje/image/upload/v1710370195/Agenda/eiptocfhdk1aksbml2pb.jpg",
          title: "+ 50 niños y niñas",
          description: "Assiten al taller que se realiza semanalmente en el barrio. Allí pintan, dibujan, trabajan los materiales reciblados y realizan obras de arte que a fin de año se exponen",
          parragraph1: <> En el taller de arte del barrio Las Torres, Esteban Echeverría, se crea un espacio vibrante donde la creatividad florece y los lazos comunitarios se fortalecen gracias al trabajo de la Profe Julia. El arte se convierte en un vehículo para la reflexión y el diálogo sobre temas sociales cruciales: el respeto, la convivencia, la diversidad y el respeto. Los sueños por cumplir y las esperanzas se plasman en dibujos, collages, retratos, etc. </>,
          citeCard: "« Mi sueño era poder brindarle a mi barrio, desde mi humilde hogar, lo que tanto amo. El arte cambia vidas. »", 
          citeAuthor: "Profe Julia",
          citePhoto:  <PaletteIcon color="green" sx={{ pb: 0.5 }} />,
          parragraph2: <> A través de la expresión artística y el reciclado, los niños y niñas del barrio exploran no solo técnicas y estilos, sino también valores fundamentales como el respeto, la colaboración, el respeto por el otro y por el  que nos rodea. </>
        },
        {
          label: "Prácticas saludables",
          image:
            "https://res.cloudinary.com/dhw5ulqje/image/upload/v1710380924/Agenda/nd3u6q12apsxavsq6qei.jpg",
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
        <Container maxWidth="2xl" disableGutters>
          <NavBar />
          <Banners image={image}/>
          <ActivityTabs title={title}  cite={cite} backgroundTabs={backgroundTabs} subCite={subCite} subject={culture}/>
          <Footer />
        </Container>
      )
}


export default SaludYDeportes