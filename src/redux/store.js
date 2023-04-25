import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './users/slice';
// import { authReducer } from './auth/slice';
import { persistStore, 
        persistReducer, 
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER,  } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

  const userPersistConfig = {
    key: 'root',
    storage,
  };

  const persistedUsersReducer = persistReducer(userPersistConfig, usersReducer);

export const store = configureStore({
    reducer: {
        user: persistedUsersReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    devTools: process.env.NODE_ENV === 'development',
})

export const persistor = persistStore(store);