import { MoviesGrid } from '../components/MoviesGrid';
import { Search } from '../components/Search';
import { Navbar } from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUser } from '../services/auth';
import style from '../Css/landingPage.module.css';

export function LandingPage(){
    const navigate = useNavigate();
    const [user, setUser] = useState();

    useEffect(() => {
        const userResponse = getUser();
        if (!userResponse) navigate('/login');
        setUser(userResponse);
    },[navigate]);

    return (
        <div>
            <img className={style.fondo} src="/fondoHome.png" alt="fondo" />
            <Navbar user={user} />
            <Search/>
            <MoviesGrid/>
        </div>
    );
}