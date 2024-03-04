import { useEffect, useState } from 'react';
// import { Button } from './button';
import { CiMenuBurger } from "react-icons/ci";
import { ButtonGroup, Button } from '@mui/material';


export default function Preview() {

  useEffect(() => {
    const handleResize = () => {
      // Check if the screen size is larger than small (sm)
      if (window.innerWidth >= 640) { // Assuming Tailwind's sm breakpoint is 640px
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

  return (
      <nav className="z-10 bg-white py-5 flex flex-col size-full sm:flex-row sm:items-center sm:justify-between 2xl:px-12">
        <div className='flex justify-between gap-5 items-center '>
          <div className="flex items-center justify-start gap-2 min-[375px]:gap-4 lg:gap-0 sm:hidden">
            <Button color='secondary' onClick={() => setHamburger(!hamburger)} variant="text" size="large" iconOnly aria-label="Menu">
              <CiMenuBurger  className="stroke-inherit h-8 w-8" />
            </Button>
          </div>
          <div className='flex flex-row-reverse items-center gap-5 sm:flex-row'>
            <div class>
              <img className="h-10 w-10" src="https://images.vexels.com/media/users/3/142789/isolated/preview/2bfb04ad814c4995f0c537c68db5cd0b-multicolor-swirls-circle-logo.png" />
            </div>
            <h1 className="text-xl sm:hidden md:flex">Agenda para el Desarrollo</h1>
          </div>
        </div>
        <div>
        </div>
        <div className={hamburger ? "z-10 flex-col" : "hidden sm:flex sm:flex-row"}>
          <ButtonGroup variant='text' color="secondary" aria-label='alignment button group' className={hamburger ? "absolute z-2 w-fit rounded z-2 mt-2 flex items-start" : "flex flex-row mt-0 bg-hidden gap-2"}>
            <Button href="#nosotros">
              Nosotros
            </Button>
            <Button href="/about">
              Qué hacemos?
            </Button>
            <Button href="/pricing">
              Ser voluntario
            </Button>
            <Button href="/contact">
              Donar
            </Button>
          </ButtonGroup>
        </div>
      </nav>
  );
};