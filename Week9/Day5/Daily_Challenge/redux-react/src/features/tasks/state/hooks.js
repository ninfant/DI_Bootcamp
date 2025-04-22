import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, editTask } from "./slice";
import { useCallback } from "react";
import { selectTasks } from "./slice";

export const useTasks = () => {
  return useSelector(selectTasks);
};

export const useAddTask = () => {
  const dispatch = useDispatch();
  return useCallback(
    (taskName, selectedCategory) => {
      dispatch(addTask({ name: taskName, category: selectedCategory }));
    },
    [dispatch]
  );
};

export const useDeleteTask = () => {
  const dispatch = useDispatch();
  return useCallback(
    (taskid) => {
      dispatch(deleteTask({ id: taskid }));
    },
    [dispatch]
  );
};

export const useEditTask = () => {
  const dispatch = useDispatch();
  return useCallback(
    (taskId, taskName, taskCategory) => {
      dispatch(
        editTask({ id: taskId, name: taskName, category: taskCategory })
      );
    },
    [dispatch]
  );
};
