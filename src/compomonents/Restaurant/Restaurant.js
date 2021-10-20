import React, { useEffect, useState } from 'react';
import './Restaurant.css'
import Meal from '../Meal/Meal';

const Restaurants = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);

    const handleSearch = e => {
        setSearchText(e.target.value)
    };
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    },[searchText])
 
    return (
        <div>
            <h1 className='m-4'><span className='favourite'>Favourite </span>Food</h1>
            <input className='foodSearch' onChange={handleSearch} type="text" placeholder='search your food' />
            <div className='meals container'>
                {
                    meals.map(meal => <Meal meal={meal} key={meal.idMeal}/>)
                }
            </div>
        </div>
    );
};

export default Restaurants;