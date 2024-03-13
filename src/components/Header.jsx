
import { Container} from '@mui/material';
import NavBar from './NavBar';


export default function Preview() {
  return (
    <Container disableGutters maxWidth="2xl" sx={{backgroundImage: "url(https://imageio.forbes.com/specials-images/imageserve/5ffa4ea25f3704b760abea7b/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds)", height:"500px", backgroundSize: "cover",
    }}>
      <NavBar />
    </Container>
  );
};