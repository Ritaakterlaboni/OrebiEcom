import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Bannar = () => {

   var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2,
    autoplay:true,
    autoplaySpeed:1000,
  };
  return (
    <>
        <Link to={'/shop'}>
         

    <Slider {...settings}>
      <div className="">
        <div className="bg-[url(/src/assets/BannerOne.png)] h-[600px] bg-no-repeat bg-cover bg-center"></div>
      </div>
      <div className="">
        <div className="bg-[url(/src/assets/BannerTwo.png)] h-[600px] bg-no-repeat bg-cover bg-center"></div>
      </div>
    </Slider>
        </Link>
       
    </>
  )
}

export default Bannar