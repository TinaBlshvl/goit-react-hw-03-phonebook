import css from '../Section/Section.module.css';
import PropTypes from 'prop-types';

export const Section = ({ title }) => {
  return (
    <section className={css.container}>
      <h1 className={css.title}>{title}</h1>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  // children: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
