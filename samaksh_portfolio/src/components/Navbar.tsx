import React from 'react';
import { Link } from 'react-router-dom';
import  { useState } from 'react';
import {menu,close} from '../assets/assets';
import { house } from '../assets/assets'; 
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Stars, useGLTF, PerspectiveCamera } from '@react-three/drei';

import {navLinks} from '../constants/index.js';
import * as THREE from 'three';
  
  


  
const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);
    const [active, setActive] = useState("");
   

  return (
    <div className='fixed bg-primary flex justify-around flex-row h-16 w-full'>
   <div className="hidden sm:flex flex-row justify-around items-center h-full w-4/5">
    <div className='h-4/5 w-1/6 bg-secondary rounded-xl'></div>
    <div className='h-4/5 w-1/6 bg-secondary rounded-xl'></div>
    <div className='h-4/5 w-1/6 bg-secondary rounded-xl'></div>
    <div className='h-4/5 w-1/6 bg-secondary rounded-xl'></div>
   </div>
   <div className='sm:hidden flex flex-row justify-end items-center w-full '>
    <img className=" p-4"src={!sidebar ? menu : close} onClick={() => setSidebar(!sidebar)}></img>
    <div className={`${!sidebar ? 'hidden' : 'class-if-flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}>
        <ul className='list-none flex justify-end items-start flex-col gap-4 '>
            {navLinks.map((link) => (
                <li key={link.id} className={`${active===link.title? "text-black": "text-secondary"} text-lg font-bold`}>
                    <a href={`#${link.id}`} >{link.title}</a>
                </li>
            ))}
        </ul>

    </div>
    </div>
    
   </div>

  );
};

export default Navbar;