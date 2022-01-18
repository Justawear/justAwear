import React, { Fragment, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import ProductItem from '../ProductItem';
import { UPDATE_PRODUCTS } from '../../redux/constants';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';

import {Typography, Row} from 'antd'

import { useDispatch, useSelector } from 'react-redux';

const ProductList = () => {

  const dispatch = useDispatch();

  const { currentCategory, products } = useSelector(state => state.shop);

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return products;
    }

    return products.filter(
      (product) => product.category._id === currentCategory
    );
  }

  return (
    <Fragment>
      <div style={{marginTop: "32px"}}>
        <Typography.Title level={3} style={{textAlign: "center"}}>
          Our Products
        </Typography.Title>
        {products.length ? (
          <Row justify='space-around' style={{width: "85%", margin: "auto"}}>
            {filterProducts().map((product) => (
              <ProductItem
                key={product._id}
                _id={product._id}
                image={product.image}
                name={product.name}
                price={product.price}
                quantity={product.quantity}
              />
            ))}
          </Row>
      ) : (
        <Typography.Title level={3}>
          You Haven't Added Products Yet!
        </Typography.Title>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
      </div>
    </Fragment>
  )
}

export default ProductList;
