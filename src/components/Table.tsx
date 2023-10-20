import React from 'react';

type Props = {
  fields: number[];
  onCellHover: (e: React.MouseEvent<HTMLTableCellElement>) => void;
};

const Table: React.FC<Props> = ({ fields, onCellHover }) => {
  return (
    <table>
      <tbody>
        {fields.map((r, i) => (
          <tr key={i}>
            {fields.map((c, i) => (
              <td onMouseOver={onCellHover} key={i} className='w-8 h-8 md:w-10 md:h-10 border border-black'></td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
