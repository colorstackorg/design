import { SetState } from 'zustand';

import { InputVariant } from '../../atoms/Input/Input.types';

type FormItemValidation = 'email' | 'url';

// Represents all of the static properties that don't change throughout the
// lifecycle of the form item. They are only defined once at runtime.
export type FormStaticItem = {
  controlled?: boolean; // True if another state is controlling the item value.
  label?: string; // Label/question for each form item.
  name: string; // Unique identifier of the form item.
  placeholder?: string;
  required: boolean;
  validation?: FormItemValidation | false;
};

export type FormItem = FormStaticItem & {
  dirty?: boolean; // True if the item became a non-empty value at any point.
  error?: string; // Message corresponding to the individual form item.
  value: string;
};

export type FormItemProps = Pick<
  FormItem,
  'label' | 'name' | 'placeholder' | 'required' | 'validation'
> & {
  className?: string;
  hideError?: boolean;
  value?: string;
};

export type FormItemState = Pick<FormItem, 'name'> & {
  set: Omit<SetState<FormItemState>, 'set'>;
};

export type FormOptions = {
  textVariant: InputVariant;
};

export type FormState<T = Record<string, unknown>> = {
  error: string;
  items: Record<keyof T, FormItem>;
  loading: boolean;
  options: FormOptions;
  initializeField: (
    name: FormItem['name'],
    item: Omit<FormStaticItem, 'name'>
  ) => void;
  set: SetState<Omit<FormState<T>, 'set'>>;
  setValue: (name: FormItem['name'], value: FormItem['value']) => void;
  validateForm: () => boolean;
};
