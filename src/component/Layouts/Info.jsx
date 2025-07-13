import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { PiNumberTwoBold } from "react-icons/pi";
import { FaTruck } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";

const Info = () => {
  return (
    <>
    <div className="bg-white border-b-2 border-infobgC pb-[32px] pt-[27px]">
        <Container>
            <Flex className='justify-between'>
                <div className="flex items-center">
                    <PiNumberTwoBold/>
                    <p className='text-infotextCC'>Two years warranty</p>
                </div>

                <div className="flex items-center gap-2">
                    <FaTruck/>
                    <p className='text-infotextCC'>Free shipping</p>
                </div>

                <div className="flex items-center gap-2">
                    <FaArrowRotateLeft/>
                    <p className='text-infotextCC'>Return policy in 30 days</p>
                </div>

            </Flex>
        </Container>
    </div>
    </>
  )
}

export default Info