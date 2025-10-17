// src/queries.js
export const blogPostsQuery = `
*[_type == "post"]{
  _id,
  title,
  slug,
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  },
  categories[]->{
    title
  },
  body,
  publishedAt
}
`