import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/actions';
import { selectFilter } from 'redux/selectors';
import { FilterInput } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <FilterInput
      type="text"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      value={filter}
      onChange={e => dispatch(changeFilter(e.target.value))}
    />
  );
};

export default Filter;
