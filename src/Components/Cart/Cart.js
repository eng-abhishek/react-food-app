import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import { useContext } from 'react'
import cartContext from '../../Store/cartContext'
import cartItem from './CartItem'
import CartItem from './CartItem'

const Cart = props => {

    const cartCtx = useContext(cartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    // const hasItems = cartCtx.item.length > 0;

    const cartItemRemoveHandler = () =>{

    }

    const cartItemAddHandler = () =>{

    }

    const cartItems = (
      <ul className={classes.cartItems}>
        {/* {[{id:'c1',name:'Sushi',amount:2,price:12.989}].map((item)=>(
        <li>{item.name}</li>
        ))} */}
        {
          cartCtx.item.map((item)=>(
            // <li>{item.name}</li>
            <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null,item.id)}
            onAdd={cartItemAddHandler.bind(null,item)}
            />
          ))
        }
      </ul>
      )
     return <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
<span>Total Amount</span>
<span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
         <buton className={classes['button--alt']} onClick={props.onClose}>Close</buton>
         {/* {hasItems && <button className={classes.button}>Order</button>} */}

          {<button className={classes.button}>Order</button>}
      </div>
     </Modal>  
}

export default Cart;