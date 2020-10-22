import React, {
  ChangeEvent,
  useRef,
  useEffect,
  useCallback,
  useState,
} from 'react';
import { FiPlus } from 'react-icons/fi';

import { useField } from '@unform/core';

import { Container, ImagesContainer } from './styles';

interface Props {
  label: string;
  name: string;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const ImagesInput: React.FC<InputProps> = ({
  name,
  label,
  ...rest
}) => {
  const inputImageRef = useRef<HTMLInputElement>(null);
  const {
    fieldName, defaultValue, error, registerField,
  } = useField(name);

  const [preview, setPreview] = useState(defaultValue);

  const handlePreview = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) {
      setPreview(null);
    }
    const selectedImages = Array.from(files);
    const previewURL = selectedImages.map((image) => URL.createObjectURL(image));

    setPreview(previewURL);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputImageRef.current,
      path: 'files',
      clearValue(ref: HTMLInputElement) {
        ref.value = '';
        setPreview(null);
      },
      setValue(_: HTMLInputElement, value: string) {
        setPreview(value);
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>

      <label htmlFor={name}>{label}</label>

      <ImagesContainer>
        {preview && preview.map((image : string) => (
          <img key={image} src={image} alt={image} />
        ))}

        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label className="new-image" htmlFor={name}>
          <FiPlus size={24} color="#15b6d6" />
        </label>

        <input
          multiple
          onChange={handlePreview}
          type="file"
          ref={inputImageRef}
          id={name}
        />
      </ImagesContainer>
    </Container>

  );
};

export default ImagesInput;
