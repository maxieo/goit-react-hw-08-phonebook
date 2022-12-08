import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const getActions = type => extraActions.map(action => action[type])
const extraActions = [fetchContacts, addContact, deleteContact];

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null
  },

  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload)
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          contact => contact.id-- - action.payload.id
        )
        state.items.splice(index, 1)
      })
      .addMatcher(isAnyOf(...getActions('pending')), state => { 
        state.isLoading = true
      })
      .addMatcher(isAnyOf(...getActions('rejected')), (state,action) => { 
        state.isLoading = false
        state.error = action.payload
      })
})


const defaultFilter = '';
const filterSlice = createSlice({
  name: 'filter',
  initialState: defaultFilter,
  reducers: {
    setFilterValue(state, action) {
      return (state = action.payload);
    },
  },
});

export const contactRedusers = contactSlice.reducer;

export const { setFilterValue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
