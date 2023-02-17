import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { contactsReducers } from './Slise';
import authReducer from './InitialSice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    contacts: contactsReducers,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
  // middleware: getDefaultMiddleware =>
  // getDefaultMiddleware({
  //   serializableCheck: false,
  // }),
  // devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
