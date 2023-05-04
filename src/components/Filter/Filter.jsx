import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onFilterChange } from 'redux/filterSlice';
import { Input } from './Filter.styled';

const Filter = () => {
  const filterValue = useSelector(state => state.filter);
  console.log(filterValue);
  const dispatch = useDispatch();

  return (
    <div>
      <Input
        type="text"
        name="name"
        value={filterValue}
        onChange={e => dispatch(onFilterChange(e.currentTarget.value))}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        placeholder="search name"
        required
      />
    </div>
  );
};

export default Filter;
