import React, {useState} from 'react';
import Link from 'next/link';
export default function NavBar() {
    
    const [navBar, toggleNavBar] = useState(false);

    return <>
        <div className="fixed right-0 pt-4 pr-4 sm:pr-10 sm:pt-10 z-50">
            <div id="hamburger" className={navBar? "open" : ""} onClick={() => {toggleNavBar(!navBar)}}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
        </div>
        <div className={navBar? "fixed w-screen h-screen bg-black opacity-80 z-40": "h-0 hidden"}>
          <div className="flex flex-col h-full justify-center items-center text-white text-3xl sm:text-6xl space-y-8 select-none" id="body-text">
            <Link href="/" >
                <a className="font-bold transition-all duration-200 ease-in-out hover:text-pink-500" onClick={() => {toggleNavBar(!navBar)}}>Home.</a>
            </Link>
            <Link href="/about">
                <a className="font-bold transition-all duration-200 ease-in-out hover:text-pink-500" onClick={() => {toggleNavBar(!navBar)}}>About.</a>
            </Link>
            <Link href="/projects">
                <a className="font-bold transition-all duration-200 ease-in-out hover:text-pink-500" onClick={() => {toggleNavBar(!navBar)}}>Projects.</a>
            </Link>
            <Link href="/blog">
                <a className="font-bold transition-all duration-200 ease-in-out hover:text-pink-500" onClick={() => {toggleNavBar(!navBar)}}>Blog.</a>
            </Link>
            <Link href="/contact">
                <a className="font-bold transition-all duration-200 ease-in-out hover:text-pink-500" onClick={() => {toggleNavBar(!navBar)}}>Contact.</a>
            </Link>
          </div>
        </div>
        <style jsx>
        {`
        #hamburger {
            width: 60px;
            height: 45px;
            position: relative;
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
            -webkit-transition: .5s ease-in-out;
            -moz-transition: .5s ease-in-out;
            -o-transition: .5s ease-in-out;
            transition: .5s ease-in-out;
            cursor: pointer;
          }
          
          #hamburger span {
            display: block;
            position: absolute;
            height: 9px;
            width: 100%;
            border-radius: 9px;
            border-width: 3px;
            border-color: black;
            background-color: white;
            opacity: 1;
            left: 0;
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
            -webkit-transition: .2s ease-in-out;
            -moz-transition: .2s ease-in-out;
            -o-transition: .2s ease-in-out;
            transition: .2s ease-in-out;
          }
        
          #hamburger span:nth-child(1) {
            top: 0px;
          }
          
          #hamburger span:nth-child(2), #hamburger span:nth-child(3) {
            top: 18px;
          }
          
          #hamburger span:nth-child(4) {
            top: 36px;
          }
          
          #hamburger.open span:nth-child(1) {
            top: 18px;
            width: 0%;
            left: 50%;
            background: white;
          }
          
          #hamburger.open span:nth-child(2) {
            -webkit-transform: rotate(45deg);
            -moz-transform: rotate(45deg);
            -o-transform: rotate(45deg);
            transform: rotate(45deg);
            background: white;
          }
          
          #hamburger.open span:nth-child(3) {
            -webkit-transform: rotate(-45deg);
            -moz-transform: rotate(-45deg);
            -o-transform: rotate(-45deg);
            transform: rotate(-45deg);
            background: white;
          }
          
          #hamburger.open span:nth-child(4) {
            top: 18px;
            width: 0%;
            border-width: 0px;
            left: 50%;
            background: white;
          }
        `}
        </style>
    </>
}