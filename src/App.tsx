import React, { useEffect, useState } from 'react';
import Field from './components/Field';
import Info from './components/Info';
import axios from 'axios';

import './App.css';

const URL = 'https://60816d9073292b0017cdd833.mockapi.io/modes';

const App = () => {
  const [presets, setPresets] = useState([]);
  const [cellsInfo, setCellsInfo] = useState<number[][] | []>([]);

  const handleCellInfoAdd = (cell: number[]) => {
    if (!cell.length) {
      setCellsInfo([]);
      return;
    }

    setCellsInfo(prev => [cell, ...prev]);
  };

  useEffect(() => {
    getPresets();
  }, []);

  const getPresets = async () => {
    try {
      const res = await axios.get(URL);
      setPresets(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex justify-space space-x-10 p-10'>
      <Field presets={presets} onCellHover={handleCellInfoAdd} />
      <Info cellsInfo={cellsInfo} />
    </div>
  );
};

export default App;
