import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = "https://6447f0037bb84f5a3e4dccfa.mockapi.io";

export const fetchUsers = createAsyncThunk(
    'users/fetchAll',
    async (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const tweets = state.user.users.items;
        try {
          const res = await axios.get('/users');
          const datas = [];
          for (let i = 0; i < res.data.length; i += 1) {
            const itemData = tweets[i] ? tweets[i].isFollow : false;
            const item2Data = res.data[i];
            const arrData = {...item2Data, isFollow: itemData};
            datas.push(arrData);
          }
         return datas;
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
