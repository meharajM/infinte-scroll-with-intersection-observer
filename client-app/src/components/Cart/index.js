import { useSelector } from "react-redux";
import { useMemo } from "react";
import Product from "../Product";
import Nav from "../Nav"
import './style.css';
export default function Card() {
    const cartItems = useSelector((state) => state.cart.items);
    const items = useMemo(() => {
        return Object.keys(cartItems);
    }, [cartItems]);
    return <div >
    <div className="header">
        <h3>Cart</h3>
        <Nav page="cart"/>
    </div> 
    <div className="container">
        {items.length ? 
            items.map((item) => <Product 
                key={item} 
                extra={() => <div>Count: {cartItems[item].count}</div>}  
                {...cartItems[item]}/>)
        : 
            <div>No products added to cart</div>
        }
      {}
    </div>
    
    </div>
}