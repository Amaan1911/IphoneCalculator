// 
import React, { useState } from 'react';

const IphoneCalculator = () => {
  const [value, setValue] = useState('');

  function handleClick(val) {
    setValue(prev => prev + val);
  }

  function handleClear() {
    setValue('');
  }

  function handleCalculate() {
    try {
      // Evaluate safely
      setValue(eval(value).toString());
    } catch (error) {
      setValue('Error');
    }
  }

  return (
    <div className='h-[550px] w-[300px] border rounded shadow-lg bg-black text-white'>

      <div className='border-b h-[200px] flex items-end justify-end px-5 text-3xl font-bold'>
        <p>{value || '0'}</p>
      </div>

      <div className='grid grid-cols-4 gap-2 p-3'>
        <button onClick={handleClear} className='col-span-2 h-[60px] bg-gray-400 rounded-full'>C</button>
        <button onClick={() => handleClick('%')} className='h-[60px] bg-gray-500 rounded-full'>%</button>
        <button onClick={() => handleClick('/')} className='h-[60px] bg-orange-500 rounded-full'>/</button>
        {[7, 8, 9].map(n => (
          <button key={n} onClick={() => handleClick(n.toString())} className='h-[60px] bg-gray-700 rounded-full'>{n}</button>
        ))}
        <button onClick={() => handleClick('*')} className='h-[60px] bg-orange-500 rounded-full'>*</button>
        {[4, 5, 6].map(n => (
          <button key={n} onClick={() => handleClick(n.toString())} className='h-[60px] bg-gray-700 rounded-full'>{n}</button>
        ))}
        <button onClick={() => handleClick('-')} className='h-[60px] bg-orange-500 rounded-full'>-</button>
        {[1, 2, 3].map(n => (
          <button key={n} onClick={() => handleClick(n.toString())} className='h-[60px] bg-gray-700 rounded-full'>{n}</button>
        ))}
        <button onClick={() => handleClick('+')} className='h-[60px] bg-orange-500 rounded-full'>+</button>
        <button onClick={() => handleClick('0')} className='col-span-2 h-[60px] bg-gray-700 rounded-full'>0</button>
        <button onClick={() => handleClick('.')} className='h-[60px] bg-gray-700 rounded-full'>.</button>
        <button onClick={handleCalculate} className='h-[60px] bg-green-500 rounded-full'>=</button>
      </div>

    </div>
  );
};

export default IphoneCalculator;
