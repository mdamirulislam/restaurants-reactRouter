import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faVideo } from '@fortawesome/free-solid-svg-icons'
import './MealDetail.css'
import { useHistory, useParams } from 'react-router';

const MealDetail = () => {
    const {id} = useParams();
    const [mealDeail, setMealDetail] = useState({});
    console.log(mealDeail)
    const {idMeal,strMeal, strMealThumb, strInstructions,strYoutube } = mealDeail;
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(data => setMealDetail(data.meals[0]));
    },[]);

    const history = useHistory();
    const handleHistory = () =>{
        history.push('/home')
    }
    return (
        <div className='m-5'>
            <div className='mealDetailCard'>
            <div className='row'>
                <div className='col-md-8'>
                <img className='' src={strMealThumb} alt="" />
                </div>
                <div className='col-md-4 p-5'>
                    <h2> Name: {strMeal}</h2>
                    <p>{strInstructions.slice(0,500)}</p>
              <a href="https://www.youtube.com/watch?v=CmdTUdljh1Q"><FontAwesomeIcon className='DetailInfoIcon' icon={faVideo}/></a> <br /> <br />
                    <button onClick={handleHistory}>Go Back</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default MealDetail;