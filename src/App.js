import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeScreen from './pages/HomeScreen';
import Footer from './pages/Footer';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomeScreen/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
