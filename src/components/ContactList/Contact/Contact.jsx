import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { PlainText, Button } from './Contact.styled';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <>
      <PlainText>{contact.name}</PlainText>
      <PlainText>{contact.number}</PlainText>
      <Button onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </Button>
    </>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    number: PropTypes.string,
  }),
};

export default Contact;
