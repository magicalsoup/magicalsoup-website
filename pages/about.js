import React from "react";
import Head from 'next/head';
import NavBar from '../components/navbar';
import Card from "../components/card";
import PlatformData from "../data/platformData";
import ToolsData from "../data/toolsData";
import ToolCard from "../components/toolCard";
import Footer from '../components/footer';

export default function() {
    return (
    <>
    <Head>
        <title>About James</title>
        <link rel="Soup Icon" href="../soup-icon.png"/>
    </Head>
    <NavBar currentPage={2}></NavBar>
    <main>
      <div className="flex flex-col w-full min-h-screen items-center space-y-16 pt-24">
        <div className="flex flex-col w-full items-center space-y-4">
          <p className="text-5xl font-bold" id="body-text">About Me.</p>
          <p className="text-xl text-gray-600" id="body-text">Who am I and What do I Do?</p>
        </div>
        <div className="w-full px-8 md:px-24 pb-32 h-96 space-y-8 bg-[#f5f9ff] rounded-3xl">
          <img src="..\images\profile_pic.png" className="max-w-xs lg:max-w-sm float-right p-4 rounded-full"/>
          <p className="text-xl" id="body-text">
            I am an aspiring 18 year old student interested in competitive programming and web development. 
            You can view my progress through my blogs and my projects that are on this site! Currently I'm looking at other branches
            of the computing field, such as back-end infrastructure, linux systems, and databases. Join me on my journey!
          </p>
          
          <div className="p-2">
            <a 
              className="text-3xl py-2 px-8 rounded-lg bg-emerald-200 hover:bg-emerald-400 hover:text-white transition-all duration-300 ease-in-out" 
              id="body-text" href="google.com/" target="_blank">
              Resume
            </a>
          </div>
        </div>
      </div>
      <Footer></Footer>
      <style jsx> {`
      `}  
      </style>
    </main>
    </>)
}