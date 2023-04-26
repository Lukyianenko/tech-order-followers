import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, followUser } from './operations';
import { statusFilters } from "../constans";

const initialState = {
  users: {
    items: [],
    isLoading: false,
    error: null
  },
  filter: statusFilters.all,
  };

export const usersSlice = createSlice({
        name: 'tweets',
        initialState,
        reducers: {
          onFilter: (state, action) => {
            state.filter = action.payload;
          }
        },

        extraReducers: {
          // fetch
          [fetchUsers.pending](state) {
            state.users.isLoading = true;
          },
          [fetchUsers.fulfilled](state, action) {
            state.users.isLoading = false;
            state.users.error = null;
            state.users.items = action.payload.map(item => (
              {...item, isFollow: false}
            ));
          },
          [fetchUsers.rejected](state, action) {
            state.users.isLoading = false;
            state.users.error = action.payload;
          },
          
          [followUser.pending](state) {
            state.users.isLoading = true;
          },
          [followUser.fulfilled](state, action) {
            state.users.isLoading = false;
            state.users.error = null;
            console.log(action.payload);
            const index = state.users.items.findIndex(
              item => item.id === action.payload.id
            );
            state.users.items.splice(index, 1,{...action.payload, isFollow: !state.users.items[index].isFollow});
          },
          [followUser.rejected](state, action) {
            state.users.isLoading = false;
            state.users.error = action.payload;
          },
          },
          })

        export const usersReducer = usersSlice.reducer;
        export const { onFilter } = usersSlice.actions;