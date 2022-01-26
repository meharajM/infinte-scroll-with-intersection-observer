import { useRef, memo } from 'react';
import useOnScreen from '../../utils/useOnScreen';
import {useDispatch} from 'react-redux';
import './style.css';
function Product(props) {
    const {productName, searchImage, trackVisibility, onVisible, extra, price} = props;
    const ref = useRef()
    const dispatch = useDispatch();
    const isVisible = useOnScreen(ref, onVisible)
    
    const productProps = { className: "product"};
    if (trackVisibility) {
        productProps.ref = ref;
    }
    return <div {...productProps}>
    <div className="image" style={{backgroundImage: `url(${searchImage})`}}></div>
    <div className="info">
        <div className="name">{productName}</div>
        <div className="more-info">
            <div className="price">Price: {price}</div>
            {extra && extra()}
        </div>
        
    </div>
</div>
}
export default memo(Product);