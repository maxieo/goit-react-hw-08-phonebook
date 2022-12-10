import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { ContactName } from './ContactItem.styled';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <li>
        <ContactName>
          <Stack direction="row" alignItems="center" spacing={1}>
          {contact.name}: {contact.number}
            <IconButton
              aria-label="delete"
              size="small"
              variant="contained"
              type="button"
              onClick={() => onDelete(contact.id)}
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </Stack>
        </ContactName>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default ContactItem;
