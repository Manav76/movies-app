import { Container } from '@mui/material';
import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/Navbar/BottomNav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Trending from './components/pages/Trending/Trending';
import Movies from './components/pages/Movies/Movies';
import Search from './components/pages/Search/Search';
function App() {
  return (
    <>
    <Router>
    <Header/>
    <div className="app">
    <Container>
    <Routes>
      <Route path = '/' element ={<Trending/>} />
      <Route path = '/movies' element = {<Movies/>} />
      <Route path = '/search' element = {<Search/>} />
    </Routes>
    </Container>
    </div>
    <SimpleBottomNavigation/>
    </Router>
    </>
  );
}

export default App;
