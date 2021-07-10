import { h } from "preact";

import "../styles/Avatar.scss";

export default function Avatar() {
  return (
    <div
      className="avatar"
      style={{
        backgroundImage: `url('https://static.wikia.nocookie.net/avatar/images/2/22/Korra_SDCC_poster_cropped.png')`,
      }}
    ></div>
  );
}
