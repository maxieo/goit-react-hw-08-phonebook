import { useDispatch, useSelector } from 'react-redux';
import { setFilterValue } from '../../redux/contacts/contactSlice';
import { getFilter } from '../../redux/contacts/selectors';
import { FilterLabel } from './Filter.styled';
import TextField from '@mui/material/TextField';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChange = e => {
    const filterValue = e.target.value;
    dispatch(setFilterValue(filterValue));
  };

  return (
    <FilterLabel>
      <TextField
        id="outlined-basic"
        label="Find contacts by name"
        type="text"
        onChange={onChange}
        value={filter}
      />
    </FilterLabel>
  );
};
