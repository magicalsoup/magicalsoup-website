import React, {useState} from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons"
export default function NavBar() {
    // TODO make navbar responsive
    const [showSideBar, toggleShowSideBar] = useState(false);
    const [closeSideBar, toggleCloseSideBar] = useState(0); // for when the user clicks on the hamburger menu

    const clickedHamburger = () => {
        toggleShowSideBar(!showSideBar);
        toggleCloseSideBar(closeSideBar + 1);
        
    }

    const clickedLink = () => {
        toggleCloseSideBar(false);
        toggleShowSideBar(false);
    }

    const getSideBarName = () => {
        if(closeSideBar % 2 == 0 && closeSideBar > 0) { // clicked on hamburger menu to close side bar or clicked outside to close side bar
            return "slideOut fixed h-screen bg-zinc-800 w-2/3 z-50";
        }
        else if(showSideBar) { // user wants to open side bar
            return "slideIn fixed h-screen bg-zinc-800 w-2/3 z-50";
        }
        else if(!showSideBar) { // user is going to another link
            return "hidden"; // display: none
        }
    }

    return <>

        <div className="navbar-desktop flex top-0 fixed items-center justify-between z-50 py-4 px-8 lg:px-24 w-full top-0 left-0 bg-zinc-800">
            <Link href="/">
                <a className="font-bold font-body tracking-wide text-4xl text-white">James Su</a>
            </Link>
            <ul className="flex justify-center items-center">
                <Link href="/">
                    <a className="ml-5 px-3.5 py-1.5 text-white rounded-xl tracking-wide
                    transition-all duration-300 ease-in-out hover:text-zinc-800 hover:bg-white">HOME</a>
                </Link>

                <Link href="/#about">
                    <a className="ml-5 px-3.5 py-1.5 text-white rounded-xl tracking-wide
                    transition-all duration-300 ease-in-out hover:text-zinc-800 hover:bg-white">ABOUT</a>
                </Link>
                <Link href="/projects">
                    <a className="ml-5 px-3.5 py-1.5 text-white rounded-xl tracking-wide
                    transition-all duration-300 ease-in-out hover:text-zinc-800 hover:bg-white">PROJECTS</a>
                </Link>
                
                <Link href="/blog">
                    <a className="ml-5 px-3.5 py-1.5 text-white rounded-xl tracking-wide
                    transition-all duration-300 ease-in-out hover:text-zinc-800 hover:bg-white">BLOG</a>
                </Link>

                <Link href="#contact">
                    <a className="ml-5 px-3.5 py-1.5 text-white rounded-xl tracking-wide
                    transition-all duration-300 ease-in-out hover:text-zinc-800 hover:bg-white">CONTACT</a>
                </Link>
            </ul>
        </div>

        <div className="navbar-mobile flex top-0 fixed items-center justify-between z-50 py-4 px-8 lg:px-24 w-full top-0 left-0 bg-zinc-800">
            <div></div>
            <button onClick={() => clickedHamburger()}>
                <FontAwesomeIcon
                    icon={faBars}
                    className="text-4xl text-#fff"
                />
            </button>
        </div>
        <div className="navbar-mobile">
            <div className={getSideBarName()}>
                <div className="flex flex-col pt-8 pl-4">
                    <Link href="/" className="">
                        <a className=" cursor-default">
                            <div className="text-3xl ml-5 px-3.5 py-1.5 text-white rounded-xl tracking-wide 
                            inline-block cursor-pointer hover:underline
                            " onClick={() => clickedLink()}>HOME</div>
                        </a>
                    </Link>

                    <Link href="/#about">
                        <a className=" cursor-default">
                            <div className="text-3xl ml-5 px-3.5 py-1.5 text-white rounded-xl tracking-wide 
                            inline-block cursor-pointer hover:underline
                            " onClick={() => clickedLink()}>ABOUT</div>
                        </a>
                    </Link>
                    <Link href="/projects">
                        <a className=" cursor-default">
                            <div className="text-3xl ml-5 px-3.5 py-1.5 text-white rounded-xl tracking-wide 
                            inline-block cursor-pointer hover:underline
                            " onClick={() => clickedLink()}>PROJECTS</div>
                        </a>
                    </Link>
                    
                    <Link href="/blog">
                        <a className=" cursor-default">
                            <div className="text-3xl ml-5 px-3.5 py-1.5 text-white rounded-xl tracking-wide 
                            inline-block cursor-pointer hover:underline
                            " onClick={() => clickedLink()}>BLOG</div>
                        </a>
                    </Link>

                    <Link href="#contact">
                        <a className=" cursor-default">
                            <div className="text-3xl ml-5 px-3.5 py-1.5 text-white rounded-xl tracking-wide 
                            inline-block cursor-pointer hover:underline
                            " onClick={() => clickedLink()}>CONTACT</div>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    </>
}