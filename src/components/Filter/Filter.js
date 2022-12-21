import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FilterInput } from './Filter.styled';

export class Filter extends Component {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    clearFilter: PropTypes.func.isRequired,
  };

  componentWillUnmount() {
    this.props.clearFilter();
  }

  render() {
    const { value, onChange } = this.props;
    return <FilterInput type="text" value={value} onChange={onChange} />;
  }
}

export default Filter;
