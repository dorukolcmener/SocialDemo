import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

import ContentHeader from "./ContentHeader";
import Avatar from "./Avatar";
import PostList from "./PostList";

import axios from "axios";

import apiURL from "url:../../assets/data.json";
import "../styles/Content.scss";

export default function Content() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    axios({
      url: apiURL,
      timeout: 3000,
    })
      .then(({ data }) => {
        setPosts(data.posts_by_date);
        setLoading(false);
      })
      .catch((e) => alert(e.toString()));
  }, []);

  return (
    <div className="content">
      <ContentHeader />
      <Avatar />
      {loading
        ? null
        : Object.keys(posts)
            .sort((a, b) => new Date(b).getTime() - new Date(a).getTime())
            .map((key) => {
              return <PostList date={key} posts={posts[key]} />;
            })}
    </div>
  );
}
