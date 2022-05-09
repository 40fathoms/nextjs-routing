//our-domain.com/news
import React from "react";
import Link from "next/link";

const NewsPage = () => {
  return (
    <React.Fragment>
      <h1>News Page</h1>

      <ul>
        <li>
          <Link href="/news/nextjs-is-great">NextJS is great</Link>
        </li>
        <li>
          <Link href="/news/something-else">Something Else</Link>
        </li>
      </ul>
      
    </React.Fragment>
  );
};

export default NewsPage;
