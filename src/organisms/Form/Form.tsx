import React from 'react';

import {
  createFormStore,
  FormProvider,
  useForm,
  useFormAPI
} from './Form.state';
import { FormOptions, FormState } from './Form.types';

export type FormProps = Omit<React.HTMLProps<HTMLFormElement>, 'onSubmit'> & {
  options?: FormOptions;
  onSubmit: (state: FormState) => void | Promise<void>;
};

const FormContent: React.FC<FormProps> = ({ children, onSubmit, ...props }) => {
  const getFormState = useFormAPI().getState;
  const set = useForm((state) => state.set);
  const validateForm = useForm((state) => state.validateForm);

  /**
   * Modified onSubmit function that performs validation on the form, and only
   * if the form is valid will it run the actual onSubmit function. Also,
   * if an error occurs, this function will set that error in the form state.
   */
  const modifiedOnSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    set({ loading: true });

    try {
      const isFormValid: boolean = validateForm();

      if (isFormValid) {
        // We pass all of the items at runtime to the onSubmit function.
        const state: FormState = getFormState();
        await onSubmit(state);
      }
    } catch (e) {
      set({ error: e.message });
    }

    set({ loading: false });
  };

  return (
    <form onSubmit={modifiedOnSubmit} {...props}>
      {children}
    </form>
  );
};

const Form: React.FC<FormProps> = ({ children, options, ...props }) => {
  return (
    <FormProvider createStore={() => createFormStore(options)}>
      <FormContent {...props}>{children}</FormContent>
    </FormProvider>
  );
};

export default Form;
