import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  forwardRef,
} from 'react';
import { input, inputContainer } from './input.css';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  label: string;
  dataLabel?: string;
}
type InputRef = ComponentPropsWithRef<'input'>['ref'];

const Input = forwardRef(
  ({ label, dataLabel, ...props }: InputProps, ref: InputRef) => {
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
  }
);

export default Input;
