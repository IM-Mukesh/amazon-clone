import React from "react";
import Product from "./Product";

import lights from "./assets/lights.jpg";
import plant from "./assets/plant.jpg";

import home1 from "./assets/home1.jpg";
import home2 from "./assets/home2.jpg";
import home3 from "./assets/home3.jpg";
import home4 from "./assets/home4.jpg";

import style1 from "./assets/style1.jpg";
import style2 from "./assets/style2.jpg";
import style3 from "./assets/style3.jpg";
import style4 from "./assets/style4.jpg";

import brand1 from "./assets/brand1.jpg";
import brand2 from "./assets/brand2.jpg";
import brand3 from "./assets/brand3.jpg";
import brand4 from "./assets/brand4.jpg";

import others1 from "./assets/others1.jpg";
import others2 from "./assets/others2.jpg";
import others3 from "./assets/others3.jpg";
import others4 from "./assets/others4.jpg";

import tv1 from "./assets/tv1.jpg";
import tv2 from "./assets/tv2.jpg";
import tv3 from "./assets/tv3.jpg";
import tv4 from "./assets/tv4.jpg";

import fashion0 from "./assets/fashion0.jpg";
import fashion1 from "./assets/fashion1.jpg";
import fashion2 from "./assets/fashion2.jpg";
import fashion3 from "./assets/fashion3.jpg";

import app1 from "./assets/app1.jpg";
import app2 from "./assets/app2.jpg";
import app3 from "./assets/app3.jpg";
import app4 from "./assets/app4.jpg";

import bestsell1 from "./assets/bestsell1.jpg";
import bestsell2 from "./assets/bestsell2.jpeg";
import bestsell3 from "./assets/bestsell3.jpeg";
import bestsell4 from "./assets/bestsell4.jpeg";

import stuff1 from "./assets/stuff1.jpg";
import stuff2 from "./assets/stuff2.jpg";
import stuff3 from "./assets/stuff3.jpg";
import stuff4 from "./assets/stuff4.jpg";

import styling1 from "./assets/styling1.jpg";
import styling2 from "./assets/styling2.jpg";
import styling3 from "./assets/styling3.jpg";
import styling4 from "./assets/styling4.jpg";

import slide0 from "./assets/slide0.jpg";
import slide1 from "./assets/slide1.jpg";
import slide2 from "./assets/slide2.jpg";
import slide3 from "./assets/slide3.jpg";
import slide4 from "./assets/slide4.jpg";
import slide5 from "./assets/slide5.jpg";
import slide6 from "./assets/slide6.jpg";
import slide7 from "./assets/slide7.jpg";
import slide8 from "./assets/slide8.jpg";
import slide9 from "./assets/slide9.jpg";
import slide10 from "./assets/slide10.jpg";
import slide11 from "./assets/slide11.jpg";
import slide12 from "./assets/slide12.jpg";
import slide13 from "./assets/slide13.jpg";
import slide14 from "./assets/slide14.jpg";

import juice from "./assets/juice.jpg";
import bike from "./assets/bike.jpg";
import fitness from "./assets/fitness.jpg";
import miniTV1 from "./assets/miniTV1.jpg";
import miniTV2 from "./assets/miniTV2.jpg";
import miniTV3 from "./assets/miniTV3.jpg";

