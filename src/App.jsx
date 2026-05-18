import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from '../components/Pages/Home'
import RootLayout from '../components/Layouts/RootLayout'
import Shop from '../components/Pages/Shop';
import Contacts from '../components/Pages/Contacts';
import About from '../components/Pages/About';
import Journal from '../components/Pages/Journal';
import Error from '../components/Pages/Error';
import Cart from '../components/Pages/Cart';
import Checkout from '../components/Pages/Checkout';


function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<RootLayout/>}>                  {/* <Route index element={<Home />} />  aita path ar cye clean and update*/}

        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contacts/>}/>
        <Route path='/journal' element={<Journal/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='*' element={<Error/>}/>
      </Route>
     </Routes>
    </>
  )
}

export default App