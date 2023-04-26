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

  export const followUser = createAsyncThunk(
    "users/follow",
    async (user, thunkAPI) => {
      try {
        const following = user.isFollow ? (user.followers -1) : (user.followers +1);
        console.log(following)
        const res = await axios.put(`/users/${user.id}`, {
          followers: following,
        });
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  )
