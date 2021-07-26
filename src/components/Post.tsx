import { h } from "preact";
import {
  Facebook,
  Instagram,
  Twitter,
  Slash,
  Trash2,
  MoreHorizontal,
  ThumbsUp,
  MessageSquare,
  Share2,
  Eye,
} from "preact-feather";

export default function Post({ Post }) {
  const statColors = {
    "Need Approval": "#f7bf38",
    Scheduled: "#3ac183",
    Publishing: "#acacac",
    Published: "#acacac",
    Error: "#fb6450",
    Notes: "#67b1f2",
  };

  function logoPrinter(channel) {
    if (channel.match(/instagram/gim)) {
      return <Instagram />;
    } else if (channel.match(/facebook/gim)) {
      return <Facebook />;
    } else if (channel.match(/twitter/gim)) {
      return <Twitter />;
    } else return null;
  }

  function postDateString(date) {
    const timestamp = new Date(date);
    return (
      timestamp.toDateString().split(" ").slice(1).join(" ") +
      " - " +
      timestamp.toTimeString().split(":").slice(0, 2).join(":")
    );
  }

  return (
    <div className="postlist--posts--post">
      <div
        className="sm"
        style={{
          backgroundColor: statColors[Object.keys(statColors)[Post.status]],
        }}
      >
        {logoPrinter(Post.account.channel)}
      </div>
      <div className="context">
        <div className="context--header">
          <span>{postDateString(Post.published_at)}</span>
          <span>
            <Slash />
            <Trash2 />
            <MoreHorizontal />
          </span>
        </div>
        <div className="context--entry">{Post.entry.message}</div>
        <div
          className="context--image"
          style={{ backgroundImage: `url('${Post.entry.image[0]}')` }}
        ></div>
        <div className="context--reactions">
          <ThumbsUp />
          <MessageSquare />
          <Share2 />
          <Eye />
        </div>
      </div>
    </div>
  );
}
