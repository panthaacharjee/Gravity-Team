'use client'
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Market from "@/assets/market.png"
import Arrow from "@/assets/arrow.png"
import Exchange from "@/assets/exchange.png"
import System from "@/assets/system.png"
import Next from "@/assets/next.png"
import Prev from "@/assets/prev.png"
import Bitkub from "@/assets/bitkub.png"
import Shadow from "@/assets/shadow.png"

/* ======= COIN ========= */
import binance from "@/assets/coin/binance.png"
import bitbank from "@/assets/coin/bitbank.png"
import bitstamp from "@/assets/coin/bitstamp.png"
import coinbase from "@/assets/coin/coinbase.png"




export default function  Home() { 
 
return (
   <div>
      <div className="container mx-auto text-center py-20">
          <p className="text-3xl md:text-5xl font-semibold text-white">Balancing<br/>Crypto Markets</p>
          <div className="w-11/12 sm:w-7/12 md:w-5/12 mx-auto">
            <p className="mt-8 text-sm font-medium">Our fully automated proprietary quantitative trading software provides 24/7 liquidity to 170+ crypto assets across 25+ centralized spot and derivative crypto exchanges.</p>
          </div>
          <button className="bg-red-400 px-4 py-1 rounded-md mt-6 text-white uppercase bg-gradient-to-r from-[#5FA4E6] to-[#D2AB67]">Get in touch</button>
      </div>
      <div className="container mx-auto py-10">
        <p className="text-2xl md:text-4xl leading-relaxed font-semibold text-white mb-3 text-center">About Gravity Team</p>
        <div className="w-11/12 sm:w-8/12 mx-auto">
          <p className="text-center">At Gravity Team, we are on the mission to balance the supply and demand across crypto markets worldwide. We are a crypto native market maker founded by traders, developers, and innovators who are strong believers and supporters of the future of decentralization and digital assets.</p>
        </div>
        <div className="flex flex-col text-center items-center mt-10 text-white">
          <div className="w-10/12 flex flex-col md:flex-row ">
            <div className="w-full md:w-3/12 border-b-[1px] md:border-r-[1px] border-[#5FA4E6] py-10 hover:bg-gradient-to-r hover:from-[#5FA4E6] hover:to-[#D2AB67]">
              <p className="text-2xl font-medium mb-3">~$100 billion</p>
              <p>cumulative trading <br/>volume to date</p>
            </div>
            <div className="w-full md:w-3/12 border-b-[1px] md:border-r-[1px] border-[#5FA4E6] py-10 hover:bg-gradient-to-r hover:from-[#5FA4E6] hover:to-[#D2AB67]">
              <p className="text-2xl font-medium mb-3">0.8%</p>
              <p>of the global crypto spot<br/> trading volume</p>
            </div><div className="w-full md:w-3/12 border-b-[1px] md:border-r-[1px] border-[#5FA4E6] py-10 hover:bg-gradient-to-r hover:from-[#5FA4E6] hover:to-[#D2AB67]">
              <p className="text-2xl font-medium mb-3">~30</p>
              <p>Gravity Teammates <br/>(& growing)</p>
            </div><div className="w-full md:w-3/12 border-b-[1px] md:border-[#5FA4E6] py-10 hover:bg-gradient-to-r hover:from-[#5FA4E6] hover:to-[#D2AB67]">
              <p className="text-2xl font-medium mb-3">25+</p>
              <p>leading global and<br/> local crypto exchanges</p>
            </div>
          </div>
          <div className="w-10/12 flex flex-col md:flex-row">
            <div className="w-full md:w-3/12 border-b-[1px] md:border-r-[1px] border-[#5FA4E6] py-10 hover:bg-gradient-to-r hover:from-[#5FA4E6] hover:to-[#D2AB67]">
              <p className="text-2xl font-medium mb-3">2017</p>
              <p>start, crypto-natives</p>
            </div>
            <div className="w-full md:w-3/12 border-b-[1px] md:border-r-[1px] border-[#5FA4E6] py-10 hover:bg-gradient-to-r hover:from-[#5FA4E6] hover:to-[#D2AB67]">
              <p className="text-2xl font-medium mb-3">1,200+</p>
              <p>crypto-asset pairs</p>
            </div><div className="w-full md:w-3/12 border-b-[1px] md:border-r-[1px] border-[#5FA4E6] py-10 hover:bg-gradient-to-r hover:from-[#5FA4E6] hover:to-[#D2AB67]">
              <p className="text-2xl font-medium mb-3">24/7</p>
              <p>liquidity</p>
            </div><div className="w-full md:w-3/12 border-b-[1px] md:border-[#5FA4E6] py-10 hover:bg-gradient-to-r hover:from-[#5FA4E6] hover:to-[#D2AB67]">
              <p className="text-2xl font-medium mb-3">5 billion+</p>
              <p>trades done to date</p>
            </div> 
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-16">
        <p className="text-2xl md:text-4xl leading-relaxed font-semibold text-white mb-3 text-center">Crypto Market Making</p>
        <div className="w-11/12 md:w-6/12 mx-auto">
          <p className="text-center">We are a global crypto liquidity provider and algorithmic market maker. We trade digital assets listed on Centralized Exchanges in over 15 countries worldwide.</p>
        </div>
        <div className="flex justify-center mt-20">
          <div className="w-10/12 flex flex-col md:flex-row md:justify-between items-center">
            <div className="">
                <p className="text-2xl text-white font-medium">Market Making for<br/> Crypto Projects</p>
                <p className="mt-4 text-white font-medium text-md">Accelerate your token’s journey by<br/> boosting its liquidity</p>
                <p className="mt-4">We invest in building long-term,<br/> sustainable relationships and support our<br/> projects in their growth journey with our<br/> services, industry expertise and network.</p>
                <div className="flex items-center mt-4 cursor-pointer">
                  <p className="border-b-[1px]">Learn more</p>
                  <Image src={Arrow} alt="arrow" className="ml-3 h-3 w-3"/>
                </div>
            </div>
            <div className="mt-10">
              <Image src={Market} alt="Market"/>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-16">
        <div className="flex justify-center mt-20">
          <div className="w-10/12 flex flex-col-reverse md:flex-row justify-between items-center">
            <div className="w-full md:w-6/12">
              <Image src={Exchange} alt="Market" className="mt-20 md:mt-0"/>
            </div>
            <div>
                <p className="text-2xl text-white font-medium">Market Making for<br/> Crypto Projects</p>
                <p className="mt-4 text-white font-medium text-md">Accelerate your token’s journey by<br/> boosting its liquidity</p>
                <p className="mt-4">We invest in building long-term,<br/> sustainable relationships and support our<br/> projects in their growth journey with our<br/> services, industry expertise and network.</p>
                <div className="flex items-center mt-4 cursor-pointer">
                  <p className="border-b-[1px]">Learn more</p>
                  <Image src={Arrow} alt="arrow" className="ml-3 h-3 w-3"/>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto relative hidden md:block">
        <Image src={System} alt="System" className="h-96 w-96 absolute right-11"/>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between w-10/12 md:w-7/12 mt-28 z-40">
        <div>
            <p className="text-2xl md:text-4xl font-bold text-white leading-relaxed">Our Partners <br className="hidden md:block"/>& Friends</p>
        </div>
        <div className="text-center mt-20">
          <div className="flex items-start">
            <div className="bg-black px-6 py-5 rounded-lg">
              <Image src={binance} alt="coin"/>
              <p className="text-md mt-2">Binance</p>
            </div>
            <div className="ml-8 mt-8 bg-black px-6 py-5 rounded-lg">
              <Image src={bitbank} alt="coin"/>
              <p className="text-md mt-2">Bitbank</p>
            </div>
          </div>
          <div className="flex items-start mt-8">
            <div className="bg-black px-6 py-5 rounded-lg">
              <Image src={bitstamp} alt="coin"/>
              <p className="text-md mt-2">Bitstamp</p>
            </div>
            <div className="ml-8 mt-8 bg-black px-6 py-5 rounded-lg">
              <Image src={coinbase} alt="coin"/>
              <p className="text-md mt-2">Coinbase</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-16">
        <p className="text-2xl md:text-4xl leading-relaxed font-semibold text-white mb-3 text-center">We are in a good company</p>
       <div className="w-11/12 md:w-6/12 mx-auto">
         <p className="text-center">Our partnerships have delivered great value to our projects and we’re happy to share some of their feedback below</p>
       </div>
      </div>
      <div className="container mx-auto mt-10">
          <div className="flex flex-col items-center" >
            <div className="flex">
                <Image className="h-10 w-10 cursor-pointer" src={Prev} alt="Prev" />
                <Image className="h-10 w-10 ml-5 cursor-pointer" src={Next} alt="Next"/>
            </div>
            <Carousel
            className="w-full md:w-7/12" showArrows={false} showStatus={true} autoPlay={true} infiniteLoop={true} showIndicators={false} useKeyboardArrows={true}>
                  <div className="py-10 px-20 text-white">
                      {/* <img src="assets/1.jpeg" /> */}
                      <p className="text-sm">Since 2019, Gravity team has been an astounding market maker for Bitkub. They have proven themselves to be one of the most consistent, committed and driven market makers on our exchange. Gravity Team has contributed high-quality volume and has proven to be very reliable and trustworthy partner. We strongly advocate Gravity Team as they have been an indispensable part of our market-making team.</p>
                      <p className="mt-4 font-semibold">Atthakrit Chimplapibul</p>
                      <div className="hidden md:flex items-center justify-center">
                        <p>Co-founder & CEO of Bitkub</p>
                        <div>
                          <Image className="h-4 w-4 mt-1 ml-5" src={Bitkub} alt="Bitkub"/>
                        </div>
                      </div>
                  </div>
                  <div className="py-10 px-20 text-white">
                      {/* <img src="assets/2.jpeg" /> */}
                      <p className="text-sm">Since 2019, Gravity team has been an astounding market maker for Bitkub. They have proven themselves to be one of the most consistent, committed and driven market makers on our exchange. Gravity Team has contributed high-quality volume and has proven to be very reliable and trustworthy partner. We strongly advocate Gravity Team as they have been an indispensable part of our market-making team.</p>
                      <p className="mt-4 font-semibold">Atthakrit Chimplapibul</p>
                  </div>
                  <div className="py-10 px-20 text-white">
                      {/* <img src="assets/3.jpeg" /> */}
                      <p className="text-sm">Since 2019, Gravity team has been an astounding market maker for Bitkub. They have proven themselves to be one of the most consistent, committed and driven market makers on our exchange. Gravity Team has contributed high-quality volume and has proven to be very reliable and trustworthy partner. We strongly advocate Gravity Team as they have been an indispensable part of our market-making team.</p>
                  </div>
            </Carousel>
          </div>
      </div>
      <div className="container mx-auto flex justify-center m-10">
       <div className=" w-full md:w-9/12 flex flex-col md:flex-row items-center md:justify-between">
          <div className="w-full md:w-4/12 relative">
              <Image className="hidden md:block absolute top-[-60px] right-20" src={Shadow} alt="Shadow"/>
              <p className="text-2xl md:text-4xl text-white font-semibold text-center">Join <br className="hidden md:block"/> Gravity Team</p>
          </div>
          <div className="w-full md:w-8/12 px-4 md:px-0 mt-5 md:mt-0">
            <p>Join our community of innovators, problem solvers and owners who apply scientific discovery techniques to make crypto markets a better place for everyone.</p>
            <p className="mt-4">As we emphasize it in our name – Gravity Team, we are a team. A team of bright, talented people, each masters of their specialty, curious about the world and eager to solve the new exciting cryptocurrency market problems, build cool stuff and have fun whilst doing so!</p>
            <div className="flex items-center mt-4">
              <p>Learn more about working with us </p>
              <Image src={Arrow} alt="arrow" className="ml-3 h-3 w-3"/>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center py-20">
          <p className="text-2xl md:text-6xl leading-relaxed font-semibold text-white">Contact Us</p>
          <div className="w-11/12 md:w-6/12 mx-auto">
            <p className="mt-8 text-md font-medium">We are always open to discuss new value-adding partnerships. Do reach out if you are an exchange or a project looking for liquidity; an algorithmic trader or a software developer looking to improve the markets with us or just have a great idea you can’t wait to share with us!</p>
          </div>
          <button className="bg-red-400 px-4 py-1 rounded-md mt-6 text-white uppercase bg-gradient-to-r from-[#5FA4E6] to-[#D2AB67]">Get in touch</button>
      </div>
   </div>
  );
}


