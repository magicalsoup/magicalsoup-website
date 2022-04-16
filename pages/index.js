import React from 'react';
import Head from 'next/head';
import NavBar from '../components/navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub, faInstagram} from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons"
export default function Home() {
  return (
    <>
      <Head>
        <title>James Su</title>
      </Head>
      <NavBar></NavBar>
      <main>
        <div id="container">
          <div className="flex flex-col h-screen justify-center">
            <div className="p-6 sm:p-12 sm:w-3/5 lg:w-3/5 xl:w-2/5 space-y-8">
              <h1 className="typed-out text-3xl md:text-7xl block" id="body-text">
                Hi, I'm <a className="font-bold underline decoration-pink-500">James</a>
              </h1>
              <p className="text-white text-md sm:text-xl" id="body-text">
                You might know me as magicalsoup. I like to dabble in different fields of computer science, 
                like creating websites or competitive programming.
              </p>
              <div className="space-x-8 pl-2">
                <a href="mailto:amagicalsoup@gmail.com">
                  <FontAwesomeIcon
                    icon={faEnvelopeSquare}
                    className="text-white text-3xl sm:text-5xl transition-all duration-300 ease-in-out hover:text-gray-300"
                  />
                </a>
                <a href="https://github.com/magicalsoup">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-white text-3xl sm:text-3xl sm:text-5xl transition-all duration-300 ease-in-out hover:text-gray-300"
                  />
                </a>
                <a href="https://www.linkedin.com/in/james-su-2093351a4/">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-white text-3xl sm:text-5xl transition-all duration-300 ease-in-out hover:text-gray-300"
                  />
                </a>
                <a href="https://www.instagram.com/magical_soup/">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-white text-3xl sm:text-5xl transition-all duration-300 ease-in-out hover:text-gray-300"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <style jsx> {`
          #container {
            height: 100vh;
            // original one
            //background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB); 
            //animation: gradient-animation 10s ease infinite;
            background: linear-gradient(230deg, rgb(75, 207, 147), rgb(75, 121, 207), rgb(162, 75, 207)) 0% 0% / 300% 300%;
            animation: 60s ease 0s infinite normal none running gradient-animation;
            background-size: 400% 400%;
          }
          @keyframes gradient-animation {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
                background-position: 0% 50%;
            }
          }
          .typed-out{
            overflow: hidden;
            border-right: .1em solid white;
            color: white;
            white-space: nowrap;
            animation: typing 3s steps(20, end) forwards,
            blink 1.2s infinite, ease-in-out;
            width: 0;
          }
          @keyframes typing {
            from { width: 0 }
            to { width: 15rem }
          }
          @keyframes blink {
            0% { border-color: transparent }
            50% { border-color: white;}
            100% {border-color: transparent;}
          }
          @media (min-width: 768px) { 
            @keyframes typing {
              from { width: 0 }
              to { width: 34rem }
            }
          }
          @media (min-width: 1536px) { 
            @keyframes typing {
              from { width: 0 }
              to { width: 36rem }
            }
          }
        `}  
        </style>        
      </main>
    </>
  )
}
