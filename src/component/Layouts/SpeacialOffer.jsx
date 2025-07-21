import React from 'react'
import Product from '../Product'
import Container from '../Container'
import bag from '/src/assets/bag.png'
import base from '/src/assets/base.png'
import moslarBata from '/src/assets/moslarBata.png'
import blackbag from '/src/assets/blackbag.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";
import PrevArrow from '../PrevArrow'
import NextArrow from '../NextArrow'




const SpeacialOffer = () => {
      var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    prevArrow:<PrevArrow/>,
    nextArrow:<NextArrow/>,

    pauseOnHover: false,
  };
  return (
    <>
   

  <div className="pb-[100px]">
       <Container>
            <div className="text-[39px] pb-[50px] pt-[100px] font-bold">Speacial Offers</div>
               <div className="-mx-4 relative group">
                 <Slider {...settings}>
                    <div className="px-4">
                        <Product src={bag} productTxt={'Basic Crew Neck Tee'} productPrizeTxt='$44.00' bottomTypes={'Black'}/>
                    </div>
                     <div className="px-4">
                         <Product src={base} productTxt={'Basic Crew Neck Tee'} productPrizeTxt='$44.00' bottomTypes={'Black'}/>
                    </div>
                     <div className="px-4">
                        <Product src={moslarBata} productTxt={'Basic Crew Neck Tee'} productPrizeTxt='$44.00' bottomTypes={'Black'}/>
                    </div>
                     <div className="px-4">
                        <Product src={blackbag} productTxt={'Basic Crew Neck Tee'} productPrizeTxt='$44.00' bottomTypes={'Black'}/>
                    </div>
                     <div className="px-4">
                        <Product src={bag} productTxt={'Basic Crew Neck Tee'} productPrizeTxt='$44.00' bottomTypes={'Black'}/>
                    </div>
                     <div className="px-4">
                         <Product src={base} productTxt={'Basic Crew Neck Tee'} productPrizeTxt='$44.00' bottomTypes={'Black'}/>
                    </div>
                     <div className="px-4">
                        <Product src={moslarBata} productTxt={'Basic Crew Neck Tee'} productPrizeTxt='$44.00' bottomTypes={'Black'}/>
                    </div>
                     <div className="px-4">
                        <Product src={blackbag} productTxt={'Basic Crew Neck Tee'} productPrizeTxt='$44.00' bottomTypes={'Black'}/>
                    </div>
                </Slider>
               </div>
    </Container>
  </div>

    </>
  )
}

export default SpeacialOffer