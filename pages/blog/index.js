import { getSortedPostsData, formatDate } from '../../lib/getBlogPosts'
import React from 'react';
import Head from 'next/head';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
export default function Home({ allPostsData }) {
    return (
      <>
      <Head>
        <title>James' Blog</title>
      </Head>
      <NavBar></NavBar>
      <main>
        <div className="flex flex-col w-full min-h-screen items-center space-y-16 py-24">
          <div className="flex flex-col w-full items-center space-y-4 text-center" id="body-text">
            <p className="text-5xl font-bold">Blog.</p>
            <p className="text-lg text-gray-600">Learn about my computer science journey.</p>
            <p className="text-lg text-gray-600">Also some life experiences 🤗.</p>
          </div>
          <div className="flex flex-col w-full items-center p-8 space-y-16" id="body-text">
            {allPostsData.map(({id, date, title, imageSrc}) => (
              <div className="flex flex-col w-full md:w-2/3 items-start">
                  <a className="flex w-full justify-center" href={`/blog/${id}`}>
                    <img src={imageSrc} className="object-fill w-full h-full aspect-video border-2"/>
                  </a>
                  <div className="text-gray-500">
                    {formatDate(date)}
                  </div>
                  <a className="text-3xl transition-all duration-300 ease-in-out hover:text-teal-500" href={`/blog/${id}`}>
                    {title}
                  </a>
              </div>
            ))}
          </div>
        </div>
        <Footer></Footer>
      </main>
      </>
    )
  }
  