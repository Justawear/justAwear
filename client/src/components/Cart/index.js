import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../redux/constants';

import { useDispatch, useSelector } from 'react-redux';

import { Modal, Button } from 'antd';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {

  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  const dispatch = useDispatch();

  const { cart, cartOpen } = useSelector(state => state.shop);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!cart.length) {
      getCart();
    }
  }, [cart.length, dispatch]);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  function calculateTotal() {
    let sum = 0;
    cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    const productIds = [];

    cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds },
    });
  }

  /* Modal Functionality */
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
    toggleCart();
  };
  const handleOk = () => {
    setIsModalVisible(false);
    Auth.loggedIn() ? submitCheckout() : window.location.assign("/login");
  };
  const handleCancel = () => {
    setIsModalVisible(false);
    toggleCart();
  };

  if (!cartOpen) {
    return (
      <div onClick={showModal} style={{marginRight: "15px"}}>
        <span role="img" aria-label="trash">
          🛒
        </span>
      </div>
    );
  }

  return (
    <Modal title="Your Cart" 
      visible={isModalVisible} 
      cancelText="Keep Shopping" 
      onOk={handleOk} 
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Keep Shopping
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          {Auth.loggedIn() ? "Checkout" : "Login to checkout"}
        </Button>
      ]}
    >
      {cart.length ? (
        <div>
          {cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}

          <div style={{marginTop: "5px"}}>
            <strong>Total: ${calculateTotal()}</strong>
          </div>
        </div>
      ) : (
        <h3>
          <span role="img" aria-label="shocked">
            😱
          </span> 
          You haven't added anything to your cart yet!
        </h3>
      )}
    </Modal>
  )
}

export default Cart;
