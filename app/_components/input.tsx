import React from 'react'

type InputProps = {
    type: string;
    id?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({type,...props}) => {
  return (
    <input
        type={type}
        className='border border-[#753F21] px-3 py-2 
            rounded-md outline-none text-[#753F21]' 
        {...props}
    />
  )
}

export {Input}
