import React from 'react'
import Images from './Images'
import Badge from './Badge'
import Flex from './Flex'
import { FaHeart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

const Product = ({ src, productTxt, productPrizeTxt,bottomTypes }) => {
  return (
    <div className="relative group w-full bg-white overflow-hidden">

      {/* Product Image */}
      <div className="relative">
        <Images className='w-full' src={src} />
        <Badge className='absolute top-3 left-3' badgetxt='New' />
      </div>

      {/* Title and Price - always visible */}
      <div className="px-4 py-4 bg-white z-10 relative">
        <Flex className="items-center justify-between">
          <div className="text-menuhoverC font-semibold">{productTxt}</div>
          <div className="text-menuC">{productPrizeTxt}</div>
        </Flex>
        <div className="text-menuC py-3">{bottomTypes}</div>
      </div>

      {/* Hover Bottom Part - slide up on hover */}
      <div className="absolute bottom-22 left-0 w-full bg-white py-9 
                      translate-y-full group-hover:translate-y-0 
                      transition-transform duration-500 ease-in-out z-0">
        <Flex className='justify-end pr-5 gap-2'>
          <p className='hover:text-menuhoverC text-menuC font-semibold'>Add to Wish List</p><FaHeart />
        </Flex>
        <Flex className='justify-end pr-5 gap-2 py-3'>
          <p className='hover:text-menuhoverC text-menuC font-semibold'>Compare</p><FaCodeCompare />
        </Flex>
        <Flex className='justify-end pr-5 gap-2'>
          <p className='hover:text-menuhoverC text-menuC font-semibold'>Add to Cart</p><FaShoppingCart />
        </Flex>
      </div>

    </div>
  )
}

export default Product
