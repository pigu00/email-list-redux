import React from 'react'

const TextField = ({ label, inputProps, onChange, value }) => {
  return (
    <div className='flex flex-col'>
      <label className='mb-2 text-base text-bold text-purple-800'>{label}</label>
      <input
        className='bg-pink-200 py-2 px-3 border-2 outline-none'
        {...inputProps}
        onChange={onChange}
        value={value}
      />
    </div>
  )
}

export default TextField