import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../redux/constants";
import { idbPromise } from "../../utils/helpers";

import { useDispatch, useSelector } from 'react-redux';
import {Col, Card, Button} from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const ProductItem = (item) => {

  const dispatch = useDispatch();

  const { cart } = useSelector(state => state.shop);

  const {_id, name, image, price, quantity} = item;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }

  return (
    <Col style={{marginTop: "32px 0", textAlign: "center"}} xs={{span: 20, offset: 2}} md={{span: 8, offset: 0}} lg={{span:4}} >
        <Card
        style={{marginTop: "16px", border: "none"}}
          hoverable
        >
      <Link to={`/products/${_id}`}>
          <img alt={name} src={`/images/${image}`} style={{width: "100%", marginBottom: "5px"}} />
          <Card.Meta title={name} description={price} />
      </Link>
          <Button onClick={addToCart} type="primary" size="large" style={{marginTop: "5px"}}>Add to cart</Button>
        </Card>
    </Col>
  )
}

export default ProductItem;
