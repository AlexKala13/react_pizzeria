import React from 'react';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/UI/navbar/Navbar';
import Footer from './components/UI/footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
                <Footer/>
            </BrowserRouter>  
        </div>
    )
}

export default App;