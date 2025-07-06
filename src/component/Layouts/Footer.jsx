import Container from "../Container"
import Heading from "../Heading"
import Images from "../Images"
import Menu from "../Menu"
import logo from "../../assets/OREBI©.png"
import { FaFacebookF,FaLinkedinIn,FaInstagram  } from "react-icons/fa";



const Footer = () => {
  return (
    <>
    <div className="bg-bgC">
        <Container>
           
                <div className="grid grid-cols-[9%_11%_16%_30%_35%] py-7">
                    <div className="">
                        <Heading className="pb-3 font-bold " text='MENU' as='h3'/>
                        <Menu>
                            <li className='text-menuC'>Home</li>
                            <li className='text-menuC'>Shop</li>
                            <li className='text-menuC'>About</li>
                            <li className='text-menuC'>Contacts</li>
                            <li className='text-menuC'>Journal</li>
                        </Menu>
                    </div>
                    <div className="">
                        <Heading className="pb-3 font-bold" text='SHOP' as='h3'/>
                        <Menu>
                            <li className='text-menuC'>Category 1</li>
                            <li className='text-menuC'>Category 2</li>
                            <li className='text-menuC'>Category 3</li>
                            <li className='text-menuC'>Category 4</li>
                            <li className='text-menuC'>Category 5</li>
                        </Menu>
                    </div>
                    <div className="">
                           <Heading className="pb-3 font-bold" text='HELP' as='h3'/>
                        <Menu>
                            <li className='text-menuC'>Privacy Policy</li>
                            <li className='text-menuC'>Terms & Conditions</li>
                            <li className='text-menuC'>Special E-shop</li>
                            <li className='text-menuC'>Shipping</li>
                            <li className='text-menuC'>Secure Payments</li>
                        </Menu>
                    </div>
                    <div className="">
                        <Heading className="pb-3 font-bold" text='(052) 611-5711' as='h3'/>
                        <Heading className="pb-3 font-bold" text='company@domain.com' as='h3'/>
                        <Heading className="pb-3 text-menuC" text='575 Crescent Ave. Quakertown, PA 18951' as='h3'/>
                    </div>
                    <div className="pl-5">
                        <Images src={logo}/>
                    </div>
                </div>

            <div className="pb-6 flex items-center justify-between">
                <div className="footerIcon flex items-center gap-3">
                    <FaFacebookF/>
                    <FaLinkedinIn/>
                    <FaInstagram />
                </div>
                <div className="">
                    <Heading className="text-menuC" text="2020 Orebi Minimal eCommerce Figma Template by Adveits" as="p"/>
                </div>
            </div>
            
        </Container>
    </div>
    </>
  )
}

export default Footer