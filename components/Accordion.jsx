import React, { useState } from 'react'
import Container from './Container';

const Accordion = ({title, content}) => {
        const [isOpen, setIsOpen] = useState(false);
    
        const toggleAccordion = () => {
            setIsOpen(!isOpen);
        };
  return (
     <>
            <section>
                    <Container>
                        <div className="category">
                            <div className="w-1/4">
                                <button className="cursor-pointer text-[#6D6D6D] gap-x-60 border-infobgC items-start flex border-b-2 py-5" onClick={toggleAccordion}>
                                    <p>{title}</p>
                                    <span className="font-bold">
                                        {isOpen ? "-" : "+"}
                                    </span>
                                </button>
                                <div className={`pl-3 bg-infobgC text-[#6D6D6D] transition-all duration-300
                                     ${isOpen ? "opacity-100 py-2.5 h-10" : "opacity-0 h-0 py-0"}`}>{content} 
                                </div>
                            </div>
                        </div>
                    </Container>
            </section>
        </>
  )
}

export default Accordion