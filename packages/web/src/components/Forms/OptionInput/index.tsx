import React, {
  InputHTMLAttributes, useRef, useEffect, useState,
} from 'react';

import { useField } from '@unform/core';

import { Container, ButtonSelect } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  prefix?: string;
  active?: boolean;
  setActive?: () => {};
}

const OptionInput: React.FC<InputProps> = ({
  name,
  label,
  prefix,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    fieldName, defaultValue, error, registerField,
  } = useField(name);

  const [active, setActive] = useState(true);

  const setValueInput = (value : boolean) => {
    inputRef.current.value = String(value);
    setActive(value);
  };

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <input type="hidden" ref={inputRef} value={String(active)} />

      <ButtonSelect>
        <button
          type="button"
          className={active ? 'active' : ''}
          onClick={() => setValueInput(true)}
        >
          Sim
        </button>
        <button
          type="button"
          className={!active ? 'active' : ''}
          onClick={() => setValueInput(false)}
        >
          Não
        </button>
      </ButtonSelect>
    </Container>
  );
};

export default OptionInput;
