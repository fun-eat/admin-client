import { ReactElement } from 'react';

import { table } from './table.css';

interface TableProps {
  children: ReactElement[];
}

const Table = ({ children }: TableProps) => {
  return <table className={table}>{children}</table>;
};

export default Table;
