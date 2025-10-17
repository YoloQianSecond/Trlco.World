// src/sanityClient.js
import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'h4s9u7fw', // Replace with your actual project ID
  dataset: 'production-f', // Replace with your dataset name, typically 'production'
  apiVersion: 'v2021-03-25', // Use a specific date for the API version
  useCdn: true, // Set to false if you want to bypass the CDN for fresh content
});