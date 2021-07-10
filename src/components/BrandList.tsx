import { h } from "preact";
import Brand from "./Brand";

export default function BrandList() {
  return (
    <div className="sidebar--brands">
      <Brand
        url="https://static.wikia.nocookie.net/swordartonline/images/9/9c/Shino.png"
        id="1"
        checked={true}
      />
      <Brand
        url="https://static.wikia.nocookie.net/swordartonline/images/7/7d/Kazuto.png"
        id="2"
      />
      <Brand
        url="https://static.wikia.nocookie.net/tokyoghoul/images/6/6c/Touka_re_anime.jpg"
        id="3"
      />
      <Brand
        url="https://static.wikia.nocookie.net/tokyoghoul/images/c/c7/Kaneki%27s_Mask.png"
        id="4"
      />
      <Brand
        url="https://static.wikia.nocookie.net/deathnote/images/3/34/E26_Near_L_puzzle.png"
        id="5"
      />
      <Brand
        url="https://static.wikia.nocookie.net/nanatsu-no-taizai/images/b/b8/Meliodas_Demon_Mark_Anime.png"
        id="6"
      />
    </div>
  );
}
