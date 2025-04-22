// src/features/categories/state/hooks.js
import { useSelector, useDispatch } from "react-redux";
import { addCategory, editCategory, deleteCategory } from "./slice";
import { useCallback } from "react";

export const useCategories = () => {
  return useSelector((state) => state.categories.categories);
};

export const useAddCategory = () => {
  const dispatch = useDispatch();
  return useCallback(
    (id, name) => {
      dispatch(addCategory({ id, name }));
    },
    [dispatch]
  );
};

export const useEditCategory = () => {
  const dispatch = useDispatch();
  return useCallback(
    (id, name) => {
      dispatch(editCategory({ id, name }));
    },
    [dispatch]
  );
};

export const useDeleteCategory = () => {
  const dispatch = useDispatch();
  return useCallback(
    (id) => {
      dispatch(deleteCategory({ id }));
    },
    [dispatch]
  );
};
