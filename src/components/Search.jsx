//IMPORT LIBRARIES, COMPONENTS, STYLES AND NECESSARY FUNCTIONS
import style from '../Css/Search.module.css';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export function Search () {

    //I USE THE CURRENT URL TO GET THE SEARCH PARAMETERS
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initialSearchText = queryParams.get('search') || '';

    const [searchText, setSearchText] = useState(initialSearchText);
    const navigate = useNavigate();

    //I USE NAVIGATE WITH THE SEARCH PARAMETER SO THAT IT IS IN THE URL AND I CAN USE IT IN THE MOVIESDETAILS COMPONENT
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/home?search=' + searchText);
    };
    
    //SEARCH BAR RENDERING
    return (
        <form className={style.searchContainer} onSubmit={handleSubmit}>
            <div className={style.searchBox}>
                <input placeholder={searchText || 'Shrek'} type="text" className={style.searchInput} onChange={(e) => setSearchText(e.target.value)} />
                <button type="submit" className={style.searchButton}>
                    <FaSearch size={17}/>
                </button>
            </div>
        </form>
    );
}
