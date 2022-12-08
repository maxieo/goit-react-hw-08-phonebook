import React from 'react';
import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getFilter, getContacts } from '../../redux/contacts/selectors';
import { ContactListStyle } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filterContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <ContactListStyle>
      {filterContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ContactListStyle>
  );
};
