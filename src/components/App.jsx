import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Component } from 'react';
import { Container, Title } from './App.styled';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    if (contacts) {
      this.setState({ contacts: JSON.parse(contacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  contactCreate = contact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  removeContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const normalizedContacts = this.state.filter.toLowerCase();

    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedContacts)
    );

    const { contacts, filter } = this.state;
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.contactCreate} contacts={contacts} />
        <ToastContainer
          position="top-left"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          rtl={false}
          theme={'dark'}
        />
        <Title>Contacts</Title>
        <Filter value={filter} onChange={this.handleFilterChange} />
        <ContactList data={filteredContacts} onClick={this.removeContact} />
      </Container>
    );
  }
}
