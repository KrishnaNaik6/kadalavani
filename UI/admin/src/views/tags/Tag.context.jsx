import React, { createContext, useContext, useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { useApi } from '../../api/hooks';
import { getTags, createTags, editTags } from '../../api/tags.api';
const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [editData, setEditData] = useState(null);
  const { data, status, exec } = useApi(getTags);
  const createCategoryAPI = useApi(createTags);
  const editCategoryAPI = useApi(editTags);
  const [categoryDrawerState, setCategoryDrawerState] = useState({
    isOpen: false,
    mode: 'edit',
  });
  useEffect(() => {
    console.log('data is updated', data);
    setCategories(data?.data?.data);
  }, [data]);
  const actions = {
    openCreateCategoryDrawer: () => {
      setCategoryDrawerState((pv) => ({ ...pv, isOpen: true, mode: 'create' }));
    },
    openEditCategoryDrawer: (data) => {
      setCategoryDrawerState((pv) => ({ ...pv, isOpen: true, mode: 'edit' }));
      setEditData(data);
    },
    closeCategoryDrawer: () => {
      setCategoryDrawerState((pv) => ({ ...pv, isOpen: false }));
    },
    createCategory: async (data) => {
      console.log(await createCategoryAPI.exec(data));
      exec({ limit: 1000 });
      // setCategories((pv) => [...pv, data]);
    },
    editCategory: async (data) => {
      console.log('data');
      console.log(data);
      console.log(await editCategoryAPI.exec(data));
      exec({ limit: 1000 });
      // setCategories((pv) => [...pv, data]);
    },
  };

  const states = {
    categoryDrawerState,
    editData,
  };
  // const loadCategories = () => {
  //   // Implement your login logic here
  //   // setCategories = [];
  //   exec({ limit: 1000 });
  // };

  // const createCategory = () => {
  //   // Implement your login logic here
  //   // setCategories = [];
  // };

  // useEffect(() => {
  //   loadCategories();
  // }, [loadCategories]);

  useEffect(() => {
    exec({ limit: 1000 });
  }, [exec]);
  return (
    <CategoriesContext.Provider
      value={{ categories, actions, states, data, status, exec }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};
CategoriesProvider.propTypes = {
  children: propTypes.node.isRequired,
};
export const useCategory = () => useContext(CategoriesContext);
