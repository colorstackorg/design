type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

export type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  disabled?: boolean;
  loading?: boolean;
  variant?: ButtonVariant;
};
