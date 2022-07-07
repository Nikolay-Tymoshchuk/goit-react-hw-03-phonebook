import PropTypes from 'prop-types';
import { Icon, ContactItem, DeleteButton } from './Contact.styled';

export const Contact = ({ id, name, number, onClick }) => {
  return (
    <ContactItem id={id}>
      <Icon />
      <span>{name}:</span>
      <span>{number}</span>
      <DeleteButton type="button" onClick={() => onClick(id)}>
        Delete
      </DeleteButton>
    </ContactItem>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
