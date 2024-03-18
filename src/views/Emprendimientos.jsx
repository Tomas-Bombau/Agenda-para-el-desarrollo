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
    parragraph1: <> Los emprendimientos en barrios populares juegan un  <b style={{ fontWeight: "700", fontStyle: 'italic', color:"#3A7B50", fontSize:"20px" }}> crucial en el desarrollo económico y social de las comunidades </b>. En muchas ocasiones, estos emprendimientos surgen como respuesta a la falta de oportunidades de empleo formal, permitiendo a los residentes generar ingresos y mejorar su calidad de vida.</>,
    parragraph2: <> </>,
    parragraph3: <> Potenciar estos emprendimientos es fundamental para aprovechar su potencial transformador. El empoderamiento de los emprendimientos barriales no solo beneficia a los individuos involucrados, sino que también contribuye al  <b style={{ fontWeight: "700", fontStyle: 'italic', color:"#3A7B50", fontSize:"20px" }}> crecimiento sostenible y la revitalización de los barrios populares en su conjunto. </b>"</>
    
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
      title: "Acompañamiento",
      description: "Acompañamos a distintos emprendedores ya sea en la formación de ideas o en herramientas de negocio aplicables a sus emprendimientos",
      parragraph1: <>  En los barrios, existe un rico y diverso conocimiento acumulado a lo largo del tiempo, generado por la experiencia cotidiana de los pueblos. Creemos que este muy diverso saber debe ser acompañado para potenciar el negocio detrás de él. </>,
      citeCard: "« Nos sentimos por primera vez acompañados y escuchados. Aprendemos un montón de gestión. »",
      citeAuthor: "Yesenia, emprendedora textil",
      citePhoto:  <GroupIcon color="green" sx={{ pb: 0.5 }} />,
      parragraph2: <> La educación es uno de nuestros valores fundacionales y por eso creemos en que la capacitación y el acompañamiento de los emprendimientos barriales es una herramienta vital para el crecimiento de los mismos. Desmentimos mitos, acercamos información y afianzamos conocimientos financieros.</>
    },
    {
    label: "Microcrédito Rotativo",
    image:
      "https://infopaer.com.ar/wp-content/uploads/2024/03/micro_c-650x405.jpeg",
    title: "95% retorno",
    description: "Gracias compromiso de todos los miembros, alcanzamos el primer año un retorno del 95% del fondo + intereses",
    parragraph1: <> Desde Agenda para el Desarrollo creemos en el potencial de los emprendedores. Por eso es que desarrollamos un microcrédito rotativo para fortalecer los emprendimientos. Dicho crédito consiste en un préstamo que debe ser devuelto con una pequeña tasa de interés para que nose desfinancie y en un futuro pueda rotar al próximo emprendimiento.  </>,
    citeCard: "« Confiamos y nos apoyamos entre todos. Más allá del microcrédito queremos crecer todos juntos. »",
    citeAuthor: "Natalia",
    citePhoto:  <GroupIcon color="green" sx={{ pb: 0.5 }} />,
    parragraph2: <>  Como parte de este sistema, son los mismos miembros que conforman el microcrédito los encargados de controlar la devolución del crédito, lo que los motiva a garantizar la sostenibilidad del fondo y a cumplir con los compromisos financieros por respeto a los demás.   </>
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