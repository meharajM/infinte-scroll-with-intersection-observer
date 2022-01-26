import { Outlet, Link, Redirect } from "react-router-dom";
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {getData} from '../Browse/slice'
import Browse from "../Browse";
import Nav from "../Nav";
import './style.css';
export default function Home() {
    const browseData = useSelector((state) => state.browse.data)
    const loading = useSelector((state) => state.browse.loading)
    const dispatch = useDispatch()
    useEffect(() => {
        async function get() {
            if(!browseData.length) {
                const data = await fetch('/api').then(res => res.json());
                dispatch(getData(data)); 
            } 
        }
        get();
    },[])
  return (
    <div>
      <Outlet  />
    </div>
  );
}