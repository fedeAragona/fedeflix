//IMPORT LIBRARIES, COMPONENTS, STYLE AND NEEDED FUNCTIONS
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

    //VERIFY IF THE USER IS AUTHENTICATED AND IF HE IS NOT, HE IS REDIRECTED TO LOGIN AND I UPDATE THE USER INFO
    useEffect(() => {
        const userResponse = getUser();
        if (!userResponse) navigate('/login');
        setUser(userResponse);
    },[navigate]);

    //IF THE CONDITION PASSES, THE COMPONENTS ARE ASSEMBLED
    return (
        <div>
            <img className={style.fondo} src="/fondoHome.png" alt="fondo" />
            <Navbar user={user} />
            <Search/>
            <MoviesGrid/>
        </div>
    );
}