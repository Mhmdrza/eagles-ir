
import React from 'react'

export default function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label>
        <span>{props.name}</span>
        <input 
            className='
                mt-1
                block
                rounded-md
                border-gray-300
                shadow-sm
                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
            '
            {...props}
        />
    </label>
  )
}
