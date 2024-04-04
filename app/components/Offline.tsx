import { FC } from "react";
import { blogPosts } from "../constants/blogs";
import BlogSnippet from "./BlogSnippet";

const Offline: FC = () => {
  return (
    <section
      id="offline"
      className="offline mt-20 md:mt-0 md:min-h-dvh flex flex-col justify-center items-center"
    >
      <h2 className="font-mono">I write, and therefore I am!</h2>
      <div className="my-20 w-full md:w-4/5">
        <h6 className="font-mono italic">
          Check out some of the crowd favorite posts in{" "}
          <a
            href="https://canyouvish.blogspot.com"
            target="_blank"
            className="font-bold"
          >
            my blog
          </a>
          ...
        </h6>
        <div className="flex justify-evenly flex-wrap my-8">
          {blogPosts.map((blog) => (
            <BlogSnippet key={blog.title} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offline;
