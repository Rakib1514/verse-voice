import { postData } from "@/utils/fetchPost";
import Link from "next/link";

export default async function Home() {
  const allPost = await postData();

  return (
    <div className="min-h-screen">
      <div className="w-11/12 mx-auto">
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-semibold my-6 text-center">
          Blog Entries
        </h2>
        <div className="grid grid-cols-4 gap-6">
          {allPost.map((post) => (
            <div
              key={post.id}
              className="min-h-44 p-4 border border-gray-200 rounded-sm flex flex-col justify-between bg-gray-800 bg-opacity-45"
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
