import React from 'react';
import Head from 'next/head';
import NavBar from '../components/navbar';
import Contacts from '../components/contacts';
export default function() {
    return (
        <>
            <Head>
            <title>James Su</title>
            </Head>
            <NavBar></NavBar>
            <div className="flex top-0 bg-projects w-full h-screen bg-fixed bg-center bg-scale-down bg-no-repeat">
                
            </div>
            <Contacts></Contacts>
        </>
    )
}
