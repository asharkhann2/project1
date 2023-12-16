import { createClient } from 'next-sanity'

//import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion:"2023-10-05",
  dataset :"production",
  projectId :"1db5odmm",
  useCdn : true,
})
