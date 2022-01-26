import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {getData, updateCurrentData} from './slice'
import debounce from '../../utils/debounce';
import Product from '../Product';
import {addToCart} from '../Cart/slice';
import Nav from '../Nav';
import './style.css';
export default function Browse() {
    const browseData = useSelector((state) => state.browse.currentData)
    const loading = useSelector((state) => state.browse.loading)
    const dispatch = useDispatch()
    function loadMore() {
        dispatch(updateCurrentData());
    }
    return <div >
        <div className="header">
            <h3>Fresh stock</h3>
            <Nav page="browse"/>
        </div> 
        <div className="container">
            <div className="product-list">{
                browseData && browseData.length && browseData.map((p, index) => 
                    <Product key={p.productId} 
                        trackVisibility={index === browseData.length - 1} 
                        onVisible={loadMore} 
                        extra={() => {
                            return <button onClick={() => {dispatch(addToCart({...p}))}}>Add to cart</button>
                        }} 
                        {...p}/>)
            }</div>
            <div>
                {
                    loading && <div>Loading...</div>
                }
            </div>
        </div>
        
        </div>
}