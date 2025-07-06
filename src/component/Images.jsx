import React from 'react'

const Images = ({alt,src,className}) => {
  return (
    <img className={`${className}`} src={src} alt={alt}/>
  )
}

export default Images