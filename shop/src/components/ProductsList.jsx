import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { fetchProducts, getProducts } from '../features/productsSlice';
import './style.css'

function ProductsList() {
    const navigate = useNavigate();
    const {products, error} = useSelector((state)=> getProducts(state));
    // console.log(products);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchProducts());
    },[])


  return (
    <div>
        <h1 style={{textAlign:'center', margin:'30px 0 50px 0'}}>Products List</h1>
        <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', flexWrap:'wrap', gap:'50px 0'}}>
        {products ? products.map((product)=> {
            return product ?(
                <div key={product.id} className='products' onClick={()=>navigate(`/product/${product.id}`)}>
                        <img src={product.image} style={{width:'200px', height:'230px'}}/>
                        <p>{product.title}</p>
                        <p>$ {product.price}</p>
                        <p>{product.category}</p>
                </div>
            ): null
        }) : error ? <h4 style={{color:'red'}}>{error.message}</h4> :  <h2 style={{textAlign:'center'}}>...Loading</h2>} 
        </div>

    </div>
  )
}

export default ProductsList