import ProjectData from '../data/projectData';
import ProjectCard from '../components/projectCard/projectCard';
import React from 'react';
import Head from 'next/head';
import NavBar from '../components/navbar';
import Footer from '../components/footer';

export default function () {
    return (
        <>
            <Head>
            <title>James' Projects</title>
            <link rel="Soup Icon" href="../soup-icon.png"/>
            </Head>
            <NavBar currentPage={3}></NavBar>
            <main>
                <div className="flex flex-col w-full min-h-screen items-center space-y-16 py-24">
                   <div className="flex flex-col w-full items-center text-center space-y-4">
                        <p className="text-5xl font-bold" id="body-text">Projects.</p>
                        <p className="text-xl text-gray-600" id="body-text">Here are my finished and on-going projects.</p>
                    </div>
                    <div className="flex flex-col w-full p-4 lg:px-20 space-y-8" id="body-text">
                        {ProjectData.map((item, index) => 
                            <ProjectCard props={item} key={index}></ProjectCard>
                        )}
                    </div>
                </div>
                <Footer></Footer>
            </main>
        </>
    )
}
