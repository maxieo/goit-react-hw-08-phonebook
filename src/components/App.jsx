import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import {ContactList} from './ContactList/ContactList';
import {Filter} from './Filter/Filter';
import { selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';



export default function App() {
  const dispatch = useDispatch()
  const isLoading = useSelector(selectIsLoading)
  const error = useSelector(selectError)
  
  useEffect(() => { 
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />

      <div>
        <h2>Contacts</h2>
        <Filter />
        { isLoading && !error && <p>Loading...</p>}
        <ContactList />
      </div>
    </>
  );
};
