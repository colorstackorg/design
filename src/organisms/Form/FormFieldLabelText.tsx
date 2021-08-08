import React from 'react';

import { InputVariant } from '../../atoms/Input/Input.types';
import Text from '../../atoms/Text/Text';
import { useForm } from './Form.state';

const FormFieldLabelText: React.FC = ({ children }) => {
  const textVariant: InputVariant = useForm((state) => {
    return state.options?.textVariant;
  });

  return <Text variant={textVariant}>{children}</Text>;
};

export default FormFieldLabelText;
