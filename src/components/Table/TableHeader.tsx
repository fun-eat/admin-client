import { Column } from '../../constants';
import { th } from './table.css';

interface TableHeaderProps {
  columns: Column[];
}

const TableHeader = ({ columns }: TableHeaderProps) => {
  return (
    <thead>
      <tr>
        {columns.map((col) => (
          <th key={col.id} className={th[col.align ?? 'left']}>
            {col.name}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
