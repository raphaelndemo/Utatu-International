// Query to get latest 3 posts
export const postsQuery = `*[_type == "post"] | order(publishedAt desc)[0...3] {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  mainImage {
    asset,
    alt
  }
}`

// Query to get upcoming events
export const eventsQuery = `*[_type == "event" && eventDate > now()] | order(eventDate asc)[0...5] {
  _id,
  title,
  eventDate,
  time,
  location,
  image {
    asset,
    alt
  }
}`
