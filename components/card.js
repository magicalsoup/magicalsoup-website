import React from 'react';
export default function Card({props}) {
    return (
        <div className="flex flex-col relative max-w-xs h-52 bg-white mx-8 my-2.5 px-8 py-2.5 shadow-md group transition-all ease-in-out duration-300 hover:h-96">
            <div className="flex relative w-64 h-64 -top-16 shadow-lg justify-center">
                <img 
                src={props.imageSrc} 
                className="max-w-full max-h-full object-fill"/>
            </div>
            <div className="relative -mt-36 px-2.5 py-3 text-center text-black opacity-0 invisible
                transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:visible group-hover:-mt-10">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    )
}