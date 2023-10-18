import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {

    addTodo: (state, action) => {
      state.push(action.payload);
    },

    deleteTodo: (state, action) => {
      state.splice(action.payload, 1);
    },

    deleteAll : ()=>{
        return []
    }
  },
});

export const { addTodo, deleteTodo , deleteAll } = todoSlice.actions;
export default todoSlice.reducer;
