import { ReactElement } from 'react';

interface TableBodyProps {
  children: ReactElement | ReactElement[];
}

const TableBody = ({ children }: TableBodyProps) => {
  return <tbody>{children}</tbody>;
};

export default TableBody;
