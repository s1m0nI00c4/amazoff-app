import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

import Product from '../components/Product';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';

export default function HomeScreen() {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);
    const {loading, error, products} = productList

    useEffect(()=>{
        dispatch(listProducts());
    }, []);

    return (
        <div>
            {loading ? 
            ( <LoadingBox/> ) : 
            error ? 
                (<MessageBox variant="danger">{error}</MessageBox>) : 
                (<div className="row center">
                  {products.map(product =>(
                       <Product product={product} key={product._id} />
                    ))} 
                </div>)}
        </div>
    )
}
