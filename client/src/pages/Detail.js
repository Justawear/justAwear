import React, { Fragment, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';


import { 
    REMOVE_FROM_CART,   
    UPDATE_CART_QUANTITY,
    ADD_TO_CART,
    UPDATE_PRODUCTS
} from '../redux/constants';
import { QUERY_PRODUCTS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import spinner from '../assets/spinner.gif';
import { useDispatch, useSelector } from 'react-redux';

import {Col, Typography, Image, Button} from 'antd';

function Detail() {
    const dispatch = useDispatch();

    const { id } = useParams();

    const [ currentProduct, setCurrentProduct ] = useState({});

    const { loading, data } = useQuery(QUERY_PRODUCTS);

    const { products, cart } = useSelector(state => state.shop);

    useEffect(() => {
        if(products.length) {
            setCurrentProduct(products.find((product) => product._id === id ) );
        }
        else if (data) {
            dispatch({
                type: UPDATE_PRODUCTS,
                products: data.products
            });

            data.products.forEach((product) => {
                idbPromise('products', 'put', product);
            });
        }
        else if (!loading) {
            idbPromise('products', 'get').then(
                (indexedProducts) => {
                    dispatch({
                        type: UPDATE_PRODUCTS,
                        products: indexedProducts
                    });
                });
        }
    }, [ products, data, loading, dispatch, id]);

    const addToCart = () => {
        const itemInCart = cart.find((cartItem) => cartItem._id === id);
        if(itemInCart) {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: id, 
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
            });
            idbPromise('cart', 'put', {
                ...itemInCart,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
            });
        } else {
            dispatch({
                type: ADD_TO_CART,
                product: { ...currentProduct, purchaseQuantity: 1},
            });
            idbPromise('cart', 'put', {
                ...currentProduct,
                purchaseQuantity: 1
            });
        }
    };

    const removeFromCart = () => {
        dispatch({
            type: REMOVE_FROM_CART,
            _id: currentProduct._id
        });

        idbPromise('cart', 'delete', { ...currentProduct });
    }

    return (
        <Fragment>
            {currentProduct && cart ? (
                <Fragment>
                    <Col style={{paddingTop: "70px"}}>
                        <Link to="/" style={{marginLeft: "15px"}}>← Back to Products</Link>
                    </Col>

                    <Col style={{textAlign: "center"}}>
                        <Typography.Title level={2}>{currentProduct.name}</Typography.Title>


                        <Image style={{display: "block", margin: "10px auto 5px"}} width={200} src={`/images/${currentProduct.image}`} alt={currentProduct.name} />


                        <Typography.Text style={{display: "block"}}>
                            <strong>Price:</strong>${currentProduct.price}
                        </Typography.Text>

                            <Button style={{margin: "10px 5px 0"}} type='primary' onClick={addToCart}>Add to Cart</Button>
                            <Button style={{margin: "0 5px"}} type='danger'
                            disabled={!cart.find((p) => p._id === currentProduct._id)}
                            onClick={removeFromCart}
                            >
                            Remove from Cart
                            </Button>

                        
                        <Typography.Text type='secondary' style={{display: "block", padding: "5px 10px"}}>
                            {currentProduct.description}
                        </Typography.Text>

                    </Col>
                </Fragment>
            ) : null}
            {loading ? <img stc={spinner} alt='loading' />: null}
        </Fragment>
    );
}

export default Detail;