import React from 'react'

const Btn = ({title}) => {
  return <button className='rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow'>
    {title}
  </button>
}

export default Btn