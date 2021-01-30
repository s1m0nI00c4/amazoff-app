import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions'
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function ProductListScreen(props) {

    const dispatch = useDispatch();
        const productList = useSelector(state=> state.productList);
        const {loading, error, products} = productList;
        const deleteHandler = e => {
            //TODO
        }
        useEffect(()=>{
            dispatch(listProducts());
        }, [dispatch])
    return (
        <div>
            <h1>Product List</h1>
            {loading ? 
            (<LoadingBox></LoadingBox>) :
            error ? 
            (<MessageBox variant="danger">{error}</MessageBox>):
            (<div>
                <table className="table">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>NAME</td>
                            <td>CATEGORY</td>
                            <td>BRAND</td>
                            <td>PRICE</td>
                            <td>COUNT IN STOCK</td>
                            <td>ACTIONS</td>
                        </tr>
                    </thead>
                    <tbody>
                        { products && products.map(product => (
                            <tr key={product._id}>
                                <td>{product._id}</td>
                                <td>{product.name}</td>
                                <td>{product.category}</td>
                                <td>{product.brand}</td>
                                <td>{product.price.toFixed(2)}</td>
                                <td>{product.countInStock}</td>
                                <td>
                                    <button className="small" type="button" onClick={() => props.history.push(`/product/${product._id}/edit`)}>Edit</button>
                                    <button className="small" type="button" onClick={deleteHandler}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>)
            }
        </div>
    )
}
