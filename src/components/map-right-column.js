import { useEffect, useRef } from "react";
import MapArticleCard from "./map-article-card";
import "./map-right-column.css";

function TextDescription ({mapdescription}) {
    return (
        <div className="text-description-container">
            <p>{mapdescription}</p>
        </div>
    );
}

export default function RightColumn ({defaultProps, index, setActiveIndex}) {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setActiveIndex(index); // 🔥 image swap trigger
                }
            },
            {
                threshold: 0.6  // 60% visible = active
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [index, setActiveIndex]);

    return (
        <div className="right-column-container" ref={sectionRef}>
            <TextDescription mapdescription={defaultProps.map_description}/> 

            <MapArticleCard {...{
              title: defaultProps.article_title_1,
              byline: defaultProps.article_byline_1,
              url: defaultProps.article_url_1,
              image: defaultProps.article_image_1
            }}/>

            <MapArticleCard {...{
              title: defaultProps.article_title_2,
              byline: defaultProps.article_byline_2,
              url: defaultProps.article_url_2,
              image: defaultProps.article_image_2
            }}/>

            <MapArticleCard {...{
              title: defaultProps.article_title_3,
              byline: defaultProps.article_byline_3,
              url: defaultProps.article_url_3,
              image: defaultProps.article_image_3
            }}/>
        </div>
    );
}
