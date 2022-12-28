import PropTypes from 'prop-types';
import { FilterInput } from './Filter.styled';

const Filter = ({ value, onChange }) => (
  <FilterInput
    type="text"
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    required
    value={value}
    onChange={onChange}
  />
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  clearFilter: PropTypes.func.isRequired,
};

export default Filter;
