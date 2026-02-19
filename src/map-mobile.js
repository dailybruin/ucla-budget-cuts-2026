import React, { useState } from "react";
import './map-desktop.css';
import LeftColumn from "./components/map-left-column";
import RightColumn from "./components/map-right-column";
import map1 from "./images/maps/map1.png";
import map2 from "./images/maps/map2.png";
import map3 from "./images/maps/map3.png";

export default function MapMobilePage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const defaultProps = [
    {
      map_image: map1,
      map_description: "The highlight of my career is being able to bust their ass. December 2, 2006, best day of my college career.",
      article_title_1: "Looking ahead to UCLA football’s 2026 season following lackluster 2025 campaign",
      article_byline_1: "Connor Dullinger and Grant Walters",
      article_url_1: "https://dailybruin.com/2025/11/23/looking-ahead-to-ucla-footballs-2026-season-following-lackluster-2025-campaign",
      article_image_1: "https://assets3.dailybruin.com/images/rivalry-issue-25-26/A.sp_.football.DullysDrop.UCLAFuture.11.20.25.AGS_-2414ff54267f479b1d27c4ac52a51ec3.jpg",
      article_title_2: "Looking ahead to UCLA football’s 2026 season following lackluster 2025 campaign",
      article_byline_2: "Connor Dullinger and Grant Walters",
      article_url_2: "https://dailybruin.com/2025/11/23/looking-ahead-to-ucla-footballs-2026-season-following-lackluster-2025-campaign",
      article_image_2: "https://assets3.dailybruin.com/images/rivalry-issue-25-26/A.sp_.football.DullysDrop.UCLAFuture.11.20.25.AGS_-2414ff54267f479b1d27c4ac52a51ec3.jpg",
      article_title_3: "Looking ahead to UCLA football’s 2026 season following lackluster 2025 campaign",
      article_byline_3: "Connor Dullinger and Grant Walters",
      article_url_3: "https://dailybruin.com/2025/11/23/looking-ahead-to-ucla-footballs-2026-season-following-lackluster-2025-campaign",
      article_image_3: "https://assets3.dailybruin.com/images/rivalry-issue-25-26/A.sp_.football.DullysDrop.UCLAFuture.11.20.25.AGS_-2414ff54267f479b1d27c4ac52a51ec3.jpg"
    },
    {
      map_image: map2,
      map_description: "The highlight of my career is being able to bust their ass. December 2, 2006, best day of my college career.",
      article_title_1: "Looking ahead to UCLA football’s 2026 season following lackluster 2025 campaign",
      article_byline_1: "Connor Dullinger and Grant Walters",
      article_url_1: "https://dailybruin.com/2025/11/23/looking-ahead-to-ucla-footballs-2026-season-following-lackluster-2025-campaign",
      article_image_1: "https://assets3.dailybruin.com/images/rivalry-issue-25-26/A.sp_.football.DullysDrop.UCLAFuture.11.20.25.AGS_-2414ff54267f479b1d27c4ac52a51ec3.jpg",
      article_title_2: "Looking ahead to UCLA football’s 2026 season following lackluster 2025 campaign",
      article_byline_2: "Connor Dullinger and Grant Walters",
      article_url_2: "https://dailybruin.com/2025/11/23/looking-ahead-to-ucla-footballs-2026-season-following-lackluster-2025-campaign",
      article_image_2: "https://assets3.dailybruin.com/images/rivalry-issue-25-26/A.sp_.football.DullysDrop.UCLAFuture.11.20.25.AGS_-2414ff54267f479b1d27c4ac52a51ec3.jpg",
      article_title_3: "Looking ahead to UCLA football’s 2026 season following lackluster 2025 campaign",
      article_byline_3: "Connor Dullinger and Grant Walters",
      article_url_3: "https://dailybruin.com/2025/11/23/looking-ahead-to-ucla-footballs-2026-season-following-lackluster-2025-campaign",
      article_image_3: "https://assets3.dailybruin.com/images/rivalry-issue-25-26/A.sp_.football.DullysDrop.UCLAFuture.11.20.25.AGS_-2414ff54267f479b1d27c4ac52a51ec3.jpg"
    },
    {
      map_image: map3,
      map_description: "The highlight of my career is being able to bust their ass. December 2, 2006, best day of my college career.",
      article_title_1: "Looking ahead to UCLA football’s 2026 season following lackluster 2025 campaign",
      article_byline_1: "Connor Dullinger and Grant Walters",
      article_url_1: "https://dailybruin.com/2025/11/23/looking-ahead-to-ucla-footballs-2026-season-following-lackluster-2025-campaign",
      article_image_1: "https://assets3.dailybruin.com/images/rivalry-issue-25-26/A.sp_.football.DullysDrop.UCLAFuture.11.20.25.AGS_-2414ff54267f479b1d27c4ac52a51ec3.jpg",
      article_title_2: "Looking ahead to UCLA football’s 2026 season following lackluster 2025 campaign",
      article_byline_2: "Connor Dullinger and Grant Walters",
      article_url_2: "https://dailybruin.com/2025/11/23/looking-ahead-to-ucla-footballs-2026-season-following-lackluster-2025-campaign",
      article_image_2: "https://assets3.dailybruin.com/images/rivalry-issue-25-26/A.sp_.football.DullysDrop.UCLAFuture.11.20.25.AGS_-2414ff54267f479b1d27c4ac52a51ec3.jpg",
      article_title_3: "Looking ahead to UCLA football’s 2026 season following lackluster 2025 campaign",
      article_byline_3: "Connor Dullinger and Grant Walters",
      article_url_3: "https://dailybruin.com/2025/11/23/looking-ahead-to-ucla-footballs-2026-season-following-lackluster-2025-campaign",
      article_image_3: "https://assets3.dailybruin.com/images/rivalry-issue-25-26/A.sp_.football.DullysDrop.UCLAFuture.11.20.25.AGS_-2414ff54267f479b1d27c4ac52a51ec3.jpg"
    }
  ];

  return (
    <div>
      <h2 className = "map-title">
        Where budget cuts have impacted UCLA
      </h2>

      <div className="map-section" style={{ flexDirection: "column", gap: "20px" }}>
        {defaultProps.map((props, index) => (
          <div key={index} className="mobile-map-item">
            <LeftColumn defaultProps={props} />
            <RightColumn
              defaultProps={props}
              index={index}
              setActiveIndex={setActiveIndex}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
