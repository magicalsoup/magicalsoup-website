import React from 'react';
import HobbyData from '../data/hobbyData';
import Card from '../components/card';
import Head from 'next/head';
import NavBar from '../components/navbar';
export default function() {

    // some grid layout picture on side and something for hobbies
    return <>
    <Head>
        <title>About James</title>
    </Head>
    <NavBar></NavBar>
    <main>
        <div className="absolute top-0 bg-#2b1055 w-full h-screen bg-cover bg-fixed">
            <div className="grid grid-rows-2 grid-cols-2">
                <div></div>
                <div className="col-span-1"></div>
                <div className="grid grid-rows-1 grid-cols-3 flex-wrap p-16 bg-cyan-400">
                        {HobbyData.map((item) =>
                        <Card props={item}></Card>
                        )}
                </div>
            </div>
        </div>
    </main>
    </>
}