/* eslint-disable react/jsx-props-no-spreading */
import React, { InputHTMLAttributes, useRef, useEffect } from 'react';

import { useField } from '@unform/core';

import { Container } from '../styles';

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
  info?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ name, label, info, ...rest }) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
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
      <label htmlFor={name}>
        {label}
        <span>{info}</span>
      </label>
      <textarea
        ref={inputRef}
        defaultValue={defaultValue}
        name={name}
        id={name}
        {...rest}
      />
    </Container>
  );
};

export default TextArea;
