import React from 'react';
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../redux/constants";
import { idbPromise } from "../../utils/helpers";

import { useDispatch } from 'react-redux';

const CartItem = ({item}) => {
  
  const dispatch = useDispatch();

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
    idbPromise('cart', 'delete', { ...item });

  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id
      });
      idbPromise('cart', 'delete', { ...item });

    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value)
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });

    }
  }

  return (
    <div style={{marginBottom: "5px"}}>
      <div>
        <img
          src={`/images/${item.image}`}
          alt={item.name}
          style={{width: "100%"}}
        />
      </div>
      <div style={{textAlign: "center"}}>
        <div>{item.name}, ${item.price}</div>
        <div>
          <span>Qty: </span>
          <input
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            onChange={onChange}
          />
          <span
            role="img"
            aria-label="trash"
            onClick={() => removeFromCart(item)}
            style={{marginLeft: "10px"}}
          >
            🗑️
          </span>
        </div>
      </div>
    </div>
  );

}

export default CartItem;
