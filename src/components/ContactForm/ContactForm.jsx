import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Label } from './ContactForm.styled'; 


export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        return setName(e.target.value);
      case 'number':
        return setNumber(e.target.value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      contacts.find(option => {
        return option.name === name;
      })
    ) {
      return alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact({ name, number }));
    }
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Label>
        <TextField
          variant="outlined"
          label = "Name"
          type="text"
          name="name"
          onChange={handleChange}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        <TextField
          variant="outlined"
          label = "Number"
          type="tel"
          name="number"
          onChange={handleChange}
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit" variant='contained'>Add contact</Button>
    </form>
  );
}
