import { useEffect, useRef } from "react";
import MapArticleCard from "./map-article-card";
import "./map-right-column.css";

function TextDescription({ mapdescription }) {
  return (
    <div className="text-description-container">
      <p>{mapdescription}</p>
    </div>
  );
}

export default function RightColumn({ data, index, setActiveIndex }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Only run observer on desktop
    if (window.innerWidth <= 768) return;
    const currentSection = sectionRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveIndex(index); // 🔥 image swap trigger
        }
      },
      {
        threshold: 0.5,             // trigger as soon as section starts to appear
        rootMargin: "-40% 0px 0px 0px"
      }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, [index, setActiveIndex]);

  return (
    <div className="right-column-container" ref={sectionRef}>
      <TextDescription mapdescription={data.map_description} />

      <MapArticleCard
        title={data.article_title_1}
        byline={data.article_byline_1}
        url={data.article_url_1}
        image={data.article_image_1}
      />

      <MapArticleCard
        title={data.article_title_2}
        byline={data.article_byline_2}
        url={data.article_url_2}
        image={data.article_image_2}
      />

      <MapArticleCard
        title={data.article_title_3}
        byline={data.article_byline_3}
        url={data.article_url_3}
        image={data.article_image_3}
      />
    </div>
  );
}