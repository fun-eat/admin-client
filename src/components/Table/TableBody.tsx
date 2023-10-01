import { td } from './table.css';

const A = [
  1,
  '포카칩 포카칩 포카칩 포카칩 포카칩',
  '생감자를 튀긴 바삭한 감자칩 생감자를 튀긴 바삭한 감자칩생감자를 튀긴 바삭한 감자칩',
  1500,
  '과자',
];
const B = [
  1,
  '포카칩',
  '생감자를 튀긴 바삭한 감자칩 생감자를 튀긴 바삭한 감자칩생감자를 튀긴 바삭한 감자칩',
  1500,
  '과자',
];

const TableBody = () => {
  return (
    <tbody>
      <tr>
        {A.map((a) => (
          <td className={td['left']}>{a}</td>
        ))}
        <td className={td['center']}>
          <button type='button'>상세</button>
        </td>
      </tr>
      <tr>
        {B.map((a) => (
          <td className={td['left']}>{a}</td>
        ))}
        <td className={td['center']}>
          <button type='button'>상세</button>
        </td>
      </tr>
      <tr>
        {B.map((a) => (
          <td className={td['left']}>{a}</td>
        ))}
        <td className={td['center']}>
          <button type='button'>상세</button>
        </td>
      </tr>
      <tr>
        {B.map((a) => (
          <td className={td['left']}>{a}</td>
        ))}
        <td className={td['center']}>
          <button type='button'>상세</button>
        </td>
      </tr>
      <tr>
        {B.map((a) => (
          <td className={td['left']}>{a}</td>
        ))}
        <td className={td['center']}>
          <button type='button'>상세</button>
        </td>
      </tr>
      <tr>
        {B.map((a) => (
          <td className={td['left']}>{a}</td>
        ))}
        <td className={td['center']}>
          <button type='button'>상세</button>
        </td>
      </tr>
      <tr>
        {B.map((a) => (
          <td className={td['left']}>{a}</td>
        ))}
        <td className={td['center']}>
          <button type='button'>상세</button>
        </td>
      </tr>
    </tbody>
  );
};

export default TableBody;
