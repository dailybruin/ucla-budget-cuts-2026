import React, { useState } from "react";
import './map-desktop.css';
import RightColumn from './components/map-right-column';
import LeftColumn from "./components/map-left-column";
import map1 from "./images/maps/map1.png";
import map2 from "./images/maps/map2.png";
import map3 from "./images/maps/map3.png";
import map4 from "./images/maps/map4.png";
import map5 from "./images/maps/map5.png";


function MapDesktopPage({data}) {
  // console.log(data)
  const [activeIndex, setActiveIndex] = useState(0);

  const map_data = data ?? [];

return (
    <div>
      <h2 className = "map-title">
        Where Budget Cuts Have Impacted UCLA
      </h2>

      <div className="map-section">
        {/* LEFT = controlled by scroll */}
        <LeftColumn defaultProps={map_data[activeIndex]} />

        {/* RIGHT = scroll container */}
        <div className="right-scroll-wrapper">
          {map_data.map((props, index) => (
            <div>
            <RightColumn
              key={index}
              defaultProps={props}
              index={index}
              setActiveIndex={setActiveIndex}
            />
              <div style={{ height: "200px" }} />
               <div style={{ height: "200px" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MapDesktopPage;
