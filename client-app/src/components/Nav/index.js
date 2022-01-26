import {Link } from "react-router-dom";
import { useSelector } from "react-redux";
import './style.css';
export default function Nav(props) {
    const {page} = props;
    const cartItemCount = useSelector((state) => state.cart.itemCount);
    return <nav>
        <Link to="/browse"><span className={page === 'browse' ? 'selected' : ''}>Browse</span></Link> |{" "}
        <Link to="/cart"><span className={page === 'cart' ? 'selected' : ''}>Cart ({cartItemCount})</span></Link>
      </nav>
}