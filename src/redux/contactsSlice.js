import { createSlice } from '@reduxjs/toolkit';
import contacts from '../data/contacts.json';
import { nanoid } from 'nanoid';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        return [...state, action.payload];
      },
      prepare(contactInfo) {
        return {
          payload: { id: nanoid(), ...contactInfo },
        };
      },
    },
    deleteContact: (state, action) =>
      state.filter(contact => contact.id !== action.payload),
  },
});

// Action creators are generated for each case reducer function
export const { addContact, deleteContact } = contactsSlice.actions;
