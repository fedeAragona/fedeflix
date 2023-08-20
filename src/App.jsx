//IMPORT LIBRARIES, COMPONENTS, NEEDED FUNCTIONS
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MovieDetails } from './pages/MovieDetails';
import { Intro } from './pages/Intro';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { LandingPage } from './pages/LandingPage';
import { Navbar } from './components/Navbar';
import { getUser } from './services/auth';


export function App() {
    const [user, setUser] = useState();
    
    //I VERIFY IF I HAVE A USER UPLOADED IN LOCALSTORAGE
    useEffect(() => {  
        const userResponse = getUser();
        setUser(userResponse);
    }, []);
    
    //ASSIGN THE ROUTES OF MY PROJECT WITH ITS COMPONENTS TO RENDER
    return ( 
        <Router>
            <main> 
                <Routes> 
                    <Route path="/" element={<Intro />} />
                    <Route path="/home" element={<LandingPage />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route exact path='/movies/:movieId' element={<div><Navbar user={user}/><MovieDetails/></div>} />
                </Routes>
            </main>
        </Router>
    );
}
