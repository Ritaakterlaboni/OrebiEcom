import React from 'react'

const Badge = ({badgetxt,className}) => {
  return (
    <>
    <div className={`py-2 px-8 w-[92px] bg-black text-white text-sm font-bold text-center ${className}`}>{badgetxt}</div>
    </>
  )
}

export default Badge