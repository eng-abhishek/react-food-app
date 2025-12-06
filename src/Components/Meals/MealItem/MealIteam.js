import classes from './MealIteam.module.css'
import MealItemForm from './MealItemForm'
import { useContext } from 'react'
import cartContext from '../../../Store/cartContext'

const MealIteam = (props) => {

    const cartCtx=useContext(cartContext);
    const price = `$${props.price.toFixed(2)}`
    const addItemToCartHandler = amount => {
      cartCtx.addItem({
        id:props.id,
        name:props.name,
        amount:amount,
        price:props.price
      })
    }
    return(<>
           {/* <li className={classes.}> */}
           <li>
            <div> 
              <h3>{props.name}</h3>
              <div className=''>{props.description}</div>
              <div>{price}</div>
            </div>
            <div>
              <MealItemForm onAddToCart={addItemToCartHandler}/>
            </div>
        </li>
          </>);
}

export default MealIteam;