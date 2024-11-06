import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/Logo.png";
import contact from "../assets/Vector.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi2";

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);


    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }


    return (
        <div className=" font-google">
            <div className=" flex items-center justify-around  px-6 py-6">
                <img src={logo} className=" " />

                <div className=" flex items-center relative">
                    <div onClick={toggleDropdown} className=" flex items-center cursor-pointer">
                    <img src={contact} />
                    <p className=" ml-2">Register/Sign in</p>
                    <RiArrowDropDownLine />
                    </div>
                        {isDropdownOpen && (
                            <div className=" absolute top-full mt-2 w-[150px] bg-white text-center border-[#C1C1C1] border-2"  >
                                <ul className=" py-2">
                                    <li className=" border-b-2 border-[#C1C1C1] pb-1">
                                        <a className=" cursor-pointer">Register</a>
                                     
                                    </li>
                                    <li className=" pt-2 cursor-pointer">   <a c>Sign In</a></li>
                                </ul>
                            </div>
                        )}
                </div>

                <div className=" grid grid-cols-6">
                    <a>Home</a>
                    <a>Men</a>
                    <a>Women</a>
                    <a>Kids</a>
                    <a>Accessories</a>
                    <a
                        className=" flex items-center ml-5">
                        More <RiArrowDropDownLine />
                    </a>
                </div>

                <div>
                    <input className=" border-2 border-black" />
                </div>

                <div className=" flex items-center">
                    <img />
                    <p className=" flex items-center">
                        EN/Currency <RiArrowDropDownLine />{" "}
                    </p>
                </div>
                <div>
                    <HiOutlineShoppingBag />
                </div>
            </div>
        </div>
    );
}
