import React, { useEffect, useState } from 'react'
import Product from '../components/Product';
import axios from 'axios';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';

export default function HomeScreen() {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);

    useEffect(()=>{
        const fetchData = async () => {
            setLoading(true);
            try {
                const {data} = await axios.get('/api/products');
                setLoading(false);
                setProducts(data);
            } catch(err) {
                setError(err.message);
                setLoading(false)
            }      
        };
        fetchData();
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
