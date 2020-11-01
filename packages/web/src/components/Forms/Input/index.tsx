/* eslint-disable react/jsx-props-no-spreading */
import React, { InputHTMLAttributes, useRef, useEffect } from 'react';

import { useField } from '@unform/core';

import { Container } from '../styles';

interface Props {
  name: string;
  label?: string;
  prefix?: string;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const Input: React.FC<InputProps> = ({ name, label, prefix, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      {label && <label htmlFor={fieldName}>{label}</label>}
      {prefix && <p>{prefix}</p>}
      <input
        ref={inputRef}
        defaultValue={defaultValue}
        id={fieldName}
        className={`form-control ${error ? 'is-invalid' : ''}`}
        {...rest}
      />
      {error && <div style={errorMessage}>{error}</div>}
    </Container>
  );
};

const errorMessage = {
  width: '100%',
  marginTop: '0.25rem',
  fontSize: '80%',
  color: '#dc3545',
};

export default Input;
