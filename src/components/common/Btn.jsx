import React from 'react';

export default function Bton() {
  return (
    <>
      <button className='border uppercase text-white ml-8 mt-10 py-4 text-[12px] px-14 border-yellow-600 relative'>
        Read More
        <span className='absolute inset-0 border border-yellow-600 opacity-0 transition-opacity duration-300 hover:opacity-100' />
      </button>
    </>
  );
}
