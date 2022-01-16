import React, {Fragment} from 'react';
import CategoryMenu from '../components/CategoryMenu';
import ProductList from '../components/ProductList';

export const Home = () => {
  return (
    <Fragment>
      <CategoryMenu />
      <ProductList />
    </Fragment>
  )
}

export default Home;
