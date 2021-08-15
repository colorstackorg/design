import React, { useEffect, useRef } from 'react';

import { cx } from '@emotion/css';
import Utils from '../../utils/Utils';
import { useForm } from './Form.state';
import { FormItemProps } from './Form.types';
import { createFormFieldStore, FormFieldProvider } from './FormField.state';
import FormFieldErrorMessage from './FormFieldErrorMessage';
import FormFieldLabel from './FormFieldLabel';

export type FormFieldProps = React.HTMLProps<HTMLDivElement> &
  Partial<FormItemProps>;

const FormFieldContent: React.FC<FormFieldProps> = ({
  children,
  className: otherClassName,
  hideError = false,
  label,
  name,
  required,
  validation,
  value
}) => {
  const initializeField = useForm((state) => state.initializeField);
  const setValue = useForm((state) => state.setValue);

  const ref: React.MutableRefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    initializeField(name, {
      label,
      required,
      validation
    });
  }, [initializeField, name, label, required, validation]);

  useEffect(() => {
    // If the name is there and there is a value provided, then update the
    // form's state with that value whenever it changes.
    if (name) setValue(name, value);
  }, [name, setValue, value]);

  const className: string = cx(otherClassName);

  return (
    <div className={className} ref={ref}>
      <FormFieldLabel />
      {children}
      {!hideError && <FormFieldErrorMessage />}
    </div>
  );
};

const FormField: React.FC<FormFieldProps> = ({ children, ...props }) => {
  return (
    <FormFieldProvider createStore={() => createFormFieldStore(props.name)}>
      <FormFieldContent {...props}>{children}</FormFieldContent>
    </FormFieldProvider>
  );
};

export default FormField;
