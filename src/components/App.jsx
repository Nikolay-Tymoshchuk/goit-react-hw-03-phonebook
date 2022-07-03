import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Component } from 'react';
import { Container, Title } from './App.styled';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

Notify.init({ clickToClose: true, position: 'center-top' });

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  contactCreate = contact => {
    const { contacts } = this.state;
    if (
      contacts.find(
        item => item.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      Notify.failure('Contact already exists');
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
    Notify.success('Contact successfully added');
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  removeContact = e => {
    const id = e.target.closest('li').id;
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

        <Title>Contacts</Title>
        <Filter value={filter} onChange={this.handleFilterChange} />
        <ContactList data={filteredContacts} onClick={this.removeContact} />
      </Container>
    );
  }
}
