import React from 'react';
import Head from 'next/head';
import Card from '../components/card';
import HobbyData from '../data/hobbyData';
import NavBar from '../components/navbar';
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
              <a href="#info" className="z-50 text-3xl text-#fff py-2 px-4 rounded-full bg-transparent 
              transition-all duration-300 ease-in-out">Explore</a>
          </div>

          <div className="flex flex-col items-center space-y-4 relative h-full bg-#2b1055 p-20" id="info">

            <div className="flex flex-col">
              <h2 className="text-5xl font-bold text-#fff py-4">Who I am</h2>
              <p1 className="text-base text-white">
                des gens de cultures differentes ont la chance de partager leurs cultures et traditions, donc les gens peuvent comprendre cultures differentes et  s'amuser en apprenant le grand monde. cela contribuera a faire de l'ecole un endroit plus inclusif.
              </p1>
            </div>

          </div>
          <div className="relative bg-blossom w-full h-screen bg-cover bg-fixed"></div>
        </div>
      </main>
    </>
  )
}
