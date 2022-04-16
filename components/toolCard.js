import React from 'react';
export default function ToolCard({props}) {
    // Lato,sans-serif
    return (
        <div className="flex flex-col w-full space-y-4"id="body-text">
            <a className="flex w-full items-center justify-center p-12 bg-white aspect-square border-[1px] 
             transition-all duration-300 ease-in-out hover:shadow-md" 
            href={props.link} target="_blank">
                <img src={props.imageSrc}></img>
            </a>
            <a className="text-3xl inline-block" href={props.link} target="_blank">
                <h1 className="inline-block transition-all duration-200 ease-in-out hover:text-pink-500">{props.title}</h1>
            </a>
            <div className="flex bg-transparent">
                <div className="w-auto text-sm bg-white px-2 py-1 rounded-sm border-r-2 shadow-sm">Years of experience:</div>
                <div className="w-auto text-sm bg-white px-2 py-1 rounded-sm shadow-sm">{props.experience}</div>
            </div>
            <p >
                {props.description}
            </p>
        </div>
    )
}