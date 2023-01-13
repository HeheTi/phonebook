import { AccountCircle } from '@mui/icons-material';
import { FormControl, Input, InputAdornment, InputLabel } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filter/filterActions';
import { selectFilter } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <FormControl
      color="secondary"
      sx={{ width: '100%', marginBottom: '30px' }}
      variant="standard"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      value={filter}
      onChange={e => dispatch(changeFilter(e.target.value))}
    >
      <InputLabel
        htmlFor="input-with-icon-adornment"
        sx={{ width: 400, fontSize: 22 }}
      >
        Search in the contact list by name
      </InputLabel>
      <Input
        id="input-with-icon-adornment"
        startAdornment={
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default Filter;
