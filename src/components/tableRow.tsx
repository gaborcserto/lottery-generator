interface RowProps {
  index: number;
  numbers: number[];
}

function TableRow({ index, numbers }: RowProps) {
  return (
      <tr>
        <th>{index + 1}</th>
        {numbers.map((num, cellIndex) => (
            <td key={cellIndex}>{num}</td>
        ))}
      </tr>
  );
}

export default TableRow
