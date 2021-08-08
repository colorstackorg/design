import React, { useEffect, useRef } from 'react';

import { cx } from '@emotion/css';
import useBreakpoint from '../../hooks/useBreakpoint';
import Utils from '../../utils/Utils';
import { useForm } from './Form.state';
import { FormItemProps } from './Form.types';
import FormUtils from './Form.utils';
import { createFormFieldStore, FormFieldProvider } from './FormField.state';
import FormFieldErrorMessage from './FormFieldErrorMessage';
import FormFieldLabel from './FormFieldLabel';

export type FormFieldProps = React.HTMLProps<HTMLDivElement> &
  Partial<FormItemProps>;

const FormFieldContent: React.FC<FormFieldProps> = ({
  children,
  className: otherClassName,
  label,
  name,
  required,
  validation,
  value: controlledValue
}) => {
  const initializeField = useForm((state) => state.initializeField);
  const setValue = useForm((state) => state.setValue);
  const textVariant = useForm((state) => state.options?.textVariant);

  const breakpoint: number = useBreakpoint();
  const ref: React.MutableRefObject<HTMLDivElement> = useRef(null);

  const marginLeft: string = FormUtils.getLabelMarginLeft(
    breakpoint,
    textVariant
  );

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

  // Updates the marginLeft of the child element in order to ensure that it is
  // left-aligned with the label's question (not the arrow, if present).
  useEffect(() => {
    const childElement = ref?.current?.children?.[1] as HTMLElement;

    // If there is no child element yet (that comes from props), we're done.
    if (!childElement) return;

    // If found, update the marginLeft to align the label and the child.
    childElement.style.marginLeft = marginLeft;
  }, [breakpoint, marginLeft, ref]);

  const className: string = cx(otherClassName);

  return (
    <div className={className} ref={ref}>
      <FormFieldLabel />
      {children}
      <FormFieldErrorMessage />
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
