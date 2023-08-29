import React, { useEffect, useState } from 'react';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/UI/navbar/Navbar';
import Footer from './components/UI/footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { AuthContext } from './components/context';
import jwt_decode from 'jwt-decode';

function App() {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            const decodedToken = jwt_decode(token);
            const currentTime = Date.now() / 1000;

            if (decodedToken.exp < currentTime) {
                localStorage.removeItem('token');
                setIsAuth(false);
            } else {
                setIsAuth(true);
            }
        } else {
            setIsAuth(false);
        }
    }, [])


    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <BrowserRouter>
                <Navbar />
                <AppRouter />
                <Footer />
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App;