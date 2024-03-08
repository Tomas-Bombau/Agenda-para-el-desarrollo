import { useEffect, useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { ButtonGroup, Button, Container, Typography, useMediaQuery, useTheme } from '@mui/material';


export default function Preview() {

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
  const smScreen = useMediaQuery(theme.breakpoints.down('lg'));

  const gradientStyle = {
    fontSize: '25px',
    background: 'linear-gradient(90deg, rgba(254,231,138,1) 0%, rgba(255,121,97,1) 53%, rgba(58,123,80,1) 99%)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
  };

  return (
    <Container maxWidth="2xl" sx={{backgroundImage: "url(https://imageio.forbes.com/specials-images/imageserve/5ffa4ea25f3704b760abea7b/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds)", height:"500px", backgroundSize: "cover",
    }}>
      <nav className="z-10 bg-transparent py-5 flex flex-col size-full 2xl:px-12 h-20 lg:flex-row lg:items-center lg:justify-between ">
        <div className='flex justify-between gap-5 items-center'>
          <div className="flex items-center justify-start gap-2 min-[375px]:gap-4 lg:gap-0 lg:hidden">
            <Button color="red" onClick={() => setHamburger(!hamburger)} variant="text" size="large" iconOnly aria-label="Menu">
              <CiMenuBurger className="stroke-inherit text-white h-10 w-10" />
            </Button>
          </div>
          <div className='flex justify-end flex-row-reverse items-center gap-5 lg:flex-row'>
            <div className>
              <img className="h-10 w-10 hidden sm:flex" src="https://images.vexels.com/media/users/3/142789/isolated/preview/2bfb04ad814c4995f0c537c68db5cd0b-multicolor-swirls-circle-logo.png" />
            </div>
            <Typography variant='headerLogo' fontWeight={600} style={gradientStyle}>Agenda para el Desarrollo</Typography>
          </div>
        </div>
        <div className={hamburger && smScreen ? "z-10 flex-col items-start justify-start" : "hidden lg:flex lg:flex-row"}>
          <ButtonGroup  aria-label='alignment button group' className={hamburger && smScreen ? "absolute top-[65px] left-2 z-2 rounded z-2 mt-2 flex flex-col items-start gap-1" : "flex flex-row mt-0 bg-hidden gap-2"}>
            <Button href="#nosotros" variant='contained' color='red' className={smScreen ? "w-44" : null} sx={{ color: 'white', border: "none", "&:hover":{textDecoration: "underline wavy",textDecorationThickness: "2px", textUnderlineOffset: "4px", transform:"scale(1.02)", border: "none"}}}>
              <Typography fontWeight={400}>Nosotros</Typography>
            </Button>
           <Button href="#nosotros" variant='contained' color='red' className={smScreen ? "w-44" : null} sx={{ color: 'white', border: "none", "&:hover":{textDecoration: "underline wavy",textDecorationThickness: "2px", textUnderlineOffset: "4px", transform:"scale(1.02)", border: "none"}}}>
           <Typography fontWeight={400}>Qué hacemos?</Typography>
            </Button>
            <Button href="#nosotros" variant='contained' color='red'className={smScreen ? "w-44" : null} sx={{ color: 'white', border: "none", "&:hover":{textDecoration: "underline wavy",textDecorationThickness: "2px", textUnderlineOffset: "4px", transform:"scale(1.02)", border: "none"}}}>
            <Typography fontWeight={400}>Voluntariado</Typography>
            </Button>
           <Button href="#nosotros" variant='contained' color='red' className={smScreen ? "w-44" : null} sx={{ color: 'white', border: "none", "&:hover":{textDecoration: "underline wavy",textDecorationThickness: "2px", textUnderlineOffset: "4px", transform:"scale(1.02)", border: "none"}}}>
           <Typography fontWeight={400}>Donar</Typography>
            </Button>
          </ButtonGroup>
        </div>
      </nav>
    </Container>
  );
};