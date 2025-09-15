
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import Logo from '../../assets/OREBI©.png'
import Menu from '../Menu'
import { FaSearch,FaUser,FaShoppingCart,FaBars    } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from 'react-router-dom'
import { useState } from 'react'


const Header = () => {

const [showmenu, setShowmenu] = useState(false);

const[show, setShow] =useState(false);


  return (
    <>
    <Container> 
        <Flex className='py-[31px]'>
             <div>
                <Images src={Logo} alt={"logo"}/>
            </div>
            <div className='m-auto'>
                <Menu className="flex items-center gap-x-7">

                    <Link to={'/'}>
                    <li className='hover:text-menuhoverC text-menuC'>Home</li>
                    </Link>

                    <Link to={'/shop'}>
                    <li className='hover:text-menuhoverC text-menuC'>Shop</li>
                    </Link>

                    <Link to={'/about'}>
                    <li className='hover:text-menuhoverC text-menuC'>About</li>
                    </Link>
                    
                    <Link to={'/contact'}>
                    <li className='hover:text-menuhoverC text-menuC'>Contacts</li>
                    </Link>
                    
                    <Link to={'/journal'}>
                    <li className='hover:text-menuhoverC text-menuC'>Journal</li>
                    </Link>

                </Menu>
            </div>
       </Flex>
    </Container>


     <div className='bg-bgC'>
           <Container >
            <Flex className='py-5 justify-between'>
                    
                        <div onClick={()=>setShowmenu(!showmenu)} className="flex items-center gap-3 relative">
                            <FaBars/>
                            <div className="">Shop by Category</div>



                     {showmenu && (
                                <div className="bg-black p-[20px] text-white absolute top-[50px] left-[20px]">
                                    <p className='pb-3'>Accesories</p> 
                                    <p className='pb-3'>Furniture</p>
                                    <p className='pb-3'>Clothes</p>
                                    <p className='pb-3'>Electronics</p>
                                    <p className=''>Bags</p>



                                </div>
                            )}
                        </div>
                        <div className="relative">
                            <input type='text' placeholder='Search Products' className='w-[600px] p-5 bg-white outline-0'/>
                             <FaSearch className='absolute top-1/2 right-4 transform -translate-y-1/2'/>          {/*posotion dile transform -translate-y-1/2 dite hobe */}
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center"  onClick={()=>setShow(!show)}>
                                <div className=""><FaUser /></div>
                                <div className="relative"><IoMdArrowDropdown/></div>
                                 {show &&(
                                    <div className=" bg-black text-white px-[30px] py-[20px] absolute top-[165px] right-[90px]">
                                        <p className='pb-4'>My Account</p>
                                        <p className=''>Log Out</p>
                                    </div>
                                )}
                            </div>
                            <FaShoppingCart />
                        </div>
                  
                               

            </Flex>
        </Container>
     </div>

    </>
  )
}

export default Header