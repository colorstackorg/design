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
  value: controlledValue
}) => {
  const initializeField = useForm((state) => state.initializeField);
  const setValue = useForm((state) => state.setValue);

  const ref: React.MutableRefObject<HTMLDivElement> = useRef(null);

  const controlled: boolean = Utils.isDefined(controlledValue);

  useEffect(() => {
    initializeField(name, {
      controlled,
      label,
      required,
      validation
    });
  }, [controlled, initializeField, name, label, required, validation]);

  useEffect(() => {
    // If the name is there and the value is being controlled by another
    // piece of state (outside of the Form state), then set the value in the
    // Form state (effectively "syncs") the state.
    if (name && controlled) setValue(name, controlledValue);
  }, [controlled, controlledValue, name, setValue]);

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
