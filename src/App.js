import GlobalStyles from './components/styles/Global';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import { Container } from './components/styles/Container.Styled'
import ScrollToTop from "react-scroll-to-top";
import Content from './Content'
import SliderMenu from './components/SliderMenu'
import SlideContent from './components/SlideContent'
import Intro from './components/Intro'


//Need to put const theme up here and then include theme = {theme} after return//

const theme = {

  colors: {
    header: '#ebfbff',
    color:'#0C243C',
    body: '#fff',
    footer: '#003333',
  },

  mobile: '768px',
}




function App() {
  return (
       //Wrap ThemeProvider around everything//
    
    <ThemeProvider theme = {theme}> 
       <GlobalStyles />
       <ScrollToTop  smooth />
        <Header />
       <Intro />
        <Container>
        {Content.map((item, index) => (
            <Card key={index} item={item}  />
          ))}
        </Container> 
        <SliderMenu />
        <Footer />
    </ThemeProvider>


  

  )
}

export default App;
