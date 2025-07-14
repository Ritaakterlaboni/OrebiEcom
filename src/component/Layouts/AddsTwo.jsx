import React from 'react'
import Container from '../Container'
import Images from '../Images'
import adds_Two from '/src/assets/Ads_2.png'
import { Link } from 'react-router-dom'

const AddsTwo = () => {
  return (
    <>
   <div  className="py-15">
     <Container>
        <Link to={'/shop'}>
            <Images src={adds_Two}/>
        </Link>
    </Container>
   </div>
    </>
  )
}

export default AddsTwo