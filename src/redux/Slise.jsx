import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContactsApi,
  addContactsApi,
  deleteContactsApi,
} from './contactApi';

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.contacts.error = action.payload;
};

export const mySlice = createSlice({
  name: 'contakt',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      console.log(action.payload);
      state.contacts.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts.items = action.payload;
    },
    filter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContactsApi.pending]: handlePending,
    [addContactsApi.pending]: handlePending,
    [deleteContactsApi.pending]: handlePending,
    [fetchContactsApi.rejected]: handleRejected,
    [addContactsApi.rejected]: handleRejected,
    [deleteContactsApi.rejected]: handleRejected,
    [fetchContactsApi.fulfilled](state, action) {
      state.contacts.items = action.payload;
      state.contacts.isLoading = false;
    },
    [addContactsApi.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload);
    },
    [deleteContactsApi.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
    },
  },
});

export const { addContact, deleteContact, filter } = mySlice.actions;
export const contactsReducers = mySlice.reducer;

export const saveContacts = state => state.contacts.contacts.items;
export const filterContacts = state => state.contacts.filter;
export const isLoading = state => state.contacts.contacts.isLoading;
