import { h } from "preact";

import Sidebar from "../components/Sidebar";
import Content from "../components/Content";

import "../styles/App.scss";

export default function App() {
  return (
    <main>
      <Sidebar />
      <Content />
    </main>
  );
}
