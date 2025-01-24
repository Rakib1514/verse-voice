import axios from "axios";

export default async function Post({ params }) {
  const { id } = await params;

  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  const post = res.data;

  return (
    <div className="px-4">
      <div className="max-w-2xl min-h-96 border border-gray-300 mx-auto p-4 space-y-2 bg-gray-800 bg-opacity-50">
        <h2 className="capitalize font-semibold lg:text-4xl md:text-3xl text-xl ">
          {post.title}
        </h2>
        <p>Posted By: {post.userId}</p>
        <p className="mt-6">{post.body}.</p>
      </div>
    </div>
  );
}
