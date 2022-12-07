import React from "react";
import ContactItem from "components/ContactItem/ContactItem";
import { useSelector } from "react-redux";
import {getFilter, getContacts} from '../../redux/selectors'

export const ContactList = () => {
  const contacts = useSelector(getContacts)
  const filter = useSelector(getFilter)

  const filterContacts = contacts.filter(contact => { 
    return contact.name.toLowerCase().includes(filter.toLowerCase())
  })

  return (
    <ul>
      {filterContacts.map(contact => ( 
        <ContactItem key={contact.id} contact={contact}/>
      ))}
    </ul>
  )
}