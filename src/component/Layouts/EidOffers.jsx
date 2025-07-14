
import Product from '../Product'
import Container from '../Container'
import cap from '/src/assets/cap.png'
import toul from '/src/assets/toul.png'
import headphone from '/src/assets/headphone.png'
import glasses from '/src/assets/glasses.png'
import ProductHeading from '../ProductHeading'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const EidOffers = () => {
      var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <>
   <div className="py-9">
     <Container>
       <ProductHeading productsHeading={'Eid Offers'}/>
        <Slider {...settings}>
            <div>
                <Product src={cap} productTxt={'Basic Crew Neck Tee'} productPrizeTxt='$44.00' bottomTypes={'Black'}/>
            </div>
            <div>
                <Product src={toul} productTxt={'Basic Crew Neck Tee'} productPrizeTxt='$44.00' bottomTypes={'Black'}/>
            </div>
            <div>
                <Product src={headphone} productTxt={'Basic Crew Neck Tee'} productPrizeTxt='$44.00' bottomTypes={'Black'}/>
            </div
            ><div>
                <Product src={glasses} productTxt={'Basic Crew Neck Tee'} productPrizeTxt='$44.00' bottomTypes={'Black'}/>
            </div>
              <div>
                <Product src={cap} productTxt={'Basic Crew Neck Tee'} productPrizeTxt='$44.00' bottomTypes={'Black'}/>
            </div>
            <div>
                <Product src={toul} productTxt={'Basic Crew Neck Tee'} productPrizeTxt='$44.00' bottomTypes={'Black'}/>
            </div>
            <div>
                <Product src={headphone} productTxt={'Basic Crew Neck Tee'} productPrizeTxt='$44.00' bottomTypes={'Black'}/>
            </div
            ><div>
                <Product src={glasses} productTxt={'Basic Crew Neck Tee'} productPrizeTxt='$44.00' bottomTypes={'Black'}/>
            </div>

        </Slider>
    </Container>
   </div>
     
    </>
  )
}

export default EidOffers