interface ColgroupProps {
  widths: number[];
}

const Colgroup = ({ widths }: ColgroupProps) => {
  return (
    <colgroup>
      {widths.map((width, index) => (
        <col key={`col-${index}`} width={`${width}%`} />
      ))}
    </colgroup>
  );
};

export default Colgroup;
