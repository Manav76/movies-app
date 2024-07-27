import { Container } from '@mui/material';
import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/Navbar/BottomNav';
import {BrowserRouter} from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <div className="app">
    <Container>
    
    </Container>
    </div>
    <SimpleBottomNavigation/>
    </BrowserRouter>
    </>
  );
}

export default App;
