import React from 'react'
import {Link} from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import RecipeList from '../RecipeList/RecipeList';

//link will replace href

const RecipeSearch = () => {

    return (
        <div>
            <SearchBar/>
            <RecipeList/>
        </div>
    )
}

export default RecipeSearch