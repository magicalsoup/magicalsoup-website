import React from 'react';
import Link from 'next/link';
export default function NavBar() {
    // TODO make navbar responsive
    // maybe no box shadow?
    return <>
        <div className="flex top-0 fixed items-center justify-between z-50 py-8 px-24 w-full top-0 left-0 backdrop-blur-sm">
            <Link href="/">
                <a className="font-bold font-body tracking-wide text-4xl text-white">James Su</a>
            </Link>
            <ul className="flex justify-center items-center">
                <Link href="#about">
                    <a className="ml-5 px-3.5 py-1.5 text-white rounded-xl 
                    transition-all duration-300 ease-in-out hover:text-#2b1055 hover:bg-white">About</a>
                </Link>
                <Link href="/projects">
                    <a className="ml-5 px-3.5 py-1.5 text-white rounded-xl 
                    transition-all duration-300 ease-in-out hover:text-#2b1055 hover:bg-white">Projects</a>
                </Link>
                
                <Link href="/Blog">
                    <a className="ml-5 px-3.5 py-1.5 text-white rounded-xl 
                    transition-all duration-300 ease-in-out hover:text-#2b1055 hover:bg-white">Blog</a>
                </Link>

                <Link href="/">
                    <a className="ml-5 px-3.5 py-1.5 text-white bg-transparent rounded-xl 
                    transition-all duration-300 ease-in-out hover:text-#2b1055 hover:bg-white">Resume</a>
                </Link>

                <Link href="/Contact">
                    <a className="ml-5 px-3.5 py-1.5 text-white rounded-xl 
                    transition-all duration-300 ease-in-out hover:text-#2b1055 hover:bg-white">Contact</a>
                </Link>
            </ul>
        </div>
    </>
}