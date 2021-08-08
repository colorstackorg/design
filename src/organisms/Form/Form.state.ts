import createStore, { UseStore } from 'zustand';
import createContextStore from 'zustand/context';

import { FormItem, FormOptions, FormState, FormStaticItem } from './Form.types';
import FormUtils from './Form.utils';

const defaultFormOptions: FormOptions = {
  textVariant: 'body-web'
};

export const createFormStore = (options: FormOptions): UseStore<FormState> => {
  const store: UseStore<FormState> = createStore<FormState>((set, get) => {
    /**
     * Updates the item with the given name with all of the new properties given
     * to initializeField.
     *
     * ```js
     * initializeField('email', {
     *  required: true,
     *  validation: 'email'
     * })
     * ```
     */
    const initializeField = (
      name: FormItem['name'],
      item: Omit<FormStaticItem, 'name'>
    ) => {
      const { items } = get();
      items[name] = { ...items[name], ...item, name };
      set({ items });
    };

    /**
     * Updates the item with the given name with a new "value" property.
     *
     * ```js
     * setValue('email', 'rami@overflow.co');
     * ```
     */
    const setValue = (
      name: FormItem['name'],
      value: FormItem['value']
    ): void => {
      const { items } = get();

      // If the item didn't have a value previously, it was "clean" (not "dirty"),
      // and now there is a non-empty value, the item is now "dirty".
      if (!items[name].dirty && !items[name].value && value) {
        items[name].dirty = true;
      }

      items[name].value = value;

      // If the item's value is dirty, then we should validate it and get the
      // appropriate error message, if any. If the user hasn't update the value
      // yet, then don't set an error.
      if (items[name].dirty) {
        const error: string = FormUtils.validateFormField(items[name]);
        items[name].error = error;
      }

      set({ items });
    };

    /**
     * Returns true if the form is valid, and returns false otherwise. This
     * iterates through all of the form items, and if there is an item that
     * produces a validation error, we store that error message on the item.
     */
    const validateForm = (): boolean => {
      const { items } = get();

      // Tracks whether or not there were any errors at all.
      let hasError = false;

      Object.values(items).forEach((item: FormItem) => {
        // Get the error message based on the current value of the form item,
        // if any at all.
        const error: string = FormUtils.validateFormField(item);

        // Store that error message in the form item itself.
        items[item.name].error = error;

        // If there was an error, let's keep track of that so we can set an
        // error message on the entire form (not just this specific item).
        if (error && !hasError) hasError = true;
      });

      set({
        error: hasError ? 'Please fix the errors and try again.' : null,
        items
      });

      return !hasError;
    };

    return {
      error: '',
      initializeField,
      items: {},
      loading: false,
      options: { ...defaultFormOptions, ...options },
      set,
      setValue,
      validateForm
    };
  });

  return store;
};

export const {
  Provider: FormProvider,
  useStore: useForm,
  useStoreApi: useFormAPI
} = createContextStore<FormState>();
