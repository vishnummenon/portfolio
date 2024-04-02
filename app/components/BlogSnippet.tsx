'use client'

import { FC } from "react";
import { IBlogPost } from "../constants/blogs";

type BlogSnippetProps = {
  blog: IBlogPost;
};

const BlogSnippet: FC<BlogSnippetProps> = ({ blog }: BlogSnippetProps) => {
  const { title, content, genre, url } = blog;

  const openLinkInNewTab = () => window.open(url, '_blank');

  return (
    <div className="w-full md:w-1/4 border-solid border-2 border-cyan-600 rounded flex flex-col">
      <div className="bg-cyan-600 p-2">
        <h1 className="self-start font-mono font-bold">
          {`${title} - (${genre})`}
        </h1>
      </div>
      <div className="p-4 flex flex-col self-end grow">
        <pre style={{whiteSpace: 'pre-wrap'}} className="font-mono text-justify">{`${content}...`}</pre>
      </div>
      <div className="bg-cyan-600 p-2 justify-center items-center flex bottom-0">
          <button className="font-mono hover:font-bold" onClick={openLinkInNewTab}>Read More</button>
        </div>
    </div>
  );
};

export default BlogSnippet;
