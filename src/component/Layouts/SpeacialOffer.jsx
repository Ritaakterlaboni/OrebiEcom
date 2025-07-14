import React from 'react'
import Product from '../Product'
import Container from '../Container'
import Flex from '../Flex'
import bag from '/src/assets/bag.png'
import base from '/src/assets/base.png'
import moslarBata from '/src/assets/moslarBata.png'
import blackbag from '/src/assets/blackbag.png'
import ProductHeading from '../productHeading'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";



const SpeacialOffer = () => {
      var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <>
   

  <div className="pb-5">
       <Container>
            <ProductHeading productsHeading={'Speacial Offer'}/>
                <Slider {...settings}>
                    <div>
                        <Product src={bag} productTxt={'Basic Crew Neck Tee'} productPrizeTxt='$44.00' bottomTypes={'Black'}/>
                    </div>
                     <div>
                         <Product src={base} productTxt={'Basic Crew Neck Tee'} productPrizeTxt='$44.00' bottomTypes={'Black'}/>
                    </div>
                     <div>
                        <Product src={moslarBata} productTxt={'Basic Crew Neck Tee'} productPrizeTxt='$44.00' bottomTypes={'Black'}/>
                    </div>
                     <div>
                        <Product src={blackbag} productTxt={'Basic Crew Neck Tee'} productPrizeTxt='$44.00' bottomTypes={'Black'}/>
                    </div>
                     <div>
                        <Product src={bag} productTxt={'Basic Crew Neck Tee'} productPrizeTxt='$44.00' bottomTypes={'Black'}/>
                    </div>
                     <div>
                         <Product src={base} productTxt={'Basic Crew Neck Tee'} productPrizeTxt='$44.00' bottomTypes={'Black'}/>
                    </div>
                     <div>
                        <Product src={moslarBata} productTxt={'Basic Crew Neck Tee'} productPrizeTxt='$44.00' bottomTypes={'Black'}/>
                    </div>
                     <div>
                        <Product src={blackbag} productTxt={'Basic Crew Neck Tee'} productPrizeTxt='$44.00' bottomTypes={'Black'}/>
                    </div>
                </Slider>
    </Container>
  </div>

    </>
  )
}

export default SpeacialOffer