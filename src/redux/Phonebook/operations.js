import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://6385414e875ca3273d3975f0.mockapi.io'

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => { 
    try {
      const response = await axios.get('/contacts')
      return response.data
    } catch (error) {
      return thunkApi.rejectWithValue(error.message)
    }
  }
)

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkApi) => { 
    try {
      const response = await axios.post('/contacts', { name, number })
      return response.data
    } catch (error) {
      return thunkApi.rejectWithValue(error.message)
    }
  }
)

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkApi) => { 
    try {
      const response = await axios.get(`/contacts/${contactId}`)
      return response.data
    } catch (error) {
      return thunkApi.rejectWithValue(error.message)
    }
  }
)