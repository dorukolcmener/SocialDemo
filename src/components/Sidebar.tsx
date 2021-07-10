import { h } from "preact";
import Brand from "./Brand";
import BrandList from "./BrandList";
import MenuItems from "./MenuItems";

import "../styles/Sidebar.scss";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar--header">
        <b>sociality</b>.io
      </div>
      <BrandList />
      <div className="sidebar--menu">
        <MenuItems />
      </div>
    </div>
  );
}
