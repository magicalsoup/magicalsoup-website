import React from 'react';
import Link from 'next/link';
export default function Card({props, number}) {
    // 0-indexing
    const getTextColor = () => {
        if(number == 0) {
            return "text-orange-400"
        } 
        if(number == 1) {
            return "text-pink-400";
        } 
        if(number == 2) {
            return "text-teal-400";
        } 
        return "text-blue-400";
    }

    const getTitleStyle = () => {
        if(number == 0) {
            return "hover:cursor-pointer hover:text-orange-400"
        } 
        if(number == 1) {
            return "hover:cursor-pointer  hover:text-pink-400";
        } 
        if(number == 2) {
            return "hover:cursor-pointer  hover:text-teal-400";
        } 
        return "hover:cursor-pointer  hover:text-blue-400";
    }

    const getBorderStyle = () => {
        if(number == 0) {
            return "flex items-center justify-center p-12 bg-white aspect-square border-2 hover:border-orange-400 hover:cursor-pointer";
        } 
        if(number == 1) {
            return "flex items-center justify-center p-12 bg-white aspect-square border-2 hover:border-pink-400 hover:cursor-pointer";
        } 
        if(number == 2) {
            return "flex items-center justify-center p-12 bg-white aspect-square border-2 hover:border-teal-400 hover:cursor-pointer";
        } 
        return "flex items-center justify-center p-12 bg-white aspect-square border-2 hover:border-blue-400 hover:cursor-pointer";
    }

    return (
        <div className="flex flex-col w-72 space-y-4 p-8">
            <a className={getBorderStyle()} href={props.link} target="_blank">
                <img src={props.imageSrc} className="object-scale-down"/>
            </a>
            <div className="flex flex-col items-center space-y-2">
                <div className="text-3xl underline text-center" id="body-text">
                    <h1 className={getTitleStyle()}>{props.title}</h1>
                </div>
                <div className="text-center text-xl" id="body-text">
                    <h1 className={getTextColor()}>{props.subTitle}</h1>
                </div>
              </div> 
        </div>
    )
}