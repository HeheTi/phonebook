import React from 'react';
import PropTypes from 'prop-types';
import { FilterInput } from './Filter.styled';

const Filter = props => {
  const { value, onChange } = props;
  return <FilterInput type="text" value={value} onChange={onChange} />;
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
