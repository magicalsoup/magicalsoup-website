import React from 'react';
import Head from 'next/head';
import Card from '../components/card';
import NavBar from '../components/navbar';
import HobbyData from '../data/hobbyData';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub, faInstagram} from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons"
import Contacts from '../components/contacts';
export default function Home() {

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
              <a className="explore-btn font-body text-2xl sm:text-6xl lg:text-7xl" href="#about">
                <div className="explore-text">
                  Portfolio
                </div>
              </a>
            </div>                
          </div>

          <div className="flex flex-col w-full max-h-none bg-#FFFAF4 pt-12" id="about">
              <div className="self-start px-4 lg:px-20 py-10 w-full">
                <img src="..\images\profile_pic.png" className="max-w-xs lg:max-w-sm float-right p-4 rounded-full"/>
                <h2 className="text-5xl self-start underline font-body py-4">About Me</h2>
                <p className="clear-left text-2xl self-start font-blog mt-12">
                  Hi, I'm James, you might know me as magicalsoup. I like to dabble in different fields of computer science,
                  like creating websites or competitive programming. 
                </p>

                <div className="flex flex-col self-end pt-12">
                  <a className="resume-btn font-body text-2xl sm:text-5xl lg:text-6xl" href="../resume/James Su Resume.pdf">
                    <div className="resume-text">
                      Resume
                    </div>
                  </a>
                  <div className="flex w-full py-2">
                    <div className="flex">
                        <a className="pr-4" href="\blog">
                            <FontAwesomeIcon
                                icon={faInstagram}
                                className="transition-all duration-300 ease-in-out text-7xl sm:text-8xl hover:opacity-50"
                            />
                        </a>
                        <a className="pr-4" href="https://github.com/magicalsoup">
                            <FontAwesomeIcon
                                icon={faGithub}
                                className="transition-all duration-300 ease-in-out text-7xl sm:text-8xl hover:opacity-50"
                            />
                        </a>
                        <a className="pr-4" href="mailto:amagicalsoup@gmail.com">
                            <FontAwesomeIcon
                                icon={faEnvelopeSquare}
                                className="transition-all duration-300 ease-in-out text-7xl sm:text-8xl hover:opacity-50"
                            />
                        </a>
                        <a className="pr-4" href="https://www.linkedin.com/in/james-su-2093351a4/">
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                className="transition-all duration-300 ease-in-out text-7xl sm:text-8xl hover:opacity-50"
                            />
                        </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="self-start px-4 lg:px-20 pb-10 w-full bg-#FFF1E1 pt-12">
                <h2 className="text-5xl self-start underline font-body py-4 ">What I like to do</h2>
                  <div class="flex flex-wrap justify-center w-full">
                    {HobbyData.map((item) => 
                      <Card props={item}></Card>
                    )}
                  </div>
              </div>
          </div>
          <Contacts></Contacts>
        </div>
      </main>
    </>
  )
}
