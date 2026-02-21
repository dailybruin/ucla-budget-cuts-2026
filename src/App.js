import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Subheader from "./components/Subheader";
import Credits from "./components/Credits";
import ArticleCardsSection from "./components/ArticleCardsSection";
import MapDesktopPage from "./map-desktop.js";
import MapMobilePage from "./map-mobile.js";

// Fallback articles
const a1 = {
  article_title:
    "Former UCLA football players recount excitement, intensity of Bruin-Trojan rivalry",
  article_byline: "Connor Dullinger",
  article_url:
    "https://dailybruin.com/2025/11/23/former-ucla-football-players-recount-excitement-intensity-of-bruin-trojan-rivalry",
  article_image:
    "https://assets3.dailybruin.com/images/rivalry-issue-25-26/A.sp_.football.feature.MJD_.11.23.25.file_-19a0de0cfc3c132740b6be3caa6980bb.jpg",
};

const a2 = {
  article_title:
    "Looking ahead to UCLA football’s 2026 season following lackluster 2025 campaign",
  article_byline: "Connor Dullinger and Grant Walters",
  article_url:
    "https://dailybruin.com/2025/11/23/looking-ahead-to-ucla-footballs-2026-season-following-lackluster-2025-campaign",
  article_image:
    "https://assets3.dailybruin.com/images/rivalry-issue-25-26/A.sp_.football.DullysDrop.UCLAFuture.11.20.25.AGS_-2414ff54267f479b1d27c4ac52a51ec3.jpg",
};

const fallbackArticles = [a1, a2, a1, a2];

export default function App() {
  // Mobile breakpoint
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Main article data
  const [data, setData] = useState({
    headline: "\"A Perfect Storm\": How Budget Cuts Have Impacted UCLA",
    subheading: `UCLA is generating an annual structural budget deficit approaching $425 million, Stephen Agostini, UCLA's Chief Financial Officer, told the Daily Bruin on Feb. 6. The university has not posted its annual <u>financial reports</u> – which Agostini said contain erroneous numbers – for the last two fiscal years as of early February. Chancellor Julio Frenk described several factors – some of which are laid out in the timeline below – as combining to create "a perfect storm" culminating in UCLA's current budget crisis. Programs across campus have also had their funding slashed, from student-run retention projects to tour guide organizations.\n\nThe Daily Bruin News team's special project – "A Perfect Storm": How Budget Cuts Have Impacted UCLA – outlines the history behind UCLA's budget shortfalls and tracks the parts of campus that have faced cuts.`
  });

  // Handle window resize for mobile/desktop map
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch article data
  useEffect(() => {
    fetch("/api/packages/flatpages/test")
      .then(res => res.json())
      .then(res => {
        console.log("Status:", res.status);
        if (res.data && res.data['article.aml']) {
          setData(res.data['article.aml']);
        }
      })
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="App">
      <Header />
      <Landing data={data} />
      <Subheader data={data} />

      <section id="map">
        {isMobile ? <MapMobilePage /> : <MapDesktopPage />}
      </section>

      <section id="read-more">
        <ArticleCardsSection
          title="Read more of The Bruin’s budget cut coverage:"
          articles={fallbackArticles}
        />
      </section>

      <Credits data={data} />
      <Footer />
    </div>
  );
}