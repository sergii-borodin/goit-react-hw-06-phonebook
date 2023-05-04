import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { PlainText, Button } from './Contact.styled';

const Contact = ({ contact }) => {
  const { name, number, id } = contact;
  const dispatch = useDispatch();
  return (
    <>
      <PlainText>{name}</PlainText>
      <PlainText>{number}</PlainText>
      <Button onClick={() => dispatch(deleteContact(id))}>Delete</Button>
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
