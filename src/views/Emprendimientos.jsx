import { Container } from '@mui/material'
import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import Banners from '../components/Banners'
import Footer from '../components/Footer'
import ActivityTabs from '../components/ActivityTabs'
import Introduction from '../components/Introduction'
import GroupIcon from '@mui/icons-material/Group';


const Emprendimientos = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const introduction = {
    title: "Emprendedurismo",
    image: "https://res.cloudinary.com/dhw5ulqje/image/upload/v1710168087/Agenda/Landing/hrg08zgvusywzpns8naw.jpg",
    parragraph1: "Los emprendimientos en barrios populares juegan un papel crucial en el desarrollo económico y social de estas comunidades. En muchas ocasiones, estos emprendimientos surgen como respuesta a la falta de oportunidades de empleo formal, permitiendo a los residentes generar ingresos y mejorar su calidad de vida.",
    parragraph2: "Potenciar estos emprendimientos es fundamental para aprovechar su potencial transformador. El empoderamiento de los emprendimientos barriales no solo beneficia a los individuos involucrados, sino que también contribuye al crecimiento sostenible y la revitalización de los barrios populares en su conjunto.",
    
  }

  const entrepreneurship = {
    bannerImage: "https://res.cloudinary.com/dhw5ulqje/image/upload/v1710785463/Agenda/Emprendedurismo/photo-1582213782179-e0d53f98f2ca_tsengo.avif",
    subTitle :  "Actividades",
    backgroundTabs: "",
    cite: "",
    subCite: ""
   }

  const emprendedurismo = [
    {
      label: "Capacitaciones",
      image:
        "https://res.cloudinary.com/dhw5ulqje/image/upload/v1710784906/Agenda/Emprendedurismo/WhatsApp_Image_2023-07-27_at_21.23.16_7746d279_cwhf8p.jpg",
      title: "+5 operativos",
      description: "Gracias al apoyo de médicos voluntarios se pudieron realizar operativos de control de peso y talla además de la resolución de consultas médicas.",
      parragraph1: <> Desde Agenda para el Desarrollo, llevamos a cabo operativos en barrios populares con el objetivo de velar por la salud y el bienestar de los niños. Allí se realizan evaluaciones médicas fundamentales como tomar la talla y el peso de los pequeños, así como a evaluar su estado nutricional. Esta labor nos permite detectar posibles problemas de salud y malnutrición, brindando la oportunidad de intervenir de manera temprana. </>,
      citeCard: "Es sólo cuestión de invertir un poco de tiempo. Así vamos a cambiar y mejorar la realidad de nuestros barrios",
      citeAuthor: "Ramiro, médico voluntario",
      citePhoto:  <GroupIcon color="green" sx={{ pb: 0.5 }} />,
      parragraph2: <> Además, establecemos un diálogo cercano con las familias, fomentando la conciencia sobre la importancia de la salud infantil y ofreciendo información para hacer respetar los Derechos y acceder a servicios médicos esenciales.  </>
    },
    {
    label: "Microcrédito Rotativo",
    image:
      "https://res.cloudinary.com/dhw5ulqje/image/upload/v1710783732/Agenda/Salud%20y%20Deportes/mujerahoratetocaavos-libertad2_vlpany.jpg",
    title: "+5 operativos",
    description: "Gracias al apoyo de médicos voluntarios se pudieron realizar operativos de control de peso y talla además de la resolución de consultas médicas.",
    parragraph1: <> Desde Agenda para el Desarrollo, llevamos a cabo operativos en barrios populares con el objetivo de velar por la salud y el bienestar de los niños. Allí se realizan evaluaciones médicas fundamentales como tomar la talla y el peso de los pequeños, así como a evaluar su estado nutricional. Esta labor nos permite detectar posibles problemas de salud y malnutrición, brindando la oportunidad de intervenir de manera temprana. </>,
    citeCard: "Es sólo cuestión de invertir un poco de tiempo. Así vamos a cambiar y mejorar la realidad de nuestros barrios",
    citeAuthor: "Ramiro, médico voluntario",
    citePhoto:  <GroupIcon color="green" sx={{ pb: 0.5 }} />,
    parragraph2: <> Además, establecemos un diálogo cercano con las familias, fomentando la conciencia sobre la importancia de la salud infantil y ofreciendo información para hacer respetar los Derechos y acceder a servicios médicos esenciales.  </>
  }
  ];



  return (
    <Container maxWidth="2xl" disableGutters sx={{backgroundColor: "#fafafa"}}>
        <NavBar />
        <Introduction introduction={introduction}/>
        <Banners bannerImage={entrepreneurship.bannerImage}/>
        <ActivityTabs general={entrepreneurship} subject={emprendedurismo}/>
        <Footer />
    </Container>
  )
}

export default Emprendimientos