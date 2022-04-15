import React, {useState} from 'react';
import Link from 'next/link';

export default function ProjectCard({props}) {

    const [show, setShow] = useState(false);

    return (
        <div className="flex justify-center w-full h-full">
            <div className="flex flex-col w-full bg-white rounded-md border-4 border-zinc-800 p-4">
                <div className="w-full h-full p-4">
                    <img src={props.imageSrc} className="border-2 object-scale-down rounded-md"/>
                </div>
                <div className="">
                    <div className="flex flex-col px-4">
                        <h2 className="text-3xl py-4">{props.title}</h2>
                        <span className="border-2 bg-black border-black w-full"></span>
                        <div className={show? "text-xl" : "text-xl truncate"}>{props.description}</div>
                    </div>
                </div>
                <div className="p-4">
                    <button className="text-gray-400 cursor-pointer" onClick={() => setShow(!show)}>
                        {show? "Show less" : "Show more"}
                    </button>
                </div>
                <div className="flex items-center h-full">
                        {props.linksData.map((item, index) => 
                            <div className="px-2">
                                <button className="px-3.5 py-1.5 text-zinc-800 tracking-wide bg-white border-4 border-zinc-800" key={index}>
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
