import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as action from './Actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContactsApi = createAsyncThunk(
  'action.fetchContacts',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/contacts');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactsApi = createAsyncThunk(
  'contacts/addContacts',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContactsApi = createAsyncThunk(
  'action.deleteContact',
  async (id, thunkAPI) => {
    try {
      axios.delete(`/contacts/${id}`);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
