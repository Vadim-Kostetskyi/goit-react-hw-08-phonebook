import { createAction } from '@reduxjs/toolkit';

export const fetchContacts = createAction('contacts/fetchContacts');

export const addContact = createAction('contacts/addContact');

export const deleteContact = createAction('contacts/deleteContact');
