import { ComponentPropsWithRef, forwardRef } from 'react';
import { input, inputContainer } from './input.css';

interface InputProps extends ComponentPropsWithRef<'input'> {
  label: string;
  dataLabel?: string;
}

const Input = forwardRef(({ label, dataLabel, ref, ...props }: InputProps) => {
  return (
    <label className={inputContainer}>
      <span>{label}</span>
      <input
        type='text'
        className={input}
        data-label={dataLabel}
        {...props}
        ref={ref}
      />
    </label>
  );
});

export default Input;
