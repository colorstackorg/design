export type InputVariant = 'body-web' | 'subtitle';

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  error?: boolean; // True if there is an error.
  fill?: boolean; // True if the input should fill 100% the container.
  onChange: (value: string) => void; // Simplified onChange without event.
  variant?: InputVariant;
  value: string; // Make this required! AKA has to be controlled.
};
