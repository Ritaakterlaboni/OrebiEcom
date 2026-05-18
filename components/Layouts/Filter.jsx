import React, { useState } from 'react'
import Container from '../Container'
import Accordion from '../Accordion';
import { IoMdArrowDropdown } from "react-icons/io";

const Filter = () => {

    return (
        <>
            <section>
                <Container>
                    <div className="w-full">
                        <p className="text-[20px] font-bold mb-3 w-full">Shop By Category</p>
                    </div>
                </Container>
                <Accordion title={"Category 1"} content={"Lorem ipsum dolor sit amet."} />
                <Accordion title={"Category 2"} content={"Lorem ipsum dolor sit amet."} />
                <Accordion title={"Category 3"} content={"Lorem ipsum dolor sit amet."} />
                <Accordion title={"Category 4"} content={"Lorem ipsum dolor sit amet."} />
                <Accordion title={"Category 5"} content={"Lorem ipsum dolor sit amet."} />

                <Container >
                    <div className="text-[20px] font-bold my-10 flex items-center">
                        Shop By Color <IoMdArrowDropdown/>
                    </div>
                    <div className="text-[20px] font-bold my-10 flex items-center">
                        Shop By Brand <IoMdArrowDropdown/>
                    </div>
                    <div className="text-[20px] font-bold mt-10 mb-5">
                        Shop By Price
                    </div>
                  <div className="w-1/4">
                    <div className="text-[#6D6D6D] py-5 border-b-2 border-infobgC">$0.00 - $9.99</div>
                    <div className="text-[#6D6D6D] py-5 border-b-2 border-infobgC">$1000 - $19.99</div>
                    <div className="text-[#6D6D6D] py-5 border-b-2 border-infobgC">$20.00 - $29.99</div>
                    <div className="text-[#6D6D6D] py-5 border-b-2 border-infobgC">$30.00 - $39.99</div>
                    <div className="text-[#6D6D6D] py-5 border-b-2 border-infobgC">$40.00 - $69.99</div>
                  </div>
                </Container>
            </section>
        </>
    )
}

export default Filter