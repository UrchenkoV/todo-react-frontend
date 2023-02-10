import { RootState } from "./../store";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodoState, TTodoItem } from "./todo.types";
import { EStatus } from "../../types/types";
import axios from "../../axios";
import { AxiosError } from "axios";

export const fetchTodoCreate = createAsyncThunk<TTodoItem>(
  "todo/create",
  //@ts-ignore
  async (req, { rejectWithValue }) => {
    console.log("fetch", req);

    try {
      const { data } = await axios.post("/todos", req);
      return data;
    } catch (err) {
      const error: AxiosError<any> = err;
      console.log(err);

      if (!error.response) {
        throw err;
      }

      return rejectWithValue(error.response.data);
    }
  }
);

const initialState: ITodoState = {
  todos: [],
  status: EStatus.LOADING,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodos(state, action: PayloadAction<TTodoItem[]>) {
      state.todos = action.payload;
    },
    setStatus(state, action: PayloadAction<EStatus>) {
      state.status = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchTodoCreate.pending, (state) => {
      state.status = EStatus.LOADING;
    });
    builder.addCase(
      fetchTodoCreate.fulfilled,
      (state, action: PayloadAction<TTodoItem>) => {
        state.status = EStatus.SUCCESS;
        state.todos.push(action.payload);
      }
    );
    builder.addCase(fetchTodoCreate.rejected, (state) => {
      state.status = EStatus.ERROR;
    });
  },
});

export const selectTodo = (state: RootState) => state.todo;

export default todoSlice.reducer;
