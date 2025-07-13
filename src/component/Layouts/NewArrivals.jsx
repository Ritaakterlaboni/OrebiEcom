import React from 'react'
import Product from '../Product'
import Container from '../Container'
import Flex from '../Flex'
import cat from '/src/assets/Doll.png'
import jhuri from '/src/assets/jhuri.png'
import watch from '/src/assets/watch.png'
import ghori from '/src/assets/ghori.png'

const NewArrivals = () => {
  return (
    <>
    <Container>
        <div className="text-[39px] font-bold py-10">New Arrivals</div>
        <Flex className='gap-6'>
            <Product src={cat} productTxt={'Basic Crew Neck Tee'} productPrizeTxt='$44.00'/>
            <Product src={jhuri} productTxt={'Basic Crew Neck Tee'} productPrizeTxt='$44.00'/>
            <Product src={watch} productTxt={'Basic Crew Neck Tee'} productPrizeTxt='$44.00'/>
            <Product src={ghori} productTxt={'Basic Crew Neck Tee'} productPrizeTxt='$44.00'/>
        </Flex>
    </Container>
    </>
  )
}

export default NewArrivals