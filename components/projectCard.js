import React, {useState, useEffect} from 'react';
import Link from 'next/link';


export default function ProjectCard({props}) {

    const [show, setShow] = useState(false);

    const getDescriptionName = () => {
        if(show) {
            return "project-card-description-active";
        }
        return "project-card-description";
    }

    const getShowButtonName = () => {
        if(show) {
            return "px-3.5 py-1.5 w-32 rounded-md bg-rose-400";
        }
        return "px-3.5 py-1.5 w-32 rounded-md bg-sky-400";
    }


    return (
        <div>
            <div className="bg-projects w-full bg-fixed bg-center bg-scale-down bg-no-repeat">
                {/*make padding responsive*/}
                <div className="flex justify-center w-full h-full p-4 md:px-20 bg-transparent">
                    <div className="projects-desktop flex w-full h-full bg-white rounded-md border-4 border-zinc-800
                    transition-all duration-500 ease-in-out hover:-translate-y-2">
                        <img src={props.imageSrc} className="max-w-[50%] object-scale-down rounded-md p-4"/>
                        <div className="flex flex-col h-full w-full justify-between p-4">
                            <div className="flex flex-col">
                                <h2 className="text-4xl py-4">{props.title}</h2>
                                <span className="border-4 border-black w-full"></span>
                            </div>  
                            <p className="py-2">{props.description}</p>
                            <div className="flex items-center justify-around h-full">
                                {props.linksData.map((item, index) => 
                                    <button className="px-3.5 py-1.5 text-zinc-800 tracking-wide bg-white border-4 border-zinc-800
                                    transition-all duration-300 ease-in-out hover:bg-zinc-600 hover:text-white" key={index}>
                                        <Link href={item.link}>
                                            <a>{item.linkTitle}</a>
                                        </Link>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                    {/*For < 1024px*/}
                    <div className="projects-mobile flex flex-col w-full bg-white rounded-md border-4 border-zinc-800 p-4">
                        <img src={props.imageSrc} className="w-full h-full object-scale-down rounded-md p-4"/>
                        <div className={getDescriptionName()}>
                            <div className="flex flex-col px-4">
                                <h2 className="text-3xl py-4">{props.title}</h2>
                                <span className="border-4 border-black w-full"></span>
                                <div className="">{props.description}</div>
                            </div>
                        </div>
                        <div className="p-4">
                            <button className={getShowButtonName()} onClick={() => setShow(!show)}>
                                {show? "Close" : "Learn More"}
                            </button>
                        </div>
                        <div className="flex items-center justify-around h-full">
                                {props.linksData.map((item, index) => 
                                    <button className="px-3.5 py-1.5 text-zinc-800 tracking-wide bg-white border-4 border-zinc-800
                                    transition-all duration-300 ease-in-out hover:bg-zinc-600 hover:text-white" key={index}>
                                        <Link href={item.link}>
                                            <a>{item.linkTitle}</a>
                                        </Link>
                                    </button>
                                )}
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
    )
}
