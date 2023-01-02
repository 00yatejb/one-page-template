import SocialIcons from "./SocialIcons"
import { Container } from "./styles/Container.Styled"
import { Flex } from "./styles/Flex.Styled"
import { StyledFooter } from "./styles/Footer.Styled"

export default function Footer() {
    return (
       

       <StyledFooter> 
            <Container>
                <Flex>
                    {/* <img src="./monkey.svg" alt='logo' id="contact"/>  */}
                    <ul id="contact">
                        <li>
                       If you want to find out more INSERT MORE TEXT...
                        </li>
                        <li>Tel 0-123-456-789</li>
                        <li>anyone@email.com</li>
                    </ul>
                    
                    <ul>
                        <li>About Me</li>
                        <li>What I Do</li>
                    </ul>
                    
                    <ul>
                        <li>Reviews</li>
                        <li>Contact</li>
                    </ul>

                    <SocialIcons />
                </Flex>
                <p>&copy; 2022 All rights reserved</p>
            </Container>
        </StyledFooter>
    
    )
}