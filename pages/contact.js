import React from 'react';
import Head from 'next/head';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
export default function Home() {
  return (
    <>
      <Head>
        <title>Contact James</title>
        <link rel="Soup Icon" href="../soup-icon.png"/>
      </Head>
      <NavBar currentPage={5}></NavBar>
      <main>
        <div className="flex flex-col w-full min-h-screen items-center space-y-16 py-24">
            <div className="flex flex-col w-full items-center space-y-4">
            <p className="text-6xl font-bold" id="body-text">Contact.</p>
            <p className="text-xl text-gray-600" id="body-text">Let's hang out!</p>
            </div>
            <div className="grid grid-row-4 md:grid-row-2 md:grid-cols-2 gap-y-16 gap-x-80" id="body-text">
                <div className="flex flex-col items-center  space-y-2">
                    <a className="text-4xl font-bold transition-all duration-200 ease-in-out hover:text-teal-500" href="mailto:amagicalsoup@gmail.com">Email</a>
                    <h2 className="text-xl">Send me something!</h2>
                    <a className="text-xl font-bold transition-all duration-200 ease-in-out hover:text-teal-500" href="mailto:amagicalsoup@gmail.com">amagicalsoup@gmail.com</a>
                </div>
                <div className="flex flex-col items-center space-y-2">
                    <a className="text-4xl font-bold transition-all duration-200 ease-in-out hover:text-teal-500" href="https://github.com/magicalsoup">GitHub</a>
                    <h2 className="text-xl">Fork my repos!</h2>
                    <a className="text-xl font-bold transition-all duration-200 ease-in-out hover:text-teal-500" href="https://github.com/magicalsoup">/magicalsoup</a>
                </div>
                <div className="flex flex-col items-center space-y-2">
                    <a className="text-4xl font-bold transition-all duration-200 ease-in-out hover:text-teal-500" href="https://www.linkedin.com/in/james-su-2093351a4/">LinkedIn</a>
                    <h2 className="text-xl">Hire me!</h2>
                    <a className="text-xl font-bold transition-all duration-200 ease-in-out hover:text-teal-500" href="https://www.linkedin.com/in/jsuu/">/jsuu</a>
                </div>
                <div className="flex flex-col items-center space-y-2">
                    <a className="text-4xl font-bold transition-all duration-200 ease-in-out hover:text-teal-500" href="https://www.instagram.com/magical_soup/">Instagram</a>
                    <h2 className="text-xl">Follow me!</h2>
                    <a className="text-xl font-bold transition-all duration-200 ease-in-out hover:text-teal-500" href="https://www.instagram.com/magical_soup/">/magical_soup</a>
                </div>
            </div>
        </div>
        <style jsx> {`
        `}  
        </style>
        <Footer></Footer> 
      </main>
    </>
  )
}
