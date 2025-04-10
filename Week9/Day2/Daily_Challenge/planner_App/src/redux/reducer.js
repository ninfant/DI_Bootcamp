import { SET_SELECTED_DAY, ADD_TASK, DELETE_TASK } from "./actionTypes";

const initialState = {
  selectedDay: null,
  tasksByDay: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SELECTED_DAY:
      return { ...state, selectedDay: action.payload };

    case ADD_TASK: {
      const { day, task } = action.payload;
      const dayTasks = state.tasksByDay[day] || [];
      return {
        ...state,
        tasksByDay: {
          ...state.tasksByDay,
          [day]: [...dayTasks, task],
        },
      };
    }

    case DELETE_TASK: {
      const { day, id } = action.payload;
      return {
        ...state,
        tasksByDay: {
          ...state.tasksByDay,
          [day]: state.tasksByDay[day].filter((t) => t.id !== id),
        },
      };
    }

    default:
      return state;
  }
}

export default rootReducer;
