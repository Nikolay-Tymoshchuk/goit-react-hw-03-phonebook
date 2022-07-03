import PropTypes from 'prop-types';
import { List, Icon, ContactItem, DeleteButton } from './ContactList.styled';
export const ContactList = ({ data, onClick }) => {
  return (
    <List>
      {data.map(contact => (
        <ContactItem key={contact.id} id={contact.id}>
          <Icon />
          <span>{contact.name}:</span>
          <span>{contact.number}</span>
          <DeleteButton type="button" onClick={onClick}>
            Delete
          </DeleteButton>
        </ContactItem>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
