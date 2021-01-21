import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import { data } from '../data';

export default function ProductScreen(props) {
    const product = data.products.find(x => x._id===props.match.params.id)
    if(!product){return <div>Product not found!</div>}
    return (
        <div>
            <Link to="/">Back to results</Link>
            <div className="row top">
                <div className="col-2">
                    <img src={product.image} alt={product.name}/>
                </div>
                <div className="col-1">
                    <ul>
                        <li>{product.name}</li>
                        <li>
                            <Rating rating={product.rating} numReviews={product.numReviews}/>
                        </li>
                        <li>Price: €{product.price}</li>
                        <li>
                            <p>Description:</p>
                            <p>{product.description}</p>
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Price</div>
                                    <div className="price">{product.price}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Status</div>
                                    <div>
                                        {product.countInStock>0 ?
                                            (<span className="success">In stock</span>) :
                                            (<span className="error">Out of stock</span>)
                                        }
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button className="primary block">Add to cart</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
