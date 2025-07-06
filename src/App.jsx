import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './component/Pages/Home'
import RootLayout from './component/Layouts/RootLayout'
import Shop from './component/Pages/Shop';
import Contacts from './component/Pages/Contacts';
import About from './component/Pages/About';
import Journal from './component/Pages/Journal';
import Error from './component/Pages/Error';

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
        <Route path='*' element={<Error/>}/>
      </Route>
     </Routes>
    </>
  )
}

export default App