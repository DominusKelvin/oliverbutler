import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PostFrontMatter } from 'types/PostFrontMatter'
import { PostListItem } from '@/components/PostListItem'
import { Terminal } from '@/components/Terminal/Terminal'
import { Spotify } from 'types/Spotify'

const MAX_DISPLAY = 5

export const getStaticProps: GetStaticProps<{
  posts: PostFrontMatter[]
  spotify: Spotify | null
}> = async () => {
  const posts = await getAllFilesFrontMatter('blog')

  const spotify = await fetch(`https://api.spotify.com/v1/me/player/currently-playing`, {
    headers: {
      Authorization:
        'Bearer BQCQjxJ9KUrWDRdz8MJeJrcsrrJPwgFQSYgsG6HIGORDuJfudDB1Cf4j4vtvRXIpX_JwfH8Wr_nZHv4JFPa7NUzH71QIwB9QuCaSW8u1iFrPqcW_RK_MOjkQ3pjcS11hEQPmOQGn9-EeD-KzOg',
      'Content-Type': 'application/json',
    },
    method: 'GET',
  })
    .then(async (res): Promise<Spotify | null> => {
      const json = await res.json()

      if (!json.item) {
        console.error(json)
        return null
      }

      return json
    })
    .catch(() => null)

  return { props: { posts, spotify }, revalidate: 10 }
}

export default function Home({ posts, spotify }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <div className="mb-12 flex flex-col xl:mb-24 xl:flex-row ">
          <div className="flex items-center xl:w-1/2">
            <div className="mb-12 space-y-2 ">
              <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl sm:leading-10 md:text-6xl md:leading-14">
                I'm Olly! 👋
              </h1>
              <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
                {siteMetadata.description}{' '}
                <Link
                  href={`/about`}
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  aria-label={`Learn More`}
                >
                  Learn more about me &rarr;
                </Link>
              </p>
            </div>
          </div>
          <div className="xl:ml-6 xl:w-1/2">
            <Terminal spotify={spotify} posts={posts} />
          </div>
        </div>
        <h3 className="pt-4 pb-2 text-4xl font-bold leading-8 tracking-tight text-black underline underline-offset-4  dark:text-white">
          Latest Posts
        </h3>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => (
            <li key={frontMatter.slug} className="py-12">
              <PostListItem frontMatter={frontMatter} showThumbnail={false} />
            </li>
          ))}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
