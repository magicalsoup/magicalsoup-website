import React from 'react';
export default function Contacts() {
    return (
        <div className="flex flex-col items-center bg-zinc-800 bottom-0 w-full py-4" id="contact">
            <h2 className="text-#fff text-3xl uppercase py-8">Contact</h2>
            <div className="text-slate-300">
                amagicalsoup@gmail.com
            </div>
            <div className="text-slate-300">
                647-636-6585
            </div>
            <div className="text-slate-300 pb-12">
                Richmond Hill, ON, CA
            </div>
            <div className="text-gray-500">
                Copyright © 2022 | James Su
            </div>
        </div>
    )
}