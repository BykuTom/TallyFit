import vitelogo from "../public/vite.svg";
import Navigation from "./navigation";
import { useState } from "react";

import "./Header.css";
export function Header() {
  const [expand, setExpand] = useState(false);

  return (
    <header>
      <nav aria-label="Navigation Bar">
        <div>
          <img src={vitelogo} alt="Logo Placeholder" />
        </div>
        <button
          onClick={() => {
            setExpand(!expand);
          }}
          className="burger-button"
        ></button>
        <Navigation expand={expand} />
      </nav>
    </header>
  );
}
