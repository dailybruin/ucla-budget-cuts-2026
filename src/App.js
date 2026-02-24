// src/App.js
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Subheader from "./components/Subheader";
import Credits from "./components/Credits";
import ArticleCardsSection from "./components/ArticleCardsSection";
import MapDesktopPage from "./map-desktop.js";
import MapMobilePage from "./map-mobile.js";
import TimelineContainer from "./components/TimelineContainer";

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

const fallbackArticles = [a1, a2, a1, a2, a1, a2, a1, a2, a1, a2, a1, a2];

// helper: true on touch devices (won't flip when zooming)
const isCoarsePointer = () =>
  window.matchMedia("(hover: none) and (pointer: coarse)").matches;

function App() {
  // Main article data
  const [data, setData] = useState({
    headline: '"A Perfect Storm": How Budget Cuts Have Impacted UCLA',
    subheading: `UCLA is generating an annual structural budget deficit approaching $425 million, Stephen Agostini, UCLA's Chief Financial Officer, told the Daily Bruin on Feb. 6. The university has not posted its annual <u>financial reports</u> – which Agostini said contain erroneous numbers – for the last two fiscal years as of early February. Chancellor Julio Frenk described several factors – some of which are laid out in the timeline below – as combining to create "a perfect storm" culminating in UCLA's current budget crisis. Programs across campus have also had their funding slashed, from student-run retention projects to tour guide organizations.\n\nThe Daily Bruin News team's special project – "A Perfect Storm": How Budget Cuts Have Impacted UCLA – outlines the history behind UCLA's budget shortfalls and tracks the parts of campus that have faced cuts.`,
    timeline: [],
    maps: [],

    articles: null,
    developer_credits: [],
    designers_journalist_credit: [],
  });

  // Mobile/desktop map selection (stable under zoom)
  const [isMobile, setIsMobile] = useState(isCoarsePointer());

  useEffect(() => {
    const mq = window.matchMedia("(hover: none) and (pointer: coarse)");
    const handler = (e) => setIsMobile(e.matches);

    // Safari compatibility
    if (mq.addEventListener) mq.addEventListener("change", handler);
    else mq.addListener(handler);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", handler);
      else mq.removeListener(handler);
    };
  }, []);

  useEffect(() => {
    fetch("https://oink.dailybruin.com/api/packages/flatpages/test-package")
      .then((res) => res.json())
      .then((res) => {
        if (res.data && res.data["article.aml"]) {
          setData((prev) => ({
            ...prev,
            ...res.data["article.aml"],
            // if backend provides articles, use them; otherwise keep fallbacks
            articles:
              res.data["article.aml"].articles && res.data["article.aml"].articles.length
                ? res.data["article.aml"].articles
                : prev.articles,
          }));
        }
      });
    // .catch(err => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="App">
      <Header />

      <section id="home">
        <Landing data={data} />
        <Subheader data={data} />
      </section>

      <section id="timeline">
        <TimelineContainer data={data.timeline} />
      </section>

      <section id="map">
        {isMobile ? (
          <MapMobilePage data={data.maps} />
        ) : (
          <MapDesktopPage data={data.maps} />
        )}
      </section>

      <section id="read-more">
        <ArticleCardsSection
          title="Read more of The Bruin’s budget cut coverage:"
          articles={data.articles}
        />
      </section>

      <section id="about">
        <Credits
          developers={data.developer_credits}
          designers={data.designers_journalist_credit}
        />
      </section>

      <Footer />
    </div>
  );
}

export default App;