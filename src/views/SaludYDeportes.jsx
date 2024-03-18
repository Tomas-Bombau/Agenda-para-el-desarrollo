import { Container } from '@mui/material'
import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import Banners from '../components/Banners'
import Footer from '../components/Footer'
import ActivityTabs from '../components/ActivityTabs'
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import Introduction from '../components/Introduction'

const SaludYDeportes = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
      const introduction = {
        title: "Salud y deportes",
        image: "https://res.cloudinary.com/dhw5ulqje/image/upload/v1710777783/Agenda/Salud%20y%20Deportes/photo-1544222059-c9822bfacbd1_h6jgy2.avif",
        parragraph1: "En el ámbito de la salud, es fundamental reconocer la importancia del cuidado personal y alimenticio en los barrios populares para garantizar igualdad de oportunidades de desarrollo. El acceso a servicios de salud adecuados y la promoción de hábitos saludables son pilares para mejorar la calidad de vida y reducir las disparidades socioeconómicas en el bienestar.",
        
        parragraph3: "Con el deporte no sólo buscamos los beneficios físicos que conlleva la ejercitación, sino también potenciar su papel crucial en la socialización. Al proporcionar oportunidades de participación y trabajo en equipo, el deporte promueve la inclusión social, el respeto mutuo y la colaboración, mitigando los riesgos de exclusión y marginalización."
      }

      const healthGeneral = {
        bannerImage: "https://res.cloudinary.com/dhw5ulqje/image/upload/v1710445319/Agenda/Salud%20y%20Deportes/photo-1631495634750-0f14320bc0a7_ewaevk.avif",
        subTitle :  "Actividades",
        backgroundTabs: "",
        cite: "",
        subCite: ""
       }
  
      const saludYDeporte = [
        {
          label: "Operativos de salud",
          image:
            "https://res.cloudinary.com/dhw5ulqje/image/upload/v1710783732/Agenda/Salud%20y%20Deportes/mujerahoratetocaavos-libertad2_vlpany.jpg",
          title: "+ 10 operativos",
          description: "Gracias al apoyo de médicos voluntarios se pudieron realizar operativos de control de peso y talla además de la resolución de consultas médicas.",
          parragraph1: <> Desde Agenda para el Desarrollo, llevamos a cabo operativos en barrios populares con el objetivo de velar por la salud y el bienestar de los niños. Allí se realizan evaluaciones médicas fundamentales como tomar la talla y el peso de los pequeños, así como a evaluar su estado nutricional. Esta labor nos permite detectar posibles problemas de salud y malnutrición, brindando la oportunidad de intervenir de manera temprana. </>,
          citeCard: "Es sólo cuestión de invertir un poco de tiempo. Así vamos a cambiar y mejorar la realidad de nuestros barrios",
          citeAuthor: "Ramiro, médico voluntario",
          citePhoto:  <MedicalInformationIcon color="green" sx={{ pb: 0.5 }} />,
          parragraph2: <> Además, establecemos un diálogo cercano con las familias, fomentando la conciencia sobre la importancia de la salud infantil y ofreciendo información para hacer respetar los Derechos y acceder a servicios médicos esenciales.  </>
        },
        {
          label: "Prácticas saludables",
          image: "https://res.cloudinary.com/dhw5ulqje/image/upload/v1710783809/Agenda/Salud%20y%20Deportes/higienebucal_avdjpm.png",
          title: "",
          description: "Descripcion",
          parragraph1: <> Promovemos prácticas saludables, abordando diversos aspectos fundamentales para el bienestar de la comunidad. A través de talleres y campañas educativas, enfatizamos la importancia de una alimentación equilibrada y nutritiva, brindando información sobre la preparación de comidas saludables y accesibles. Impulsamos la higiene bucal, concientizando sobre la importancia del cepillado dental regular y la visita al dentista para evitar riesgos mayores a futuro. </>,
          parragraph2:  <> También trabajamos arduamente en la prevención de enfermedades, ofreciendo información sobre medidas de higiene personal, prevención de enfermedades transmitidas por vectores y promoción de prácticas sexuales seguras. </>
        },
        {
          label: "Deportes",
          image:
            "https://res.cloudinary.com/dhw5ulqje/image/upload/v1710445298/Agenda/Salud%20y%20Deportes/photo-1544698310-74ea9d1c8258_nnigyo.avif",
          title: "La Salita",
          description: "Proyecto futbolístico del que participan +80 chicos del barrio Santa Catalina, Lomas de Zamora",
          parragraph1: <> Para nosotros el deporte desempeña un papel crucial en la promoción de la salud física y mental de las personas. Al participar en actividades deportivas se mejora la salud de manera integral. No obstante, nuestro foco también está puesto en su rol socializador. </>,
          citeCard: "Acá no había nada así que con mi marido decidimos armar una escuelita de fútbol para que los chicos no estuvieran más en la calle. En 3 meses eran más de 100.",
          citeAuthor: "Caty, fundadora de La Salita",
          citePhoto:  <SportsSoccerIcon color="green" sx={{ pb: 0.5 }} />,
          parragraph2:  <> Al participar en actividades deportivas, las personas tienen la oportunidad de interactuar con otros, construir relaciones y fomentar un sentido de comunidad. El trabajo en equipo, el respeto por los demás, la perseverancia y la disciplina son solo algunos de los valores que se promueven a través del deporte. Estas cualidades no solo son fundamentales para el éxito en el ámbito deportivo, sino que también son habilidades esenciales para la vida cotidiana y el desarrollo de una sociedad cohesionada y armoniosa. </>
        }
      ];
    
    
      return (
        <Container maxWidth="2xl" disableGutters sx={{backgroundColor: "#fafafa"}}>
          <NavBar />
          <Introduction introduction={introduction}/>
          <Banners bannerImage={healthGeneral.bannerImage}/>
          <ActivityTabs general={healthGeneral} subject={saludYDeporte}/>
          <Footer />
        </Container>
      )
}


export default SaludYDeportes