import React, {Fragment} from 'react';
import CategoryMenu from '../components/CategoryMenu';
import ProductList from '../components/ProductList';
import Slider from '../components/Slider';

export const Home = () => {
  return (
    <Fragment>
      <Slider style={{margin: "10px auto"}} />
      <CategoryMenu />
      <ProductList />
    </Fragment>
  )
}

export default Home;
