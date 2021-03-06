import React, { Fragment, useEffect } from 'react';
import { useQuery } from '@apollo/client';
// import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../../redux/constants';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

import { useDispatch, useSelector } from 'react-redux';

import {Row, Col, Typography, Radio} from 'antd';
import './style.css';

const CategoryMenu = () => {

  const dispatch = useDispatch();

  const { categories } = useSelector(state => state.shop);

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  return (
    <Row align="middle">
      <Col className="hero">
        <Typography.Title level={3} style={{color: "white"}}>CHOOSE CATEGORY</Typography.Title>
        <Radio.Group buttonStyle="solid" style={{margin: "10px auto"}} size="large">
          <Radio.Button key="all" onClick={() => {
                    handleClick("");
                  }}
                  style={{margin: "5px 5px"}}>
                    All
                  </Radio.Button>
          {categories.map(category => {
            return (
              <Fragment>
                
                <Radio.Button key={category._id}
                onClick={() => {
                  handleClick(category._id);
                }}
                style={{margin: "5px 5px"}}
              >
                {category.name}
              </Radio.Button>
              </Fragment>
            )
          })}
        </Radio.Group>
      </Col>
    </Row>
  )
}

export default CategoryMenu;
