import React from 'react'
import { Link } from 'react-router-dom'

const Bannar = () => {
  return (
    <>
        <Link to={'/shop'}>
         <div className="bg-[url(/src/assets/BannerOne.png)] h-[600px] bg-no-repeat bg-cover bg-center"></div>
        </Link>
       

    </>
  )
}

export default Bannar