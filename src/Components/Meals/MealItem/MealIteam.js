import classes from './MealIteam.module.css'

const MealIteam = (props) => {
    const price = `$${props.price.toFixed(2)}`
    return(<>
           {/* <li className={classes.}> */}
           <li>
            <div> 
              <h3>{props.name}</h3>
              <div className=''>{props.description}</div>
              <div>{price}</div>
            </div>
            <div></div>
        </li>
          </>);
}

export default MealIteam;