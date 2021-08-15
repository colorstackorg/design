import React from 'react';

import Input from '../../atoms/Input';
import { InputVariant } from '../../atoms/Input/Input.types';
import { useForm } from './Form.state';
import { FormItemProps } from './Form.types';
import FormField from './FormField';
import { useFormField } from './FormField.state';

type FormShortTextProps = {
  placeholder?: string;
  onChange?: (value: string) => void;
};

const FormShortTextContent: React.FC<FormShortTextProps> = ({
  onChange,
  placeholder
}) => {
  const setValue = useForm((state) => state.setValue);

  const error: string = useFormField((state) => state.error);
  const name: string = useFormField((state) => state.name);
  const value: string = useFormField((state) => state.value);

  const textVariant: InputVariant = useForm((state) => {
    return state.options?.textVariant;
  });

  const onInputChange = (updatedValue: string): void => {
    if (onChange) onChange(updatedValue);
    setValue(name, updatedValue);
  };

  return (
    <Input
      error={!!error}
      variant={textVariant}
      onChange={onInputChange}
      placeholder={placeholder}
      value={value ?? ''}
    />
  );
};

const FormShortText: React.FC<FormItemProps & FormShortTextProps> = ({
  className: otherClassName,
  onChange,
  placeholder,
  ...item
}) => {
  return (
    <FormField className={otherClassName} {...item}>
      <FormShortTextContent placeholder={placeholder} onChange={onChange} />
    </FormField>
  );
};

export default FormShortText;
