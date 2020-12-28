import Footer from './components/shared/footer/Footer';
import Navbar from './components/shared/navbar/Navbar';
import Calculator from './pages/Calculator';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Navbar />
                <Calculator />
                <Footer />
            </ThemeProvider>
        </>
    );
}

export default App;
