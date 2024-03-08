import { useEffect, useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { ButtonGroup, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

  
const NavBar = () => {

    useEffect(() => {
        const handleResize = () => {
          // Check if the screen size is larger than small (sm)
          if (window.innerWidth >= 1020) { // Assuming Tailwind's sm breakpoint is 640px
            setHamburger(false);
          }
        };
        // Add event listener for window resize
        window.addEventListener('resize', handleResize);
        // Call handleResize once initially to set the state based on current screen size
        handleResize();
        // Cleanup function to remove event listener
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []); 
    
      const [hamburger, setHamburger] = useState(false)
      const theme = useTheme();
      const smScreenLg = useMediaQuery(theme.breakpoints.down('lg'));
      const smScreenSm = useMediaQuery(theme.breakpoints.down('sm'));
    
      const gradientStyle = {
        background: 'linear-gradient(90deg, rgba(254,231,138,1) 0%, rgba(255,121,97,1) 53%, rgba(58,123,80,1) 99%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      };
    
      const ButtonStyled = (props) => (
        <Button
          {...props}
          sx={{
            color: 'white',
            paddingX: "8px",
            paddingY: "8x",
            '&:hover': {
              textDecoration: 'underline',
              textDecorationThickness: '2px',
              textUnderlineOffset: '4px',
              transform: 'scale(1.02)',
              border: '1px solid white'
            }
          }}
        />
      );


  return (
    <nav className="z-10 bg-transparent py-5 flex flex-col size-full 2xl:px-12 h-20 lg:flex-row lg:items-center lg:justify-between ">
    <div className='flex justify-between gap-5 items-center'>
      <div className="flex items-center justify-start gap-2 min-[375px]:gap-4 lg:gap-0 lg:hidden">
        <Button color="red" onClick={() => setHamburger(!hamburger)} variant="text" size="large" aria-label="Menu">
          <CiMenuBurger className="stroke-inherit text-white h-10 w-10" />
        </Button>
      </div>
      <div className='flex justify-end flex-row-reverse items-center gap-5 lg:flex-row'>
        <div className>
          <Link to="/"><img className="h-10 w-10 hidden sm:flex" src="https://images.vexels.com/media/users/3/142789/isolated/preview/2bfb04ad814c4995f0c537c68db5cd0b-multicolor-swirls-circle-logo.png" /></Link>
        </div>
        <Typography variant='headerLogo' fontWeight={600} style={gradientStyle} sx={{fontSize: smScreenSm ? '21px' : '25px'}}>Agenda para el Desarrollo</Typography>
      </div>
    </div>
    <div className={hamburger && smScreenLg ? "z-10 flex-col items-start justify-start" : "hidden lg:flex lg:flex-row"}>
      <ButtonGroup  aria-label='alignment button group' className={hamburger && smScreenLg ? "absolute top-[65px] left-2 z-2 rounded z-2 mt-2 flex flex-col items-start gap-1": "flex flex-row mt-0 bg-hidden gap-4"}>
          <ButtonStyled href="#nosotros" variant='contained' color='green' className={smScreenLg ? "w-44" : "w-fit"}>
            <Typography fontWeight={400}>Nosotros</Typography>
          </ButtonStyled>
          <ButtonStyled href="#actividades" variant='contained' color='green' className={smScreenLg ? "w-44" : "w-fit"}>
            <Typography fontWeight={400}>¿Qué hacemos?</Typography>
          </ButtonStyled>
          {/* <ButtonStyled  variant='contained' color='green' className={smScreenLg ? "w-44" : "w-fit"}>
            <Link to="/noticias"><Typography fontWeight={400}>Noticias</Typography></Link>
          </ButtonStyled> */}
          <ButtonStyled  variant='contained' color='green' className={smScreenLg ? "w-44" : "w-fit"}>
            <Link to="/voluntariado"><Typography fontWeight={400}>Voluntariado</Typography></Link>
          </ButtonStyled>
          <ButtonStyled variant='contained' color='green' className={smScreenLg ? "w-44" : "w-fit"}>
             <Link to="/donaciones"><Typography fontWeight={400}>Donar</Typography></Link>
          </ButtonStyled>
      </ButtonGroup>
    </div>
  </nav>
  )
}

export default NavBar