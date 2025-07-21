import React from 'react'
import Product from '../Product'
import Container from '../Container'
import Flex from '../Flex'
import cat from '/src/assets/Doll.png'
import jhuri from '/src/assets/jhuri.png'
import watch from '/src/assets/watch.png'
import ghori from '/src/assets/ghori.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";





const NewArrivals = () => {
    var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <>
  
     <Container>
      <div className="text-[39px] pb-[50px] pt-[100px] font-bold">New Arrivals</div>
        
        <div className="-mx-4">
           <Slider {...settings}>
            <div className="px-4">
              <Product src={cat} productTxt={'Basic Crew Neck Tee'} productPrizeTxt='$44.00'/>
            </div>
            <div className="px-4">
              <Product src={jhuri} productTxt={'Basic Crew Neck Tee'} productPrizeTxt='$44.00'/>
            </div>
            <div className="px-4">
               <Product src={watch} productTxt={'Basic Crew Neck Tee'} productPrizeTxt='$44.00'/>
            </div>
            <div className="px-4">
              <Product src={ghori} productTxt={'Basic Crew Neck Tee'} productPrizeTxt='$44.00'/>
            </div>
             <div className="px-4">
              <Product src={cat} productTxt={'Basic Crew Neck Tee'} productPrizeTxt='$44.00'/>
            </div>
            <div className="px-4">
              <Product src={jhuri} productTxt={'Basic Crew Neck Tee'} productPrizeTxt='$44.00'/>
            </div>
             <div className="px-4">
               <Product src={watch} productTxt={'Basic Crew Neck Tee'} productPrizeTxt='$44.00'/>
            </div>
            <div className="px-4">
              <Product src={ghori} productTxt={'Basic Crew Neck Tee'} productPrizeTxt='$44.00'/>
            </div>
          </Slider>
        </div>
    </Container>

    </>
  )
}

export default NewArrivals