import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import addOne from '/src/assets/Ad_1.png'
import addTwo from '/src/assets/Ad_2.png'
import addThree from '/src/assets/Ad_3.png'
import { Link } from 'react-router-dom'

const Adds = () => {
  return (
    <>
    <div className="pt-[170px] pb-[65px]">
        <Container>
           
            <Flex className='gap-9'>
                <div className="w-[49%]">
                   <Link to={'/shop'}>
                     <Images src={addOne} className='w-full'/>
                   </Link>
                    </div>
                <div className="w-[48%] grid gap-9">
                     <Link to={'/shop'}>
                     <Images src={addTwo} className='w-full'/>
                   </Link>
                     <Link to={'/shop'}>
                     <Images src={addThree} className='w-full'/>
                   </Link>
                </div>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default Adds