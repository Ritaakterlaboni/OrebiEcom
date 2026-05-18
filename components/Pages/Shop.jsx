import { useState } from "react";
import Container from "../Container"
import Filter from "../Layouts/Filter";




const Shop = () => {

  return (
    <>
      <div className="">
        <section className="py-30">
          <Container>
            <h1 className=" font-bold text-5xl text-menuHeading">Products</h1>
            <p className=" text-[12px] text-header pt-5.5 flex">
              Home &gt; Products
            </p>
          </Container>
        </section>
        <Filter/>
      </div>


    </>
  )
}

export default Shop