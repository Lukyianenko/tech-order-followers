import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = "https://6447f0037bb84f5a3e4dccfa.mockapi.io";

export const fetchUsers = createAsyncThunk(
    'users/fetchAll',
    async (_, thunkAPI) => {
      try {
        const res = await axios.get('/users');
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );