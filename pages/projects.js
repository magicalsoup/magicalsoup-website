import React from 'react';
import Head from 'next/head';
import NavBar from '../components/navbar';
import Contacts from '../components/contacts';
import ProjectData from '../data/projectData';
import ProjectCard from '../components/projectCard';
export default function() {
    return (
        <>
            <Head>
            <title>James Su</title>
            </Head>
            <NavBar></NavBar>
            <main>
                <div className="bg-projects w-full h-screen bg-fixed bg-center bg-scale-down bg-no-repeat">
                    <div className="flex flex-col pt-20">
                        {ProjectData.map((item, index) => 
                            <ProjectCard props={item} key={index}></ProjectCard>
                        )}
                    </div>
                    <Contacts></Contacts>
                </div>
            </main>
        </>
    )
}
