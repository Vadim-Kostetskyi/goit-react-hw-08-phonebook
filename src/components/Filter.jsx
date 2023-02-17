import { useDispatch } from 'react-redux';
import { filter } from 'redux/Slise';
import { useEffect, useState } from 'react';

const Filter = () => {
  const [filterName, setFilterName] = useState('');

  const dispach = useDispatch();
  useEffect(() => {
    dispach(filter(filterName));
    // eslint-disable-next-line
  }, [filterName]);

  const changeFilter = el => {
    setFilterName(el.target.value);
  };

  return <input type="text" onChange={changeFilter} />;
};

export default Filter;
