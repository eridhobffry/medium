import {
  createImageUrlBuilder,
  createCurrentUserHook,
  createClient,
} from 'next-sanity'

export const config = {
  dataset: proccess.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: proccess.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: '2021-04-25',
}
