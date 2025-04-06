import { createSlice, nanoid } from "@reduxjs/toolkit"; // nanoid : function that generate unique ID
//Definir Acciones y Reducer (con Slices), Objetivo: Poder agregar, cambiar o eliminar tareas

// inicia la creación del slice
const todosSlice = createSlice({
  name: "todos",
  initialState: [], //estado inicial de esta slice
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.push(action.payload);
        //Agrega la nueva tarea (action.payload) a la lista actual de tareas (state). // state es la lista de tareas actual, y action es lo que pasó (en este caso, agregar una nueva).
      },
      // Aquí preparas los datos que vas a usar en el reducer, //es decir cuando alguien agregue una tarea, vamos a crear un objeto que tenga: id, etc
      prepare: (text) => ({
        payload: {
          id: nanoid(),
          text,
          completed: false,
        },
      }),
    },
    toggleTodo: (state, action) => {
      const todo = state.find((t) => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
      //Esto busca la tarea con el id que viene en action.payload y cambia su estado de completado
    },
    removeTodo: (state, action) => {
      return state.filter((t) => t.id !== action.payload);
      //Esto elimina la tarea que tenga ese id. Solo quedan las que no coinciden
    },
  },
});

// esta línea exporta solo el reducer
export default todosSlice.reducer;

// estas son tus action creators (para usarlos en los componentes)
export const { addTodo, toggleTodo, removeTodo } = todosSlice.actions;
