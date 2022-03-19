
import { getAllPostIds, getPostData } from '../../lib/posts'

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
    <div className="top-0 bg-gray-900 bg-fixed min-h-screen">
        <div className="flex flex-col items-center font-body p-20">
          <div className="flex flex-col w-full items-start">
            <div className="text-slate-400 text-5xl py-4">
              {postData.title}
            </div>
            <div className="text-#fff italic">
              {postData.date}
            </div>
          </div>
          <article className="prose dark:prose-invert prose-lg text-#fff prose-strong:text-#fff max-w-none py-20 self-start">
            <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
          </article>
        </div>
    </div> 
  )
}