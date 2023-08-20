//IMPORT LIBRARIES, COMPONENTS, STYLES AND NECESSARY FUNCTIONS
import style from '../Css/Navbar.module.css';
import { Notifications } from '@material-ui/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/auth';

export function Navbar ({ user }) {

    //I KEEP MY NAVBAR ALWAYS VISIBLE ON THE SCREEN WHEN SCROLLING
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset !== 0);
        return () => (window.onscroll = null);
    };

    //GET THE STORED INFORMATION OF THE USER TO SHOW THE EMAIL IN THE NAVBAR
    user = getUser();

    //NAVBAR RENDERING
    return (
        <div className={style.navbar}>
            <div className={style.container}>
                <div className={style.left}>
                    <Link to={'/home'}>
                        <img className={style.ima}
                            src="\logo.png"
                            alt="logo"
                        />
                        <span>Home</span>
                        <span>Series</span>
                        <span>Peliculas</span>
                    </Link>
                </div>
                <div className={style.right}>
                    <span>Bienvenido {user?.email}</span>
                    <Notifications className={style.icon} />
                    <Link to={'/login'}><button className={style.buttonLogout}>Salir</button></Link>
                </div>
            </div>
        </div>
    );
};
