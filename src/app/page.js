import { postData } from "@/utils/fetchPost";
import Link from "next/link";

export default async function Home() {
  const allPost = await postData();

  return (
    <div className="min-h-screen">
      <div className="w-11/12 mx-auto">
        <h2 className="page-heading">
          Blog Entries
        </h2>
        <div className="grid-container">
          {allPost.map((post) => (
            <div
              key={post.id}
              className="card-container"
            >
              <h4 className="capitalize font-semibold mb-10">{post.title}</h4>
              <div>
                <span>{post.body.slice(0, 50)}... </span>
                <Link href={`/blog/${post.id}`}>
                  <span className="text-blue-300 underline">Read more</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
