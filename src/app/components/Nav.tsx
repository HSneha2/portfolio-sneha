'use client'
import { useEffect, useState } from 'react';
import Image from '../../../node_modules/next/image';
import Link from "../../../node_modules/next/link";

const Nav = () => {
    const [header, setHeader] = useState(true)

const scrollHeader = () =>{
    if(window.scrollY >= 20){
        setHeader(true)
    }else{
        setHeader(false)
    }
}

useEffect(()=>{
    window.addEventListener('scroll', scrollHeader);

    ()=>{
        window.addEventListener('scroll', scrollHeader)
    }
})

  return (
    <div className={header? "fixed w-[100%] bg-[transparent] h-[12%]" : "fixed w-[100%] bg-[blue] h-[12%]"}>
        <div className='header flex w-[80%] justify-between m-auto py-[20px]'>
          <div className='logo'>
            <Image src="/LogoNew.png" alt="logo" width={100} height={100}/>
          </div>
          <div className='menu'>
            <nav>
              <ul className='flex gap-[20px]'>
                <li><Link href='home'>Home</Link></li>
                <li><Link href='home'>About</Link></li>
                <li><Link href='home'>Subjects</Link></li>
              </ul>
            </nav>
          </div>
        </div>
  
    </div>
  );
};

export default Nav;
