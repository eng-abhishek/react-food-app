import classes from './AvailableMeals.module.css'
import Card from '../UI/Card'
import MealIteam from './MealItem/MealIteam'
const DUMMY_MEALS = [
{
    id:'m1',
    name: 'Sushil',
    description: 'Finest fish and veggies',
    price:22.99
},
{
    id:'m2',
    name: 'Sushil',
    description: 'Finest fish and veggies',
    price:22.99
},
{
    id:'m3',
    name: 'Sushil',
    description: 'Finest fish and veggies',
    price:22.99
},
{
    id:'m4',
    name: 'Sushil',
    description: 'Finest fish and veggies',
    price:22.99
},
]

const AvailableMeals = () =>{
//   const mealsList = DUMMY_MEALS.map(meal => <li>{meal.name}</li>)
const mealsList = DUMMY_MEALS.map(meal => <MealIteam key={meal.id} name={meal.name} description={meal.description} price={meal.price}/>)

  return  <section className={classes.meals}>
    <Card>
      <ul>{mealsList}</ul>
    </Card>
  </section>

}

export default AvailableMeals