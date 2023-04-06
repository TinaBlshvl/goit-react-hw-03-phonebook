import css from '../Contacts/Contacts.module.css';
import PropTypes from 'prop-types';

export const Contscts = ({ filter, onFilter, contacts, deleteItem }) => {
  return (
    <section className={css.section}>
      <h1 className={css.title}>Contacts</h1>
      <section className={css.formSection}>
        <form action="">
          <h2 className={css.header}>Find contacts by the name</h2>
          <input
            type="text"
            name="filter"
            value={filter}
            onChange={onFilter}
            className={css.input}
          />
        </form>

        <section>
          <ul>
            {contacts.map(contact => (
              <li key={contact.id} className={css.item}>
                <p className={css.contact}>
                  {contact.name}: {contact.number}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    deleteItem(contact.id);
                  }}
                  className={css.btn}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </section>
  );
};

Contscts.propTypes = {
  // filter: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  deleteItem: PropTypes.func.isRequired,
};
