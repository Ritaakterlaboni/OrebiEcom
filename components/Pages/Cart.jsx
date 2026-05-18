import React from "react";
import { ImCross } from "react-icons/im";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
    SelectContent,
      SelectGroup,
        SelectItem,
          SelectLabel,
            SelectTrigger,
              SelectValue,
              } from "@/components/ui/select";
              import { Link } from "react-router-dom";
import Container from "../Container";



const Cart = () => {
  return (
    <>
    <section className="py-30 ">
      <Container>
       <h1 className=" font-bold text-5xl text-menuHeading">Cart</h1>
       <p className=" text-[12px] text-header pt-5.5 flex">
        Home &gt; Cart
       </p>
      </Container>
    </section>
    <Container>
      <table className='border w-full border-infobgC'>
        <thead className='border border-[#F5F7F7] bg-bgC w-full'>
          <tr>
            <th className="p-5 w-1/4 text-left">Product</th>
            <th className="p-5 w-1/4 text-left">Price</th>
            <th className="p-5 w-1/4 text-left">Quantity</th>
            <th className="p-5 w-1/4 text-left">Total</th>

          </tr>
        </thead>
        <tbody className="border border-infobgC w-full">
          <tr>
            <td className="px-5 py-6">
              <div className="flex items-center">
                   <button
                      className="cursor-pointer"
                      onClick={() => {
                    
                      }}>
                      <ImCross />
                    </button>
                    {/* <img className="w-20 h-20 bg-[#D8D8D8] ml-10 mx-5" src={}/> */}
              </div>
              
            </td>
            <td className="text-[20px] font-bold text-menuHeading py-6 px-5 justify-center">$12.2</td>
            <td className="py-6 px-5">
              <div className="py-1.5 px-4 w-36 border border-infobgC flex gap-x-10 text-header justify-center">
                   <button
                      className="cursor-pointer">
                      -
                    </button>
                    <h6>1</h6>
                    <button
                      className="cursor-pointer">
                      +
                    </button>
              </div>
            </td>
            <td className="text-[20px] font-bold text-menuHeading py-6 px-5">$12.2</td>
          </tr>
        </tbody>
      </table>
      <div className="border border-infobgC p-5 border-t-0 flex justify-between items-center">
          <div className="flex gap-x-5 items-center">
            <Select className="rounded-none">
              <SelectTrigger className="w-40 h-10 rounded-none">
                <SelectValue placeholder={"SIZE"} />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Sizes</SelectLabel>

                  <SelectItem value="xs">Extra Small</SelectItem>
                  <SelectItem value="sm">Small</SelectItem>
                  <SelectItem value="md">Medium</SelectItem>
                  <SelectItem value="lg">Large</SelectItem>
                  <SelectItem value="xl">Extra Large</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            {/* coupon */}
            <Field orientation="horizontal">
              <Input
                type="text"
                placeholder="Coupon code"

                className="border-2 border-infoBg rounded-none font-semibold"
              />

              <Button
                className="rounded-none cursor-pointer"
>
                Apply Coupon
              </Button>
            </Field>
          </div>

          <button className="font-bold text-sm text-menuHeading cursor-pointer">
            Update Cart
          </button>
        </div>

         <div className="text-end">
          <p className="pt-13 text-[20px] font-bold">
            Cart totals
          </p>
          <table className="border border-infobgC mt-6 mb-7.5 ml-auto text-left ">
            <tbody>
              <tr className="border-b border-infobgC">
                <th className="font-bold py-4 px-5 w-2xs border-r border-infobgC text-left ">
                  Subtotal
                </th>
                <td className="font-medium py-4 px-5 w-2xs">
                  $
                </td>
              </tr>
              <tr className="border-b border-infobgC">
                <th className="font-bold py-4 px-5 w-2xs border-r border-infobgC text-left ">
                  Discount
                </th>
                <td className="font-medium py-4 px-5 w-2xs ">
                  -$
                </td>
              </tr>
              <tr>
                <th className=" py-4 px-5 w-2xs border-r border-infobgC text-left">
                  Total
                </th>
                <td className=" py-4 px-5 w-2xs font-semibold">
                  $
                </td>
              </tr>
            </tbody>
          </table>
          <Link to={"/"}>
            <button className="mb-30 py-5 px-8 text-white text-sm font-bold bg-black cursor-pointer border border-menuC">
              Proceed to Checkout
            </button>
          </Link>
        </div>

    </Container>
    </>
  )
}

export default Cart