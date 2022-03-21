import React, {useState} from 'react';
import HobbyData from '../data/hobbyData';
import Card from '../components/card';
import Head from 'next/head';
import NavBar from '../components/navbar';

export default function() {

    // some grid layout picture on side and something for hobbies

    const [index, setIndex] = useState(0);

    const moveBack = () => {
        if(index == 0) return;
        setIndex(index-1);
    }

    const moveForwards = () => {
        if(index == 2) return;
        setIndex(index+1);
    }

    const getContentName = () => {
        return "flex flex-nowrap -translate-x-[" + index * 100 + "%]"; 
        //return "flex flex-nowrap -translate-x-[100%]";
    }

    const getContent2 = () => {
        return "fixed top-[50%] w-full flex justify-between z-49";
    }

    return <>
    <Head>
        <title>About James</title>
    </Head>
    <NavBar></NavBar>
    <main>
        <div className="absolute top-0 bg-#2b1055 w-full h-screen bg-cover bg-fixed">
            <div className="flex flex-col h-screen justify-center items-center">
              
            </div>
        </div>

    </main>
    </>
}