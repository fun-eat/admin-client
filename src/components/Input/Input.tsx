import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  forwardRef,
} from 'react';
import { input, inputContainer } from './input.css';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  label: string;
}
type InputRef = ComponentPropsWithRef<'input'>['ref'];

const Input = forwardRef(({ label, ...props }: InputProps, ref: InputRef) => {
  return (
    <label className={inputContainer}>
      <span>{label}</span>
      <input type='text' className={input} ref={ref} {...props} />
    </label>
  );
});

export default Input;
