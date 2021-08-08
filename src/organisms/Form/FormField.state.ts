import create, { StateSelector, UseStore } from 'zustand';
import createContextStore from 'zustand/context';

import { useForm } from './Form.state';
import { FormItem, FormItemState } from './Form.types';

const { Provider: FormFieldProvider, useStore: useFormFieldInitial } =
  createContextStore<FormItemState>();

const createFormFieldStore = (name: string): UseStore<FormItemState> => {
  return create<FormItemState>((set) => {
    const state: FormItemState = {
      name,
      set
    };

    return state;
  });
};

function useFormField<U>(selector: StateSelector<FormItem, U>): U {
  const name: string = useFormFieldInitial((state) => state.name);

  return useForm((state) => {
    const item: FormItem = state.items[name];
    return item ? selector(item) : null;
  });
}

export { createFormFieldStore, FormFieldProvider, useFormField };
