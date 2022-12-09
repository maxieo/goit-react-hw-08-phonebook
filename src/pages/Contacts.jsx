import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactsWrapper } from './styles/Contacts.styles';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactsWrapper>
      <div>
        <h2>Phonebook</h2>
        <ContactForm />
      </div>

      <div>
        <h2>Contacts</h2>
        <Filter />
        {isLoading && !error && <p>Loading...</p>}
        <ContactList />
      </div>
    </ContactsWrapper>
  );
};

export default Contacts;
