import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from './operations';

const initialState = {
  users: {
    items: [],
    isLoading: false,
    error: null
  },
  filter: "all",
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
            state.users.items = action.payload;
          },
          [fetchUsers.rejected](state, action) {
            state.users.isLoading = false;
            state.users.error = action.payload;
          },
          // post
        //   [addContact.pending](state) {
        //     state.contacts.isLoading = true;
        //   },
        //   [addContact.fulfilled](state, action) {
        //     state.contacts.isLoading = false;
        //     state.contacts.error = null;
        //     state.contacts.items.push(action.payload);
        //   },
        //   [addContact.rejected](state, action) {
        //     state.contacts.isLoading = false;
        //     state.contacts.error = action.payload;
        //   },
          }
        })

        export const usersReducer = usersSlice.reducer;
        export const { onFilter } = usersSlice.actions;