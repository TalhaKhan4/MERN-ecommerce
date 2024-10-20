// importing hooks
import { useEffect, useState } from "react";

// importing other components
import DesktopNav from "./DesktopNav.jsx";
import MobileNav from "./MobileNav.jsx";

function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Once the component loads for the first time we are adding an event listener on window object to listen for change in screen width
  // On the basis of screen width we are either rendering DesktopNav or MobileNav

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  return <nav>{windowWidth >= 768 ? <DesktopNav /> : <MobileNav />}</nav>;
}

export default Navbar;
