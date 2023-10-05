import cx from 'classnames';

import { Column } from '../../constants';

import { th } from './table.css';

interface TableHeaderProps {
  columns: Column[];
  className?: string;
}

const TableHeader = ({ columns, className }: TableHeaderProps) => {
  return (
    <thead>
      <tr>
        {columns.map((col) => (
          <th key={col.id} className={cx(th[col.align ?? 'left'], className)}>
            {col.name}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
