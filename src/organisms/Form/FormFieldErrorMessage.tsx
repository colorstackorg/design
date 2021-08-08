import React from 'react';

import { css } from '@emotion/css';
import Text from '../../atoms/Text/index';
import useBreakpoint from '../../hooks/useBreakpoint';
import { Size } from '../../utils/constants';
import { useForm } from './Form.state';
import FormUtils from './Form.utils';
import { useFormField } from './FormField.state';

const FormFieldErrorMessage: React.FC = () => {
  const breakpoint: number = useBreakpoint();
  const textVariant = useForm((state) => state.options?.textVariant);
  const error: string = useFormField((state) => state.error);

  // Don't show error message if there is none...
  if (!error) return null;

  const marginLeftStyle: string = FormUtils.getLabelMarginLeft(
    breakpoint,
    textVariant
  );

  const className: string = css({
    marginLeft: marginLeftStyle,
    marginTop: Size.SS
  });

  return (
    <Text className={className} color="red">
      {error}
    </Text>
  );
};

export default FormFieldErrorMessage;