const Cards = () => {
  const Box1 = [
    {
      id: 1,
      detail: "Cushion covers, bedsheets & more",
      image: home1,
    },
    {
      id: 2,
      detail: "Vases, decor and more",
      image: home2,
    },
    {
      id: 3,
      detail: "Home storage",
      image: home3,
    },
    {
      id: 4,
      detail: "Lighting solutions",
      image: home4,
    },
  ];
  const Box2 = [
    {
      id: 1,
      detail: "Clothing",
      image: style1,
    },
    {
      id: 2,
      detail: "Footwear",
      image: style2,
    },
    {
      id: 3,
      detail: "Watches",
      image: style3,
    },
    {
      id: 4,
      detail: "Bags & Wallets",
      image: style4,
    },
  ];
  const Box3 = [
    {
      id: 1,
      detail: "Starting ₹139 | Water bottles",
      image: brand1,
    },
    {
      id: 2,
      detail: "Starting ₹299 | Storage containers",
      image: brand2,
    },
    {
      id: 3,
      detail: "Starting ₹499 | Cookware",
      image: brand3,
    },
    {
      id: 4,
      detail: "Starting ₹399 | Racks & holders",
      image: brand4,
    },
  ];
  const Box4 = [
    {
      id: 1,
      detail: "Spin mops, wipe & more",
      image: others1,
    },
    {
      id: 2,
      detail: "Bathroom handware & accessories",
      image: others2,
    },
    {
      id: 3,
      detail: "Hammers, screwdrivers & more",
      image: others3,
    },
    {
      id: 4,
      detail: "Extension boards, plugs & more",
      image: others4,
    },
  ];
  const Box5 = [
    {
      id: 1,
      detail: "Budget TVs | Up to 60%",
      image: tv1,
    },
    {
      id: 2,
      detail: "4K TVs | Up to 24 months No Cost EMI",
      image: tv2,
    },
    {
      id: 3,
      detail: "Big Screens | Up to 60% off",
      image: tv3,
    },
    {
      id: 4,
      detail: "Ultra Premium TVs | Up to 50% off",
      image: tv4,
    },
  ];
  const Box6 = [
    {
      id: 1,
      detail: "Clothing",
      image: fashion0,
    },
    {
      id: 2,
      detail: "Backpacks",
      image: fashion1,
    },
    {
      id: 3,
      detail: "Footwear",
      image: fashion2,
    },
    {
      id: 4,
      detail: "View all",
      image: fashion3,
    },
  ];
  const Box7 = [
    {
      id: 1,
      detail: "Air conditioners",
      image: app1,
    },
    {
      id: 2,
      detail: "Refregirators",
      image: app2,
    },
    {
      id: 3,
      detail: "Microwaves",
      image: app3,
    },
    {
      id: 4,
      detail: "Washing machines",
      image: app4,
    },
  ];
  const Box8 = [
    {
      id: 1,
      detail: "Sports shoes",
      image: bestsell1,
    },
    {
      id: 2,
      detail: "Jewellery & accessories",
      image: bestsell2,
    },
    {
      id: 3,
      detail: "Watches & smartwatches",
      image: bestsell3,
    },
    {
      id: 4,
      detail: "Bags, wallets & luggage",
      image: bestsell4,
    },
  ];
  const Box9 = [
    {
      id: 1,
      detail: "Starting ₹199 | Water bottles",
      image: stuff1,
    },
    {
      id: 2,
      detail: "Starting ₹299 | Storage containers",
      image: stuff2,
    },
    {
      id: 3,
      detail: "Starting ₹499 | Cookware",
      image: stuff3,
    },
    {
      id: 4,
      detail: "Starting ₹399 | Racks & holders",
      image: stuff4,
    },
  ];
  const Box10 = [
    {
      id: 1,
      detail: "Allen Solly, Fort Collins & more",
      image: styling1,
    },
    {
      id: 2,
      detail: "Biba, Aurelia & more",
      image: styling2,
    },
    {
      id: 3,
      detail: "Womanist, Mimosa & more",
      image: styling3,
    },
    {
      id: 4,
      detail: "Harpa, Only & more",
      image: styling4,
    },
  ];
  const img = [
    {
      id: 1,
      image: slide0,
    },
    {
      id: 2,
      image: slide1,
    },
    {
      id: 3,
      image: slide2,
    },
    {
      id: 4,
      image: slide4,
    },
    {
      id: 5,
      image: slide5,
    },
    {
      id: 6,
      image: slide6,
    },
    {
      id: 7,
      image: slide7,
    },
    {
      id: 8,
      image: slide8,
    },
    {
      id: 9,
      image: slide9,
    },
    {
      id: 10,
      image: slide10,
    },
    {
      id: 11,
      image: slide12,
    },
    {
      id: 12,
      image: slide13,
    },
    {
      id: 13,
      image: slide14,
    },
  ];
  return (
    <div className="bg-[#dcdede] min-h-[200vh] -mt-36 md:-mt-0 flex flex-col">
      <div className="home-row1 grid 2xl:grid-cols-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-5 z-10 m-4 -mt-1">
        <div className="first-item flex flex-col justify-center items-center bg-white w-[22rem] h-[22rem]">
          <div className="mt-3">
            <h2 className="text-[20px] font-bold -ml-4">
              Min, 60% off | Outdoor lights
            </h2>
          </div>

          <div className="img p-8 -mt-5">
            <img src={lights} alt="lights" className="cursor-pointer" />
          </div>
          <div className="trial">
            <h2 className="-ml-32 text-xs text-[#36919F] hover:text-orange-600 cursor-pointer">
              Start 30-day Prime FREE trial &gt;
            </h2>
          </div>
        </div>
        <div className="second-item bg-white flex flex-col">
          <Product title="Revamp your home in style" Box1={Box1} />
        </div>
        <div className="third-item bg-white flex flex-col">
          <Product title="Up to 60% off | Styles for men" Box1={Box2} />
        </div>
        <div className="fourth-item bg-white h-[21.9rem]">
          <Product title="Starting ₹139 | Amazon brands" Box1={Box3} />
        </div>
        <div className="fifth-item bg-white h-[21.9rem] w-[22rem] hidden xl:block 2xl:hidden">
        <div className="mt-5 ml-8">
            <h2 className="text-[20px] font-bold">
            Shower Head Vitamin C Filters 
            </h2>
          </div>

          <div className="img p-8 -mt-3">
            <img src={juice} alt="juice" className="cursor-pointer" />
          </div>
        </div>
        
        <div className="sixth-item bg-white h-[21.9rem] w-[22rem] hidden xl:block 2xl:hidden">
        <div className="mt-5 ml-7">
            <h2 className="text-[20px] font-bold">
            Up to 60% off | Car, bike parts & accessories
            </h2>
          </div>

          <div className="img p-8 -mt-3">
            <img src={bike} alt="juice" className="cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="home-row2 grid 2xl:grid-cols-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-5 m-4 -mt-1">
        <div className="first-item bg-white flex flex-col h-[22rem]">
          <Product title="From ₹99 | Home Upgrade Hub" Box1={Box4} />
        </div>
        <div className="second-item bg-white flex flex-col">
          <Product title="Screen size | TVs Starting ₹6,999" Box1={Box5} />
        </div>
        <div className="third-item bg-white flex flex-col">
          <Product title="Under ₹499 | Friendly fashion" Box1={Box6} />
        </div>
        <div className="fourth-item bg-white flex flex-col">
          <Product title="Home Appliances | Up to 55% off" Box1={Box7} />
        </div>
        <div className="fifth-item bg-white h-[21.9rem] w-[22rem] hidden xl:block 2xl:hidden">
        <div className="mt-5 ml-7">
            <h2 className="text-[20px] font-bold">
            From ₹99 | Start your fitness journey
            </h2>
          </div>

          <div className="img p-8 -mt-3">
            <img src={fitness} alt="juice" className="cursor-pointer" />
          </div>
        </div>
        <div className="fifth-item bg-white h-[21.9rem] w-[22rem] hidden xl:block 2xl:hidden">
        <div className="mt-5 ml-7">
            <h2 className="text-[20px] font-bold">
            Watch on miniTV
            </h2>
          </div>

          <div className="img p-8 -mt-3">
            <img src={miniTV1} alt="minitv1" className="cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="home-row-3 bg-white s-full h-[17rem] lg:mx-4 mx-10 px-3 py-2 flex flex-col gap-2 overflow-x-hidden ">
          <h2 className="text-[22px] font-bold">
            Up to 50% off | Elevate your audio aesthetic with headphones and
            earphones{" "}
            <a href="https://www.amazon.in/s?k=headphones+earphones&crid=FC4JH4VVELZE&sprefix=headphones+earphones+bags%2Caps%2C310&ref=nb_sb_noss" target="_blank" className="text-xs text-[#36919F] hover:text-orange-600 cursor-pointer ml-5 hover:underline underline-offset-1">
              See all offers
            </a>
          </h2>
          <div className="images flex overflow-x-scroll overflow-y-hidden scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-gray-100 hover:scrollbar-thumb-slate-200 hover:cursor-pointer scrollbar-thumb-rounded-full">
            {img.map((val, index) => (
              <div key={index} className="min-w-64 flex justify-center mb-2">
                <img src={val.image} className="min-w-20 object-cover" />
              </div>
            ))}
          </div>
      </div>
      <div className="home-row4 grid 2xl:grid-cols-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-5 m-4">
          <div className="first-item bg-white flex flex-col h-[22rem]">
            <Product
              title="Shoes, jewellery & more"
              Box1={Box8}
            />
          </div>
          <div className="second-item bg-white flex flex-col">
            <Product
              title="From₹199 | Amazon brands"
              Box1={Box9}
            />
          </div>
          <div className="third-item bg-white flex flex-col px-4 w-[22rem]">
          <h2 className="text-[20px] font-bold mt-5 ml-4">Starting ₹99 | Indoor plants</h2>
          <div className="flex justify-center -mt-3">
          <img src={plant} alt="Plant"  className="p-4"/>
          </div>
          </div>
          <div className="fourth-item bg-white flex flex-col">
          <Product
              title="50% off | Top styles for her"
              Box1={Box10}
            />
          </div>
          <div className="fifth-item bg-white h-[21.9rem] w-[22rem] hidden xl:block 2xl:hidden">
        <div className="mt-5 ml-7">
            <h2 className="text-[20px] font-bold">
            Watch on miniTV
            </h2>
          </div>

          <div className="img p-8 -mt-3">
            <img src={miniTV2} alt="minitv2" className="cursor-pointer" />
          </div>
        </div>
        <div className="sixth-item bg-white h-[21.9rem] w-[22rem] hidden xl:block 2xl:hidden">
        <div className="mt-5 ml-7">
            <h2 className="text-[20px] font-bold">
            Watch on miniTV
            </h2>
          </div>

          <div className="img p-8 -mt-3">
            <img src={miniTV3} alt="minitv3" className="cursor-pointer" />
          </div>
        </div>
        </div>
    </div>
  );
};

export default Cards;
