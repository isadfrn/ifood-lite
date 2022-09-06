import theme from "../../styles/theme";
import { useState, useEffect } from "react";
import { MobileMenu } from "../MobileMenu";
import { DesktopMenu } from "../DesktopMenu";

export function Navbar() {
  const [screenSize, setScreenSize] = useState({
    matches: window.innerWidth > theme.BREAKPOINTS.LAPTOP ? true : false,
  });

  useEffect(() => {
    let mediaQuery = window.matchMedia(
      `(min-width: ${theme.BREAKPOINTS.LAPTOP}px)`
    );
    mediaQuery.addListener(setScreenSize);
    return () => mediaQuery.removeListener(setScreenSize);
  }, []);

  return (
    <nav>
      {screenSize && !screenSize.matches ? <MobileMenu /> : <DesktopMenu />}
    </nav>
  );
}
