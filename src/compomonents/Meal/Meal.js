import {React, useHistory} from 'react';
import { Card, Button } from 'react-bootstrap';
import './Meal.css'
const Meal = (props) => {
    console.log(props)
const {idMeal,strMeal, strMealThumb, strInstructions } = props.meal;

// const history = useHistory();
// const handleHistory = () =>{
//     history.push()
// }
 
    return (
        <div>
        <div>
                <Card className='mealCard' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={strMealThumb} />
                <hr />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                    {strInstructions.slice(0, 100)}
                    </Card.Text>
                    <Button >Go somewhere</Button>
                </Card.Body>
                </Card>
        </div>
        </div>
    );
};

export default Meal;