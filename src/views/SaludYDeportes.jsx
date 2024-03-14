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
    

      const healthGeneral = {
        bannerImage: "https://res.cloudinary.com/dhw5ulqje/image/upload/v1710445319/Agenda/Salud%20y%20Deportes/photo-1631495634750-0f14320bc0a7_ewaevk.avif",
        title :  "Salud y Deportes",
        backgroundTabs: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh5gGMIC9zdOGet5t4fhEmkZ50Tnc6R_aWCA&usqp=CAU",
        cite: "",
        subCite: ""
       }
  
      const saludYDeporte = [
        {
          label: "Operativos de salud",
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
          image: "",
          title: "Titulo",
          description: "Descripcion",
          parragraph1: <> PARRAFO 1 </>,
          citeCard: "CITA",
          citeAuthor: "CITA AUTOR",
          citePhoto:  <LibraryMusicIcon color="green" sx={{ pb: 0.5 }} />,
          parragraph2:  <> PARRAFO 2 </>
        },
        {
          label: "Deportes",
          image:
            "",
          title: "Titulo",
          description: "Descripcion",
          parragraph1: <> PARRAFO 1 </>,
          citeCard: "CITA",
          citeAuthor: "CITA AUTOR",
          citePhoto:  <LibraryMusicIcon color="green" sx={{ pb: 0.5 }} />,
          parragraph2:  <> PARRAFO 2 </>
        }
      ];
    
    
      return (
        <Container maxWidth="2xl" disableGutters>
          <NavBar />
          <Banners bannerImage={healthGeneral.bannerImage}/>
          <ActivityTabs general={healthGeneral} subject={saludYDeporte}/>
          <Footer />
        </Container>
      )
}


export default SaludYDeportes