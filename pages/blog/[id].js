import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import NavBar from '../../components/navbar';
import Contacts from '../../components/contacts';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}
export default function Post({ postData }) {
  return (
    <>
     <Head>
        <title>{postData.id}</title>
      </Head>
      <NavBar></NavBar>
      <div className="top-0 bg-blog bg-fixed min-h-screen">
        <div>
          <div className="flex flex-col items-center font-body justify-center px-4 pt-20 backdrop-blur-md">
            <div className="flex flex-col w-full items-center">
              <div className="text-slate-400 text-3xl text-center py-4">  
                {postData.title}
              </div>
              <div className="text-#fff italic text-align-left">
                {postData.date}
              </div>
            </div>
            <article className="prose dark:prose-invert prose-lg text-#fff prose-strong:text-#fff  py-20">
              <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
            </article>
          </div>
        </div>
      </div> 
      <Contacts></Contacts>
    </>
  )
}