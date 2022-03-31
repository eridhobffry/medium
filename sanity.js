import {
  createCurrentUserHook,
  createClient,
  createImageUrlBuilder,
} from 'next-sanity'

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: '2021-03-25',

  useCdn: process.env.NODE_ENV === 'production',
}

// fetch data to sanity
export const sanityClient = createClient(config)

// create url for image
export const urlFor = (source) => createImageUrlBuilder(config).image(source)

// use current user
export const useCurrentUser = createCurrentUserHook(config)
