import React, { useState } from "react";
import './map-desktop.css';
import LeftColumn from "./components/map-left-column";
import RightColumn from "./components/map-right-column";
import map1 from "./images/maps/map1.png";
import map2 from "./images/maps/map2.png";
import map3 from "./images/maps/map3.png";
import map4 from "./images/maps/map4.png";
import map5 from "./images/maps/map5.png";

export default function MapMobilePage() {
  const [/*activeIndex,*/ setActiveIndex] = useState(0);

  const defaultProps = [
    {
      map_image: map1,
      map_description: "get rid of this blurb + articles",
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
      map_description: "UCLA’s Community Programs Office – which provides basic needs resources for students – temporarily closed late September because of UCLA Student Affairs’ hiring review delays, employees alleged. UCLA implemented the hiring review to ensure it prioritized critical positions amid budgetary challenges, two administrators announced in an Aug. 20 email.",
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
      map_description: "The federal government suspended $584 million of UCLA’s research grants in late July, halting hundreds of science research projects. UCLA also cut the mathematics department’s budget, causing it to reduce its teaching assistants’ hours and eliminate graders altogether.",
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
    map_image: map4,
    map_description: "UCLA’s Academic Advancement Program paused several counseling initiatives meant to support students from low-income and marginalized backgrounds, citing budget cuts. The university also reduced language programs and cut all funding from its only official humanities undergraduate research journal.",

    article_title_1: "Looking ahead to UCLA football’s 2026 season following lackluster 2025 campaign",
    article_byline_1: "Connor Dullinger and Grant Walters",
    article_url_1: "https://dailybruin.com/2025/11/23/looking-ahead-to-ucla-footballs-2026-season-following-lackluster-2025-campaign",
    article_image_1: "https://assets3.dailybruin.com/images/rivalry-issue-25-26/A.sp_.football.DullysDrop.UCLAFuture.11.20.25.AGS_-2414ff54267f479b1d27c4ac52a51ec3.jpg",  

    article_title_2: "Looking ahead to UCLA football’s 2026 season following lackluster 2025 campaign",
    article_byline_2: "Connor Dullinger and Grant Walters",
    article_url_2: "https://dailybruin.com/2025/11/23/looking-ahead-to-ucla-footballs-2026-season-following-lackluster-2025-campaign",
    article_image_2: "https://assets3.dailybruin.com/images/rivalry-issue-25-26/A.sp_.football.DullysDrop.UCLAFuture.11.20.25.AGS_-2414ff54267f479b1d27c4ac52a51ec3.jpg" , 

    article_title_3: "Looking ahead to UCLA football’s 2026 season following lackluster 2025 campaign",
    article_byline_3: "Connor Dullinger and Grant Walters",
    article_url_3: "https://dailybruin.com/2025/11/23/looking-ahead-to-ucla-footballs-2026-season-following-lackluster-2025-campaign" ,
    article_image_3: "https://assets3.dailybruin.com/images/rivalry-issue-25-26/A.sp_.football.DullysDrop.UCLAFuture.11.20.25.AGS_-2414ff54267f479b1d27c4ac52a51ec3.jpg"  ,
    },
    {
      map_image: map5,
      map_description: "UCLA plans to consolidate campus services – including information technology, marketing, event planning and academic personnel services – and has limited hiring and travel to cut costs, according to internal documents obtained by the Daily Bruin. UCLA also reduced the budget of academic advising and tour guide organizations, limiting working hours and the frequency of tours.",

      article_title_1: "Looking ahead to UCLA football’s 2026 season following lackluster 2025 campaign",
      article_byline_1: "Connor Dullinger and Grant Walters",
      article_url_1: "https://dailybruin.com/2025/11/23/looking-ahead-to-ucla-footballs-2026-season-following-lackluster-2025-campaign",
      article_image_1: "https://assets3.dailybruin.com/images/rivalry-issue-25-26/A.sp_.football.DullysDrop.UCLAFuture.11.20.25.AGS_-2414ff54267f479b1d27c4ac52a51ec3.jpg",  

      article_title_2: "Looking ahead to UCLA football’s 2026 season following lackluster 2025 campaign",
      article_byline_2: "Connor Dullinger and Grant Walters",
      article_url_2: "https://dailybruin.com/2025/11/23/looking-ahead-to-ucla-footballs-2026-season-following-lackluster-2025-campaign",
      article_image_2: "https://assets3.dailybruin.com/images/rivalry-issue-25-26/A.sp_.football.DullysDrop.UCLAFuture.11.20.25.AGS_-2414ff54267f479b1d27c4ac52a51ec3.jpg" , 

      article_title_3: "Looking ahead to UCLA football’s 2026 season following lackluster 2025 campaign",
      article_byline_3: "Connor Dullinger and Grant Walters",
      article_url_3: "https://dailybruin.com/2025/11/23/looking-ahead-to-ucla-footballs-2026-season-following-lackluster-2025-campaign" ,
      article_image_3: "https://assets3.dailybruin.com/images/rivalry-issue-25-26/A.sp_.football.DullysDrop.UCLAFuture.11.20.25.AGS_-2414ff54267f479b1d27c4ac52a51ec3.jpg"  ,
    }
  ];

  return (
    <div>
      <h2 className = "map-title">
        Where Budget Cuts Have Impacted UCLA
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
