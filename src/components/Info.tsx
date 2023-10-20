import React from 'react';

type Props = {
  cellsInfo: number[][] | [];
}

const Info:React.FC<Props> = ({ cellsInfo }) => {
  return (
    <div>
      <h2 className='text-xl font-bold'>Hovered squares</h2>

      {cellsInfo ? cellsInfo.map((cell, i) => (
        <p key={i} className='bg-amber-200 text-amber-800 py-1 px-2 rounded-md mt-2 max-w-fit'>
          {`row ${cell[0]} col ${cell[1]}`}
        </p>
      )) : ('')}
    </div>
  );
};

export default Info;