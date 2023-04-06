import css from '../Form/Form.module.css';
import { Component } from 'react';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  sendNewContact = e => {
    e.preventDefault();
    const { name, number } = e.target.elements;

    this.props.onSubmit(this.state);

    this.setState(
      {
        name: '',
        number: '',
      },
      () => {
        name.value = '';
        number.value = '';
      }
    );
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <form action="" onSubmit={this.sendNewContact} className={css.form}>
        <h1 className={css.name}>Name</h1>
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleChange}
        />

        <h2 className={css.number}>Number</h2>
        <input
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.handleChange}
        />

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
