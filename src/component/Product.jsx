import React from 'react'
import Images from './Images'
import productOne from '/src/assets/Doll.png'
import Badge from './Badge'

const Product = ({src,productTxt,productPrizeTxt}) => {
  return (
    <>
    <div className="relative">
        <Images className='w-full' src={src}/>
        <Badge className='absolute top-3 left-3' badgetxt='New'/>
    

        <div className="flex items-center justify-between pt-[22px] pb-[27px]">
          <div className="text-menuhoverC font-semibold">{productTxt}</div>
          <div className="text-menuC">{productPrizeTxt}</div>
        </div>

    </div>
    
    </>
  )
}

export default Product