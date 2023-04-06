import { Section } from 'components/Section/Section';
import { Form } from 'components/Form/Form';
import { Contscts } from 'components/Contacts/Contacts';

import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmit = ({ name, number }) => {
    const checkedName = this.state.contacts.find(elem => {
      return elem.name === name;
    });

    if (checkedName) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => {
      const ContactsAll = [...prevState.contacts];
      ContactsAll.push(newContact);
      return {
        name,
        number,
        contacts: [...ContactsAll],
      };
    });
  };

  deleteItem = id => {
    this.setState(({ contacts }) => {
      const newContacts = [...contacts];
      const index = newContacts.findIndex(elem => elem.id === id);
      newContacts.splice(index, 1);
      return {
        contacts: [...newContacts],
      };
    });
  };

  onFilterSearch = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  render() {
    const { filter, contacts } = this.state;

    const normaliseFilter = filter.toLowerCase();
    const filteredSearch = contacts.filter(elem =>
      elem.name.toLowerCase().includes(normaliseFilter)
    );
    return (
      <div>
        <Section title="Phonebook" />
        <Form onSubmit={this.formSubmit} />
        <Contscts
          contacts={filteredSearch}
          onSearch={this.onSearchType}
          filter={this.filter}
          onFilter={this.onFilterSearch}
          deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}
