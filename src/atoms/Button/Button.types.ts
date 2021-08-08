type ButtonSize = 'small' | 'large';
type ButtonVariant = 'primary' | 'secondary' | 'text';

export type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  disabled?: boolean;
  loading?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
};
