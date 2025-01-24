# Verse & Voice

A simple blog viewer application built with **Next.js**. It demonstrates routing, dynamic routes, authentication using **Kinde Auth**, and data fetching with **Axios**.

Live Demo: [https://verse-voice-next.vercel.app](https://verse-voice-next.vercel.app)

## Features

- **Home Page**: Lists all blog post titles fetched from a mock API. Each title links to the detailed blog post page.
- **Blog Details Page**: A dynamic page (`/blog/[id]`) that displays the details of a selected blog post.
- **Profile Page**: A protected page that requires authentication using **Kinde Auth**. Redirects users to the login page if they are not authenticated.
- **Navigation**: Includes a header with links to "Home" and "Profile". Displays a "Login" button if the user is not authenticated, and "Logout" if they are.

## Tech Stack

- **Next.js** for routing and server-side rendering
- **Axios** for fetching data from the API
- **Kinde Auth** for authentication
- **Tailwind CSS** for styling

## API Used

- **GET** `https://jsonplaceholder.typicode.com/posts` — Fetch all blog posts.
- **GET** `https://jsonplaceholder.typicode.com/posts/[id]` — Fetch a specific blog post by id.
