import React from 'react';
import Head from 'next/head';
import Card from '../components/card';
import HobbyData from '../data/hobbyData';
import NavBar from '../components/navbar';
import Link from 'next/link';
export default function Home() {
  /*
            <div className="flex justify-center items-center flex-wrap p-16 bg-cyan-400">
                {HobbyData.map((item) =>
                  <Card props={item}></Card>
                )}
            </div>
      */
  return (
    <>
      <Head>
        <title>James Su</title>
      </Head>
      <NavBar></NavBar>
      <main>
        <div className="absolute top-0 bg-blossom w-full h-screen bg-cover bg-fixed">
          <div className="flex w-full h-screen justify-center items-center">
            <div className="flex justify-center items-center border-8 border-#fff h-1/5 w-1/2 md:h-1/3 backdrop-blur-md" href="#info">
              <a className="explore-btn font-body text-2xl sm:text-6xl lg:text-7xl" href="#info">
                <div className="explore-text">
                  Portfolio
                </div>
              </a>
            </div>                
          </div>

          <div className="flex flex-col items-center space-y-24 relative h-full bg-#2b1055 p-20" id="info">
            <div className="flex flex-col">
              <div>
                <h2 className="text-5xl font-bold text-#fff py-4 font-body">Hi, I'm James</h2>
              </div>

              <div className="grid grid-rows-1 grid-cols-3 pt-24">
                {HobbyData.map((item) => 
                  <Card props={item}></Card>
                )}
              </div>
              
            </div>
          </div>
          <div className="relative bg-blossom w-full h-screen bg-cover bg-fixed">
            <div>{/*for #contact */}</div>
          </div>
        </div>
      </main>
    </>
  )
}
