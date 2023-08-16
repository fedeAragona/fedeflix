import { MoviesGrid } from '../components/MoviesGrid';
import { Search } from '../components/Search';
import { Navbar } from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUser } from '../services/auth';

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
            <Navbar user={user} />
            <Search/>
            <MoviesGrid/>
        </div>
    );
}