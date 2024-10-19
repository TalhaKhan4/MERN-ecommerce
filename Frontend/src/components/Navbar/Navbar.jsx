// importing hooks
import { useEffect, useState } from "react";

// importing other components
import DesktopNav from "./DesktopNav.jsx";

function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  return <nav>{windowWidth >= 768 ? <DesktopNav /> : "Mobile Nav"}</nav>;
}

export default Navbar;
