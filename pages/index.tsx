import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Banner from '../components/Banner'
import Header from '../components/Header'
import { sanityClient, urlFor } from '../sanity'

interface IProps {
  posts: Post[]
}

const Home: NextPage<IProps> = ({ posts }) => {
  return (
    <div className="mx-auto max-w-7xl">
      <Head>
        <title>Medium blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <div className="-mx-2 flex flex-wrap">
        {posts.map((post) => (
          <Link
            href={`/post/${post.slug.current}`}
            as={`/posts/${post.slug.current}`}
            key={post._id}
          >
            <div>
              <img src={urlFor(post.mainImage).url()!} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const query = `*[_type == "post" ] {
  _id,
  title,
  slug,
  description,
  mainImage,
  author -> {
  name,
  image
}
}`
  const posts = await sanityClient.fetch(query)

  return {
    props: {
      posts,
    },
  }
}
