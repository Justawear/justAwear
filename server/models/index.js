import { useStoreContext } from "../../utils/GlobalState";
const User = require('./User');
const Product = require('./Product');
const Category = require('./Category');
const Order = require('./Order');

const [state, dispatch] = useStoreContext();

const { categories } = state;

const { data: categoryData } = useQuery(QUERY_CATEGORIES);

useEffect(() => {
  // if categoryData exists or has changed from the response of useQuery, then run dispatch()
  if (categoryData) {
    // execute our dispatch function with our action object indicating the type of action and the data to set our state for categories to
    dispatch({
      type: UPDATE_CATEGORIES,
      categories: categoryData.categories
    });
  }
}, [categoryData, dispatch]);

module.exports = { User, Product, Category, Order };

const [state, dispatch] = useStoreContext();

const { categories } = state;

const { data: categoryData } = useQuery(QUERY_CATEGORIES);

import React, { useEffect } from 'react';
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../../utils/actions';