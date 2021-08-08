import React from 'react';

import { css, cx } from '@emotion/css';
import { InputVariant } from '../../atoms/Input/Input.types';
import Text from '../../atoms/Text';
import { Color, Size } from '../../utils/constants';
import { useForm } from './Form.state';
import { useFormField } from './FormField.state';

type FormFieldLabelProps = React.HTMLProps<HTMLDivElement>;

const FormFieldLabel: React.FC<FormFieldLabelProps> = ({
  className: otherClassName
}) => {
  const textVariant: InputVariant = useForm((state) => {
    return state.options?.textVariant;
  });

  const error: boolean = useFormField((state) => !!state.error);
  const label: string = useFormField((state) => state.label);

  // If there is no label, then don't show the label. This would be the case
  // for example when an input only has a placeholder but nothing else.
  if (!label) return null;

  const baseClassName: string = css({
    display: 'flex',
    marginBottom: Size.XS
  });

  const errorClassName: string = css({
    '> *': { color: Color.ERROR },
    color: Color.ERROR
  });

  const className: string = cx(
    baseClassName,
    { [errorClassName]: error },
    otherClassName
  );

  return (
    <Text as="label" className={className} variant={textVariant}>
      {label}
    </Text>
  );
};

export default FormFieldLabel;
