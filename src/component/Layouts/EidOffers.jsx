
import Product from '../Product'
import Container from '../Container'
import cap from '/src/assets/cap.png'
import toul from '/src/assets/toul.png'
import headphone from '/src/assets/headphone.png'
import glasses from '/src/assets/glasses.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const EidOffers = () => {
      var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <>
   <div className="py-9">
     <Container>
       <div className="text-[39px] pb-[50px] pt-[50px] font-bold">Eid Offers </div>
     <div className="-mx-4">
           <Slider {...settings}>
            <div className="px-4">
                <Product src={cap} productTxt={'Basic Crew Neck Tee'} productPrizeTxt='$44.00' bottomTypes={'Black'}/>
            </div>
            <div className="px-4">
                <Product src={toul} productTxt={'Basic Crew Neck Tee'} productPrizeTxt='$44.00' bottomTypes={'Black'}/>
            </div>
            <div className="px-4">
                <Product src={headphone} productTxt={'Basic Crew Neck Tee'} productPrizeTxt='$44.00' bottomTypes={'Black'}/>
            </div>
            <div className="px-4">
                <Product src={headphone} productTxt={'Basic Crew Neck Tee'} productPrizeTxt='$44.00' bottomTypes={'Black'}/>
            </div>
            <div className="px-4">
                <Product src={cap} productTxt={'Basic Crew Neck Tee'} productPrizeTxt='$44.00' bottomTypes={'Black'}/>
            </div>
            <div className="px-4">
                <Product src={toul} productTxt={'Basic Crew Neck Tee'} productPrizeTxt='$44.00' bottomTypes={'Black'}/>
            </div>
            <div className="px-4">
                <Product src={headphone} productTxt={'Basic Crew Neck Tee'} productPrizeTxt='$44.00' bottomTypes={'Black'}/>
            </div>
            <div className="px-4">
                <Product src={glasses} productTxt={'Basic Crew Neck Tee'} productPrizeTxt='$44.00' bottomTypes={'Black'}/>
            </div>
              <div className="px-4">
                <Product src={toul} productTxt={'Basic Crew Neck Tee'} productPrizeTxt='$44.00' bottomTypes={'Black'}/>
            </div>
            <div className="px-4">
                <Product src={headphone} productTxt={'Basic Crew Neck Tee'} productPrizeTxt='$44.00' bottomTypes={'Black'}/>
            </div>
            <div className="px-4">
                <Product src={glasses} productTxt={'Basic Crew Neck Tee'} productPrizeTxt='$44.00' bottomTypes={'Black'}/>
            </div>

        </Slider>
     </div>
    </Container>
   </div>
     
    </>
  )
}

export default EidOffers