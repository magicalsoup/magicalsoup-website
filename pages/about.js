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
    </Head>
    <NavBar></NavBar>
    <main>
      {/* TODO make padding responsive*/}
      <div className="flex flex-col w-full min-h-screen items-center space-y-16 pt-24">
        <div className="flex flex-col w-full items-center space-y-4">
          <p className="text-5xl font-bold" id="body-text">About Me.</p>
          <p className="text-xl text-gray-600" id="body-text">Who am I and What do I Do?</p>
        </div>
        <div className="w-full md:w-2/3 px-8 py-32 space-y-8 bg-[#f5f9ff] rounded-3xl">
          <img src="..\images\profile_pic.png" className="max-w-xs lg:max-w-sm float-right p-4 rounded-full"/>
          <p className="text-xl" id="body-text">
            Hi, my name is <a className="text-teal-400 text-xl font-bold">James Su</a>. I am an aspiring 17 year old student interested in competitive programming and web development. 
            You can view my progress through my blogs and my projects that are on this site! Currently I'm looking at other branches
            of the computing field, such as servers, linux systems, and security. Join me on my journey!
          </p>
          <p className="text-xl" id="body-text">
            Currently I'm finishing my highschool education at Bayview Secondary School and the <a className="font-bold">International Baccalaureate</a> program. 
            But feel free to contact me for any interesting ideas!
          </p>
          <div className="p-2">
            <a 
              className="text-3xl py-2 px-8 rounded-lg bg-emerald-200 hover:bg-emerald-400 hover:text-white transition-all duration-300 ease-in-out" 
              id="body-text" href="./resume/James Su Resume.pdf" target="_blank">
              Resume
            </a>
          </div>
        </div>
        <div className="flex flex-col w-full h-full px-4 py-24 bg-[#f5f9ff] border-t-2">
          <div className="sm:px-6 lg:px-24 space-y-4 py-16">
            <p className="text-center sm:text-left text-3xl font-bold" id="body-text">Tools and Frameworks that I like to use.</p>
            <p className="text-center sm:text-left text-md lg:text-xl w-full lg:w-4/5" id="body-text">Below are a few links to tools and frameworks that I've stumbled upon in my journey and have been helpful over the years.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
              {ToolsData.map((item) =>
                <ToolCard props={item}></ToolCard>
              )}
            </div>
          </div>
          <p className="text-3xl font-bold text-center" id="body-text">Where you can find me.</p>
          <div className="flex flex-wrap w-full justify-center">
            {PlatformData.map((item, index) => 
              <Card props={item} number={index}/>
            )}
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