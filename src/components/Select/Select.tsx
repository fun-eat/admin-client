import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  forwardRef,
} from 'react';

import { select, selectContainer } from './select.css';

interface SelectProps extends ComponentPropsWithoutRef<'select'> {
  label: string;
}
type SelectRef = ComponentPropsWithRef<'select'>['ref'];

const Select = forwardRef(
  ({ label, children, ...props }: SelectProps, ref: SelectRef) => {
    return (
      <label className={selectContainer}>
        <span>{label}</span>
        <select className={select} ref={ref} {...props}>
          <option value=''>{label}을/를 선택하세요</option>
          {children}
        </select>
      </label>
    );
  }
);

export default Select;
