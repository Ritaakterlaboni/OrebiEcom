import React, { useState } from 'react'
import Container from '../Container'

const Filter = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <section>
                <div className="">
                    <Container>
                        <div className="category">
                            <div className="w-1/4">
                                <p className="text-[20px] font-bold mb-3">Shop By Category</p>
                                <div className="">
                                <button className="text-[#6D6D6D] gap-x-20 border-infobgC items-start flex border-b-2 py-5" onClick={toggleAccordion}>
                                    <p>Category 1</p>
                                    <span className="font-bold">
                                        {isOpen ? "-" : "+"}
                                    </span>
                                </button>
                                <div className={`px-4 bg-infoBg w-full text-base text-header font-dmSans transition-all duration-300
                                     ${isOpen ? "opacity-100 py-2.5 h-17.5" : "opacity-0 h-0 py-0"}`}>Lorem ipsum dolor sit amet.
                                </div>
                                </div>

                                <div className="">
                                <button className="text-[#6D6D6D] gap-x-20 border-infobgC items-start flex border-b-2 py-5" onClick={toggleAccordion}>
                                    <p>Category 2</p>
                                    <span className="font-bold">
                                        {isOpen ? "-" : "+"}
                                    </span>
                                </button>
                                <div className={`px-4 bg-infoBg w-full text-base text-header font-dmSans transition-all duration-300
                                     ${isOpen ? "opacity-100 py-2.5 h-17.5" : "opacity-0 h-0 py-0"}`}>Lorem ipsum dolor sit amet.
                                </div>
                                </div>

                                <div className="">
                                <button className="text-[#6D6D6D] gap-x-20 border-infobgC items-start flex border-b-2 py-5" onClick={toggleAccordion}>
                                    <p>Category 3</p>
                                    <span className="font-bold">
                                        {isOpen ? "-" : "+"}
                                    </span>
                                </button>
                                <div className={`px-4 bg-infoBg w-full text-base text-header font-dmSans transition-all duration-300
                                     ${isOpen ? "opacity-100 py-2.5 h-17.5" : "opacity-0 h-0 py-0"}`}>Lorem ipsum dolor sit amet.
                                </div>
                                </div>

                                <div className="">
                                <button className="text-[#6D6D6D] gap-x-20 border-infobgC items-start flex border-b-2 py-5" onClick={toggleAccordion}>
                                    <p>Category 4</p>
                                    <span className="font-bold">
                                        {isOpen ? "-" : "+"}
                                    </span>
                                </button>
                                <div className={`px-4 bg-infoBg w-full text-base text-header font-dmSans transition-all duration-300
                                     ${isOpen ? "opacity-100 py-2.5 h-17.5" : "opacity-0 h-0 py-0"}`}>Lorem ipsum dolor sit amet.
                                </div>
                                </div>

                                <div className="">
                                <button className="text-[#6D6D6D] gap-x-20 border-infobgC items-start flex border-b-2 py-5" onClick={toggleAccordion}>
                                    <p>Category 5</p>
                                    <span className="font-bold">
                                        {isOpen ? "-" : "+"}
                                    </span>
                                </button>
                                <div className={`text-[#6D6D6D] px-4 w-full text-base text-header transition-all duration-300
                                     ${isOpen ? "opacity-100 py-2.5 h-17.5" : "opacity-0 h-0 py-0"}`}>Lorem ipsum dolor sit amet.
                                </div>
                                </div>
                                </div>
                                </div>



                        <div className="">

                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default Filter