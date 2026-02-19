import React, { useState, useEffect } from "react";
import MapDesktopPage from "./map-desktop.js";
import MapMobilePage from "./map-mobile.js";

export default function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <MapMobilePage /> : <MapDesktopPage />;
}
