"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname()
  return (
    <div className="bg-[#F1F2ED]">
      <div className="-max-w-300 mx-auto">
      <div className="navbar bg-[#F1F2ED]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn bg-[#213D34] lg:hidden mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-[#213D34] rounded-box z-1 mt-3 w-52 p-2 shadow gap-4 text-[#F1F2ED] font-semibold"
            >
              <Link href={"/"} className="ml-4">Home</Link>
            <Link href={"/animals"} className="ml-4">Animals</Link>
            </ul>
          </div>
          <a className="text-2xl font-bold text-[#213D34]">QurbaniHat</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6 text-[#213D34] font-semibold">
            <Link href={"/"} className={`px-3 py-1 rounded ${
          pathname === "/" ? "bg-[#213D34] text-white" : ""
        }`}>Home</Link>
            <Link href={"/animals"} className={`px-3 py-1 rounded ${
          pathname === "/animals" ? "bg-[#213D34] text-white" : ""
        }`}>Animals</Link>
            
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <Link href={"/login"}><button className="btn">Login</button></Link>
          <Link href={"/register"}><button className="btn bg-[#213D34]">Register</button></Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
