import { useDispatch, useSelector } from 'react-redux';
import { setFilterValue } from '../../redux/Phonebook/contactSlice';
import { getFilter } from '../../redux/Phonebook/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChange = e => {
    const filterValue = e.target.value;
    dispatch(setFilterValue(filterValue));
  };

  return (
    <label>
      Find contacts by name
      <input type="text" onChange={onChange} value={filter} />
    </label>
  );
};
