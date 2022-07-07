import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Form, Field, Button } from './ContactForm.styled';

import { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  nameInputIdGenerate = nanoid();
  numberInputIdGenerate = nanoid();

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit, contacts } = this.props;
    const { name } = this.state;
    if (contacts.find(item => item.name.toLowerCase() === name.toLowerCase())) {
      toast.error(`Contact ${name} is already exist`);
      return;
    }
    const id = nanoid();
    onSubmit({ ...this.state, id });
    toast.success(`Contact ${name} has been added`);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputIdGenerate}>Name:</label>
        <Field
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          id={this.nameInputIdGenerate}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor={this.numberInputIdGenerate}>Number:</label>
        <Field
          type="text"
          name="number"
          value={number}
          onChange={this.handleChange}
          id={this.numberInputIdGenerate}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button type="submit">
          <span>add contact</span>
          <i></i>
        </Button>
      </Form>
    );
  }
}

// ContactForm.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onSubmit: PropTypes.func.isRequired,
// };
