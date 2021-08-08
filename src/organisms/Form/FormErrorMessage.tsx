import React from 'react';

import { cx } from '@emotion/css';
import Text from '../../atoms/Text';
import { TextProps } from '../../atoms/Text/Text.types';
import { useForm } from './Form.state';

const FormErrorMessage: React.FC<TextProps> = ({
  className: otherClassName,
  ...props
}) => {
  const error: string = useForm((state) => state.error);

  // Don't show error message if there is none...
  if (!error) return null;

  const className: string = cx(otherClassName);

  return (
    <Text className={className} color="error" variant="body" {...props}>
      {error}
    </Text>
  );
};

export default FormErrorMessage;
