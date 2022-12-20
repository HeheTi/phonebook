import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Box } from './../../common/Box';
import { Input, LabelInput, ButtonSubmit } from './FormContact.styled';
import { theme } from 'common/theme';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export class FormContact extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = { ...INITIAL_STATE };

  handleChangeState = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmitFormContact = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ ...INITIAL_STATE });
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  render() {
    const { name, number } = this.state;
    return (
      <Box
        as="form"
        p="10px"
        border={theme.borders.normal}
        borderColor={theme.colors.border}
        mb={theme.space[3]}
        onSubmit={this.handleSubmitFormContact}
      >
        <LabelInput htmlFor={this.nameInputId}>Name</LabelInput>
        <Input
          id={this.nameInputId}
          type="text"
          name="name"
          value={name}
          placeholder="Rosie Simpson"
          onChange={this.handleChangeState}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <LabelInput htmlFor={this.numberInputId}>Number</LabelInput>
        <Input
          id={this.numberInputId}
          type="tel"
          name="number"
          value={number}
          placeholder="459-12-56"
          onChange={this.handleChangeState}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <ButtonSubmit type="submit" disabled={!name || !number}>
          Add
        </ButtonSubmit>
      </Box>
    );
  }
}

export default FormContact;
