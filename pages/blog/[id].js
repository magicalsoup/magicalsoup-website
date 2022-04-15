import { getAllPostIds, getPostData, formatDate } from '../../lib/getBlogPosts';
import Head from 'next/head';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';

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
      <main>
        <div className="flex flex-col min-h-screen w-full">
          {/*TODO make padding responsive */}
          <div className="flex flex-col items-center pt-24 md:pt-48 text-center text-white space-y-4 h-[70vh] bg-[#1f2a40]" id="body-text">
            <h1 className="text-xl">{formatDate(postData.date)}</h1>
            <h1 className="text-3xl font-bold">{postData.title}</h1>
          </div>
          <div className="flex justify-center min-h-screen w-full bg-[#f5f9ff]">
            <div className="flex flex-col w-full md:w-3/4 xl:w-2/3 bg-white -translate-y-48 z-10 p-12 rounded-xl">
              <article className="prose-lg" id="body-text">
                  <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
              </article>
              <a href="/blog"
                className="text-sky-500 decoration-sky-500 hover:underline" id="body-text">← Back to Blogs Page</a>
            </div>
          </div>
        </div> 
        <Footer></Footer>
      </main>
    </>
  )
}