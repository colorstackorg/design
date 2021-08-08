import React from 'react';

import { css } from '@emotion/css';
import Text from '../../atoms/Text/index';
import { Size } from '../../utils/constants';
import { useFormField } from './FormField.state';

const FormFieldErrorMessage: React.FC = () => {
  const error: string = useFormField((state) => state.error);

  // Don't show error message if there is none...
  if (!error) return null;

  const className: string = css({
    marginTop: Size.SS
  });

  return (
    <Text className={className} color="error">
      {error}
    </Text>
  );
};

export default FormFieldErrorMessage;
