import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Calculator from './components/calculator/Calculator';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Navbar />
                <main>
                    <Calculator />
                </main>
                <Footer />
            </ThemeProvider>
        </>
    );
}

export default App;
