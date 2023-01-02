
import { StyledHeader , Nav, Logo, LogoName, Image } from './styles/Header.Styled'
import { Container } from './styles/Container.Styled'
import { Flex } from './styles/Flex.Styled'
import { Button } from './styles/Button.Styled'
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { VideoStyled } from './styles/Video.Styled';
import logoPic from '../assets/peter-logo-no-bg.png';
import businessman from '../assets/businessman.jpg';


export default function Header() {
  return (
    <BrowserRouter>
    <StyledHeader >
        <Container>
            <Nav> 
                <Logo src={logoPic} alt='peter logo' /> 
                <LogoName>Peter Rosen</LogoName>
                <Button>
                    <Link to="#contact" smooth>Contact</Link>
                </Button>
                {/* <VideoStyled>    <video src={videobg} autoPlay loop muted/></VideoStyled> */}
            </Nav>
               
            <Flex>
                
                
                <div>
                   
                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>

                    <p>
                    Nullam nec dolor tristique, placerat nibh sit amet, pretium sapien. 
                    Cras nec dapibus turpis. Suspendisse tellus turpis, ornare ac accumsan
                    non, rhoncus et felis. Proin faucibus lacus est, sed varius dui tempus id.
                    Donec vel ligula pulvinar, sagittis tellus non, pulvinar odio. Phasellus 
                    varius ultricies diam nec vulputate. Proin tincidunt sodales lorem. Etiam 
                    efficitur nulla suscipit metus accumsan, eget ultrices erat facilisis.
                    </p>

                    <Button bg="#003333" color="#fff">
                        <Link to="#card-one" smooth>What I Do</Link>   
                    </Button>    
                    
                </div>
            <Image src={businessman} alt='businessman' />
                
            </Flex>  
        </Container>
    </StyledHeader>
   </BrowserRouter>
  )
}
