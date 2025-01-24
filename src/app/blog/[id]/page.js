import axios from "axios";

export default async function Post({ params }) {
  const { id } = await params;

  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  const post = res.data;

  return (
    <div className="px-4">
      <div className="details-page-container">
        <h2 className="detail-heading">
          {post.title}
        </h2>
        <p>Posted By: {post.userId}</p>
        <p className="mt-6">{post.body}.</p>
      </div>
    </div>
  );
}
