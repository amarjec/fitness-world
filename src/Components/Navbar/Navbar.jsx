import React from 'react'
import { IoFitness } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { MdAccountCircle } from "react-icons/md";
import { CiMenuFries } from "react-icons/ci";





const Navbar = () => {
  return (
    <>
    <div className='w-full h-24 flex justify-between items-center px-6'>
        <left className='w-[32%] flex justify-start items-center gap-3'>
            <span className='text-xl'><IoFitness/></span>
            <h1 className='text-2xl font-light tracking-tighter'>FITNESS WORLD</h1>
        </left>
        <center className='w-[36%] h-10 bg-[#1B1B1B] rounded-full border-slate-600 border-[.5px] flex justify-between items-center px-8 font-bold leading-tighter'>
        <a href="">WORKOUT</a>
        <a href="">CHATBOX</a>    
        <a href="">TRAINER</a>  
        <a href="">COMMUNITY</a>      
        </center>
        <right className='w-[32%] flex justify-end items-center gap-5'>
            
            <FiSearch className='w-7 h-7'/>
            <MdAccountCircle className='h-9 w-9'/>
            <CiMenuFries className='w-7 h-7'/>

        </right>
    </div>
    </>
  )
}

export default Navbar