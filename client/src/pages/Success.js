import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ORDER } from '../utils/mutations';
import { idbPromise } from '../utils/helpers';

import {Result} from 'antd';

const Success = () => {

  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise('cart', 'get');
      const products = cart.map((item) => item._id);

      if (products.length) {
        try {
          const { data } = await addOrder({ variables: { products } });
          const productData = data.addOrder.products;

          productData.forEach((item) => {
            idbPromise('cart', 'delete', item);
          });
        } catch (err) {
          console.log(err); // TODO: Something more informative to the user than this
        }
      }

      setTimeout(() => {
        window.location.assign('/');
      }, 3000);
    }

    saveOrder();
  }, [addOrder]);

  return (
    <div style={{paddingTop: "50px"}}>
      <Result
    status="success"
    title="Thank you for your purchase!"
    subTitle="You will now be redirected to the home page, Please Wait."
  />
    </div>
  )
}

export default Success;
