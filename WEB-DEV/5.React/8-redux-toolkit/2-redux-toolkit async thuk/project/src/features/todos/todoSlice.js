import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchTodos = createAsyncThunk("fetchTodos", async ()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    return response.json();
})

 const todoSlice = createSlice({
  name: 'todos',
  initialState :{
    isLoading : false,
    data : null,
    isError : false
  },
  extraReducers : (builder)=>{
    builder.addCase(fetchTodos.pending, (state, action) =>{
        state.isLoading = true;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) =>{
        state.isLoading = false;
        state.data = action.payload;
    });
    builder.addCase(fetchTodos.rejected, (state, action) =>{
        state.isError = true;
    });
  }
})


export default todoSlice.reducer;

// Extra reducer can be used for one action with diff types in it
/* 
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase('localStorage/loadUser', (state, action) => {
        state.name = action.payload.name;
        state.email = action.payload.email;
      })
      .addCase('localStorage/clearUser', (state) => {
        state.name = '';
        state.email = '';
      });
  },
});

export default userSlice.reducer;


store.dispatch({
  type: 'USER_ACTION',
  payload: {
    type: 'load',
    name: 'John Doe',
    email: 'john.doe@example.com',
  },
});

store.dispatch({
  type: 'USER_ACTION',
  payload: {
    type: 'clear',
  },
});
*/