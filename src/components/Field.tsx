import React, { useState } from 'react';
import { Preset } from '../types/Preset';
import Table from './Table';

type Props = {
  presets: Preset[];
  onCellHover: (cell: number[]) => void;
};

const Field: React.FC<Props> = ({ presets, onCellHover }) => {
  const [fields, setFields] = useState<number[]>([]);
  const [isCounstructed, setIsCounstructed] = useState(false);

  const handlePresetSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIsCounstructed(false);
    onCellHover([]);
    setFields([...Array(+e.target.value).keys()]);
  };

  const handleCellHover = (e: React.MouseEvent<HTMLTableCellElement>) => {
    const target = e.target as HTMLTableCellElement;
    const parent = target.parentNode as HTMLTableRowElement;

    target.classList.toggle('bg-blue-500');

    const rowIndex = parent.rowIndex + 1;
    const colIndex = target.cellIndex + 1;

    onCellHover([rowIndex, colIndex]);
  };

  return (
    <div>
      <div className='space-x-4'>
        <select
          defaultValue={''}
          onChange={handlePresetSelect}
          name='preset'
          id='preset'
          className='border h-8 pr-5 pl-1 outline-none mb-4 cursor-pointer'
        >
          <option value='' disabled>
            Pick mode
          </option>
          {presets.map((p) => (
            <option key={p.id} value={p.field}>
              {p.name}
            </option>
          ))}
        </select>

        <button onClick={() => setIsCounstructed(true)} className='h-8 bg-blue-500 px-2 text-white rounded-md uppercase hover:shadow-md'>Start</button>
      </div>

      {isCounstructed && <Table fields={fields} onCellHover={handleCellHover} />}
    </div>
  );
};

export default Field;
