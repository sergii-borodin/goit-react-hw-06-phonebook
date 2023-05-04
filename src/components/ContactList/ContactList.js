import React from 'react';
import Contact from './Contact/Contact';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ContactListContainer, ContactItem } from './ContactList.styled';
import { getContactsList, getFilter } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContactsList);
  const filterValue = useSelector(getFilter);

  const filteredContactsList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue)
  );
  return (
    <ContactListContainer>
      {filteredContactsList.map(contact => (
        <ContactItem key={contact.id}>
          <Contact contact={contact} />
        </ContactItem>
      ))}
    </ContactListContainer>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};

export default ContactList;
