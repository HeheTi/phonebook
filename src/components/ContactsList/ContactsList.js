import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem/ListItem';

const ContactsList = ({ contacts = [], delContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ListItem
          key={id}
          userName={name}
          userNumber={number}
          onClickBtn={() => delContact(id)}
        />
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  delContact: PropTypes.func.isRequired,
};

export default ContactsList;
