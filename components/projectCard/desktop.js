import React from 'react';
import Link from 'next/link';
export default function Desktop({props}) {
    return (
        <div className="flex w-full h-full bg-white rounded-md border-4 border-zinc-800
            transition-all duration-500 ease-in-out hover:-translate-y-2">
            <div className="w-full p-4">
                <img src={props.imageSrc} className="border-2 h-full object-scale-down rounded-md"/>
            </div>
            <div className="flex flex-col h-full w-full justify-between p-4">
                <div className="flex flex-col">
                    <h2 className="text-4xl py-4">{props.title}</h2>
                    <span className="border-4 border-black w-full"></span>
                </div>  
                <p className="py-2">{props.description}</p>
                <div className="flex items-center mt-20 h-full">
                    {props.linksData.map((item, index) => 
                        <div className="px-4">
                            <button className="px-3.5 py-1.5 text-zinc-800 tracking-wide bg-white border-4 border-zinc-800
                            transition-all duration-300 ease-in-out hover:bg-zinc-600 hover:text-white" key={index}>
                                <Link href={item.link}>
                                    <a>{item.linkTitle}</a>
                                </Link>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}