import {React, useEffect} from 'react';
import Head from 'next/head';
import NavBar from '../components/navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub, faInstagram} from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons"
export default function Home() {
    // need to use useEffect because "c" is defined on client side
    useEffect(() => {
        // source: By Boujjou Achraf*
        var c = document.getElementById("c");
        var ctx = c.getContext("2d");

        //making the canvas full screen
        c.height = window.innerHeight;
        c.width = window.innerWidth;

        
        var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
        //converting the string into an array of single characters
        matrix = matrix.split("");

        var font_size = 10;
        var columns = c.width/font_size; //number of columns for the rain
        //an array of drops - one per column
        var drops = [];
        //x below is the x coordinate
        //1 = y co-ordinate of the drop(same for every drop initially)
        for(var x = 0; x < columns; x++)
            drops[x] = 1; 

        //drawing the characters
        function draw() {
            //Black BG for the canvas
            //translucent BG to show trail
            ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
            ctx.fillRect(0, 0, c.width, c.height);

            ctx.fillStyle = "#f4427d"; //green text
            ctx.font = font_size + "px arial";
            //looping over drops
            for(var i = 0; i < drops.length; i++) {
                //a random character to print
                var text = matrix[Math.floor(Math.random()*matrix.length)];
                //x = i*font_size, y = value of drops[i]*font_size
                ctx.fillText(text, i*font_size, drops[i]*font_size);

                //sending the drop back to the top randomly after it has crossed the screen
                //adding a randomness to the reset to make the drops scattered on the Y axis
                if(drops[i]*font_size > c.height && Math.random() > 0.975)
                    drops[i] = 0;

                //incrementing Y coordinate
                drops[i]++;
            }
        }

        setInterval(draw, 35);
    })
    return (
        <>
        <Head>
            <title>James Su</title>
            <link rel="Soup Icon" href="../soup-icon.png"/>
        </Head>
        <NavBar currentPage={1}></NavBar>
        <main>
            <div className="h-screen w-screen">
                <canvas className="h-screen w-screen" id="c"/>
                <div className="absolute top-1/4">
                    <div className="p-6 sm:p-12 sm:w-3/5 lg:w-3/5 xl:w-2/5 space-y-8">
                        <h1 className="typed-out text-3xl md:text-7xl" id="body-text">
                            Hi, I'm <a className="font-bold underline decoration-pink-500">James</a>
                        </h1>
                        <p className="text-white text-md sm:text-xl" id="body-text">
                            You might know me as magicalsoup. I like to dabble in different fields of computer science, 
                            like creating websites or competitive programming. Computer science student 
                            <a className="font-bold hover:text-gray-300" href="https://uwaterloo.ca/" target="_blank"> @UWaterloo.</a>
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
                                className="text-white text-3xl sm:text-5xl transition-all duration-300 ease-in-out hover:text-gray-300"
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
                    animation: 45s ease 0s infinite normal none running gradient-animation;
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
                    to { width: 36rem }
                    }
                }
            `}  
            </style>
        </main>    
        </>
    )
}
