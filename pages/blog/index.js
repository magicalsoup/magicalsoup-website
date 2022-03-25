import { getSortedPostsData } from '../../lib/posts'
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import NavBar from '../../components/navbar';
import Contacts from '../../components/contacts';

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
        <title>Blog</title>
      </Head>
      <NavBar></NavBar>
      <main>
        <div className="flex top-0 bg-blog w-full h-screen bg-fixed bg-center bg-scale-down bg-no-repeat">
          <div className="relative flex flex-col w-full h-full items-center">
            <div className="relative top-[30%] flex justify-center w-full backdrop-blur-sm">
              <div className="grid">
                {allPostsData.map(({ id, date, title }) => (
                <div className="flex flex-col justify-center text-#fff">
                   <Link href={`/blog/${id}`}>
                    <a className="text-lg md:text-3xl self-start text-gray-300 font-body py-4">
                        {title}
                    </a>
                    </Link>
                    <div className="flex justify-between">
                       <Link href={`/blog/${id}`}>
                          <a className="text-cyan-400 underline underline-offset-2">Read more</a>
                        </Link>
                        <div className="italic">
                          {date}
                        </div>
                    </div>
                </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Contacts></Contacts>
      </main>
      </>
    )
  }
  