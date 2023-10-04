import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  forwardRef,
} from 'react';
import { textarea, textareaContainer } from './textarea.css';

interface TextareaProps extends ComponentPropsWithoutRef<'textarea'> {
  label: string;
  dataLabel?: string;
}
type TextareaRef = ComponentPropsWithRef<'textarea'>['ref'];

const Textarea = forwardRef(
  ({ label, dataLabel, ...props }: TextareaProps, ref: TextareaRef) => {
    return (
      <label className={textareaContainer}>
        <span>{label}</span>
        <textarea
          className={textarea}
          data-label={dataLabel}
          ref={ref}
          {...props}
        />
      </label>
    );
  }
);

export default Textarea;
