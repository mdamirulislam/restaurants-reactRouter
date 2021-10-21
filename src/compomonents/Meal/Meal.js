import {React} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';
import './Meal.css'
const Meal = (props) => {
    console.log(props)
const {idMeal,strMeal, strMealThumb, strInstructions } = props.meal;
console.log(props)

const history = useHistory();

const handleHistory = () =>{
    history.push(`/meal/${idMeal}`)
}
 
    return (
        <div className='mb-5'>
        <div>
                <Card className='mealCard' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={strMealThumb} />
                <hr />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                    {strInstructions.slice(0, 100)}
                    </Card.Text>
                    <Button onClick={handleHistory}><FontAwesomeIcon className='infoIcon' icon={faInfoCircle} /> <span className='detailsText'>See Details</span></Button>
                </Card.Body>
                </Card>
        </div>
        </div>
    );
};

export default Meal;