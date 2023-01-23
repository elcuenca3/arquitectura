// lib/load-posts.js

// The following function is shared
// with getStaticProps and API routes
// from a `lib/` directory
export async function loadPosts() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://www.freetogame.com/api/games')
    const data = await res.json()

    return data
}

// pages/blog.js
import { loadPosts } from '../lib/load-posts'

// This function runs only on the server side
export async function getStaticProps() {
    // Instead of fetching your `/api` route you can call the same
    // function directly in `getStaticProps`
    const posts = await loadPosts()

    // Props returned will be passed to the page component
    return { props: { posts } }
}