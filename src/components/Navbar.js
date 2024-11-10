import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/Logo.png";
import contact from "../assets/Vector.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);


    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }
    const toggleDropdown1 = () => {
        setIsDropdownOpen1(!isDropdownOpen1);
    }
    const toggleDropdown2 = () => {
        setIsDropdownOpen2(!isDropdownOpen2);
    }


    return (
        <div className=" font-google">
           
            <div className=" flex items-center justify-around  px-6 py-6">
<div className=" flex xl:hidden">
                <div className=" relative">
            <div onClick={toggleDropdown2} className="  text-2xl cursor-pointer"> <FaBars /> </div>
            {isDropdownOpen2 && (
                        <div className=" absolute top-full mt-2 w-[150px] bg-white text-center border-[#C1C1C1] border-2"  >
                            <ul className="">
                                <li className=" border-b-2 border-[#C1C1C1] py-2">
                                    <a className=" cursor-pointer">Register</a>

                                </li>
                                <li className=" py-2 cursor-pointer">   <a c>Sign In</a></li>
                            </ul>
                        </div>
                    )}
            </div>
            </div>
                <img src={logo} className=" " />

<div className=" hidden xl:flex">
                <div className=" flex items-center relative ">
                    <div onClick={toggleDropdown} className=" flex items-center cursor-pointer">
                        <img src={contact} />
                        <p className=" ml-2">Register/Sign in</p>
                        <RiArrowDropDownLine />
                    </div>
                    {isDropdownOpen && (
                        <div className=" absolute top-full mt-2 w-[150px] bg-white text-center border-[#C1C1C1] border-2"  >
                            <ul className="">
                                <li className=" border-b-2 border-[#C1C1C1] py-2">
                                    <a className=" cursor-pointer">Register</a>

                                </li>
                                <li className=" py-2 cursor-pointer">   <a c>Sign In</a></li>
                            </ul>
                        </div>
                    )}
                </div>
                </div>

<div className=" hidden xl:flex">
                <div className=" grid grid-cols-6">
                    <a className=" hover:font-bold cursor-pointer">Home</a>
                    <a className=" hover:font-bold cursor-pointer">Men</a>
                    <a className=" hover:font-bold cursor-pointer">Women</a>
                    <a className=" hover:font-bold cursor-pointer">Kids</a>
                    <a className=" hover:font-bold cursor-pointer">Accessories</a>
                    <div>
                        <div className=" relative">
                            <a onClick={toggleDropdown1}
                                className=" flex items-center ml-5 hover:font-bold cursor-pointer">
                                More <RiArrowDropDownLine />
                            </a>
                        </div>
                        {isDropdownOpen1 && (
                            <div className=" absolute mt-3 bg-white border-[#C1C1C1] border-2 w-[165px]">
                                <ul className=" font-medium">
                                    <li className=" text-black  border-b-2 border-[#C1C1C1] py-2 px-3">
                                        <a> Perfume </a>
                                    </li>
                                    <li className=" text-black  border-b-2 border-[#C1C1C1] py-2 px-3">
                                        <a> Jewelry </a>
                                    </li>
                                    <li className=" text-black  border-b-2 border-[#C1C1C1] py-2 px-3">
                                        <a> Gym Wears </a>
                                    </li>
                                    <li className=" text-black  border-b-2 border-[#C1C1C1] py-2 px-3">
                                        <a> Vintage Wears </a>
                                    </li>
                                    <li className=" text-black  border-b-2 border-[#C1C1C1] py-2 px-3">
                                        <a> Pyjamas </a>
                                    </li>
                                    <li className=" text-black  border-b-2 border-[#C1C1C1] py-2 px-3">
                                        <a> Sport Wears </a>
                                    </li>
                                    <li className=" text-black px-3 py-2 ">
                                        <a> Slippers </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
                </div>
                <div className="relative w-full max-w-xs">
        
            <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            
        
            <input
                type="text"
                className="w-full pl-10 pr-4 py-2 border-2 border-black rounded-3xl focus:outline-none"
                placeholder="Search"
            />
{/* <div className=" bg-black px-4 absolute  right-3 top-1/2 -translate-y-1/2 py-0 my-0">
<CiSearch className=" text-black" />
</div> */}
        </div>

<div className=" hidden md:flex">
                <div className=" flex items-center">
                    <img />
                    <p className=" flex items-center">
                        EN/Currency <RiArrowDropDownLine />
                    </p>
                </div>
                </div>

<div className=" relative">
<HiOutlineShoppingBag className=" absolute left-4 text-white top-1/2 -translate-y-1/2" />
                <div className=" w-[47px] h-[47px] rounded-full bg-black "> </div>
                   
               
                </div>
            </div>
        </div>
    );
}
