import React, {useState } from 'react';
export default function Card({props}) {

    const [showCard, setShowCard] = useState(false);
    
    function getCardContentName() {
        if(showCard) {
            return "relative -mt-36 px-2.5 py-3 text-center text-black transition-all duration-300 ease-in-out translate-y-20";
        }
        return "relative -mt-36 px-2.5 py-3 text-center text-black transition-all duration-300 ease-in-out invisible opacity-0";
    }
    
    function getCardImageName() {
        if(showCard) {
            return "flex relative w-64 h-64 -top-16 shadow-lg justify-center transition-all duration-300 ease-in-out -translate-y-6";
        }
        return "flex relative w-64 h-64 -top-16 shadow-lg justify-center transition-all duration-300 ease-in-out";
    }
    
    function getMainCardName() {
        if(showCard) {
            return "flex flex-col items-center relative max-w-sm h-96 bg-white mx-8 my-2.5 px-8 py-2.5 shadow-md transition-all ease-in-out duration-300";
        }
        return "flex flex-col items-center relative max-w-sm h-52 bg-white mx-8 my-2.5 px-8 py-2.5 shadow-md transition-all ease-in-out duration-300";
    }

    return (
        <div className={getMainCardName()} onClick={()=> {setShowCard(!showCard)}}>
            <div className={getCardImageName()}>
                <img 
                src={props.imageSrc} 
                className="max-w-full max-h-full object-fill object-bottom"/>
            </div>
            <div className={getCardContentName()}>                
                <h2 className="text-3xl font-bold font-body">{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    )
}