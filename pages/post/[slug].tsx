import { GetStaticProps, NextPage } from 'next'
import Header from '../../components/Header'
import { sanityClient } from '../../sanity'

interface IProps {
  post: Post
}

const Post: NextPage<IProps> = ({ post }) => {
  console.log('🚀 ~ file: [slug].tsx ~ line 10 ~ post', post)
  return (
    <main>
      <Header />
    </main>
  )
}

export default Post

export const getStaticPaths = async () => {
  const query = `*[_type == "post" ] {
  _id,
  slug,
}`
  const posts = await sanityClient.fetch(query)

  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "post" && slug.current == $slug ][0] {
  _id,
  _createdAt,
  slug,
  author -> {
  name,
  image
},
'comments': *[
	_type == "comment" && post._ref == ^._id && approved == true
],
description,
mainImage,
body,
}`

  const post = await sanityClient.fetch(query, { slug: params?.slug })

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
    },
  }
}
