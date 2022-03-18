import React from 'react';
import Head from 'next/head';
import Card from '../components/card';
import HobbyData from '../data/hobbyData';
import NavBar from '../components/navbar';
import Link from 'next/link';
export default function Home() {

  const getHobbyName = () => {
    return true;
  }

  return (
    <>
      <Head>
        <title>James Su</title>
      </Head>
      <NavBar></NavBar>
      <main>
        <div className="bg-blossom w-full h-screen bg-cover bg-fixed">
          <div className="flex w-full h-screen justify-center items-center">
            <div className="flex justify-center items-center border-8 border-#fff h-1/5 w-1/2 md:h-1/3 backdrop-blur-md" href="#info">
              <a className="explore-btn font-body text-2xl sm:text-6xl lg:text-7xl" href="#info">
                <div className="explore-text">
                  Portfolio
                </div>
              </a>
            </div>                
          </div>

          <div className="flex flex-col w-full max-h-none bg-#2b1055" id="info">
              {/*TODO make padding responsive */}
              <div className="self-start px-20 py-10 w-full">
                <img src="..\images\profile_pic.png" className="max-w-xs lg:max-w-sm float-right p-4"/>
                <h2 className="text-5xl self-start text-gray-300 font-body py-4">About Me</h2>
                <p className="clear-left text-2xl self-start text-#fff font-body mt-12">
                  Hi, I'm James, you might know me as magicalsoup. I like to dabble in different fields of computer science,
                  like creating websites or competitive programming. 
                </p>
                <div>{/*add resume button here*/}</div>

              </div>

                <div className="self-start px-20 pb-10 w-full">
                  <h2 className="text-5xl self-start text-gray-300 font-body py-4">What I like to do</h2>
                  <div className={getHobbyName()}>
                      {/*should show for phone + mobile devices*/}
                      <div className="grid grid-rows-3">
                        {HobbyData.map((item) =>
                            
                            <div>

                            </div>
                          
                        )}
                      </div>
                    </div>

                    <div className={getHobbyName()}>
                      <div className="grid grid-rows-1 grid-cols-3 pt-20">
                        {HobbyData.map((item) => 
                          <Card props={item}></Card>
                        )}
                      </div>
                    </div>
                </div>
              
          </div>
          <div className="relative bg-blossom w-full h-screen bg-cover bg-fixed">
            <div className="z-50">

            </div>
            <div>{/*for #contact */}</div>
          </div>
        
        </div>
      </main>
    </>
  )
}
