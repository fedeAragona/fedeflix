import style from '../Css/Search.module.css';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export function Search () {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initialSearchText = queryParams.get('search') || '';

    const [searchText, setSearchText] = useState(initialSearchText);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/home?search=' + searchText);
    };

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
