import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  forwardRef,
} from 'react';
import { textarea, textareaContainer } from './textarea.css';

interface TextareaProps extends ComponentPropsWithoutRef<'textarea'> {
  label: string;
}
type TextareaRef = ComponentPropsWithRef<'textarea'>['ref'];

const Textarea = forwardRef(
  ({ label, ...props }: TextareaProps, ref: TextareaRef) => {
    return (
      <label className={textareaContainer}>
        <span>{label}</span>
        <textarea className={textarea} ref={ref} {...props} />
      </label>
    );
  }
);

export default Textarea;
