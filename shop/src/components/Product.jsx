import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProduct } from '../features/productsSlice';
import { fetchProduct } from '../features/productsSlice';
import { useEffect } from 'react';

function Product() {
    const{id}= useParams();
    const {product} = useSelector((state)=> getProduct(state));
    const {image, title, price, category, description} = product;
    // console.log(product, 'prod');
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchProduct(id));
    },[])
  return image || title || price || category || description  ? (
    <div className='product_box'>
      <div className='image'>
        <img src={image} style={{width:'300px', height:'370px'}} />
      </div>
      <div className="product_descr">  
        <h3>{title}</h3>
        <p className='price'>$ {price}</p>
        <p  className='category'>{category}</p>
        <p>{description}</p>
        <button className='btn'>Add to Cart</button>
      </div>  
    </div>
  
  ) :  <h2 style={{textAlign:'center', marginTop:'50px'}}>...Loading</h2>
}

export default Product;
