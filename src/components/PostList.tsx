import { h } from "preact";
import Post from "./Post";

import "../styles/PostList.scss";

export default function PostList({ date, posts }) {
  console.log(posts);
  return (
    <>
      <div className="postlist">
        <div className="postlist--date">
          {new Date(date).toDateString().split(" ").slice(1).join(" ")}
        </div>
        <div className="postlist--posts">
          {posts.map((post) => (
            <Post Post={post} />
          ))}
        </div>
      </div>
    </>
  );
}
