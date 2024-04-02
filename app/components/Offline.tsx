import { FC } from "react";
import { blogPosts } from "../constants/blogs";
import BlogSnippet from "./BlogSnippet";

const Offline: FC = () => {
  return (
    <section id="offline" className="offline h-screen flex flex-col justify-center items-center">
      <h2 className="font-mono">I write, and therefore I am!</h2>
      <div className="my-20 w-full md:w-4/5">
        <h6 className="font-mono italic">Check out some of the crowd favorite posts in my blog...</h6>
        <div className="flex justify-evenly flex-wrap my-8">
        {blogPosts.map((blog) => <BlogSnippet key={blog.title} blog={blog} />)}
        </div>
      </div>
    </section>
  );
};

export default Offline;
