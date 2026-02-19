import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  font-family: 'IBM Plex Serif', serif;
  position: relative;
`;

const Timeline = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: center;
  border-left: 1px solid black;

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 425px) {
    width: 90%;
    margin-right: 5%;
  }
`;

const TimelineItem = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  padding-bottom: 10vh;
  position: relative;
  will-change: opacity, transform, filter;

  @media (max-width: 425px) {
    flex-direction: column;
    padding-bottom: 15vh;
  }
`;

const DateColumn = styled.div`
    width: 25%;
    padding-left: 5%; /* Space between line and date */
    padding-right: 0;
    text-align: left; /* Shift text to left */
    border-left: none;
    border-right: none;
    position: relative;

    @media (max-width: 768px) {
        text-align: left;
    }
  @media (max-width: 425px) {
    width: 100%;
    margin-bottom: 0;
  }
`;

const Dot = styled.div`
    /* The Dot */
    content: '';
    position: absolute;
    left: -5px; /* Center dot on left border */
    width: 9px;
    height: 9px;
    background-color: black;
    border-radius: 50%;
    transform: scale(0.85);
    opacity: 0.35;
    transition: transform 300ms ease, opacity 300ms ease;
    ${props => props.isActive && css`
      transform: scale(1);
      opacity: 1;
  `}
`;

const DateText = styled.h2`
  width: 100%;
  font-size: 2rem;
  font-weight: bold;
  color: #2c3e50;
  margin-top: -15px;
  position: sticky;
  top: 40px;
`;

const ContentColumn = styled.div`
  width: 75%;
  margin-left: 10%;;
  display: flex;
  flex-direction: column;
  text-align: left;

  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 425px) {
    margin-left: 5%;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-top: 0;
  margin-bottom: 20px;
  text-align: left;
  max-width: 600px;

  /* Stagger: text appears slightly before image when active */
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 650ms ease, transform 650ms ease;

  ${props => props.isActive && css`
    opacity: 1;
    transform: translateY(0);
  `}
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);

  opacity: 0;
  transform: translateY(14px) scale(0.99);
  transition: opacity 200ms ease, transform 200ms ease;
  transition-delay: 120ms;

  ${props => props.isActive && css`
    opacity: 1;
    transform: translateY(0) scale(1);
  `}
`;

/** Helper: one section that becomes "active" when it hits the center band */
const ScrollActivateItem = ({ children, onActiveChange }) => {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                onActiveChange(entry.isIntersecting);
            },
            {
                // This makes “active” happen around the middle of the viewport (NYT-style)
                root: null,
                rootMargin: "-45% 0px -45% 0px",
                threshold: 0,
            }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [onActiveChange]);

    return (
        <div ref={ref} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            {children}
        </div>
    );
};

const TimelineContainer = (data) => {
    const timeline = !data.data ? [
        {
            timeline_date: "December 2006",
            timeline_description:
                "The highlight of my career is being able to bust their ass. December 2, 2006, best day of my college career.",
            timeline_image:
                "https://assets3.dailybruin.com/images/rivalry-issue-25-26/A.sp_.football.feature.MJD_.11.23.25.file_-19a0de0cfc3c132740b6be3caa6980bb.jpg",
        },
        {
            timeline_date: "November 2008",
            timeline_description:
                "Another significant event in the timeline, showcasing the intense rivalry and the moments that defined the era.",
            timeline_image:
                "https://assets3.dailybruin.com/images/rivalry-issue-25-26/A.sp_.football.feature.MJD_.11.23.25.file_-19a0de0cfc3c132740b6be3caa6980bb.jpg",
        },
        {
            timeline_date: "October 2010",
            timeline_description:
                "Reflecting on the past victories and the challenges overcome during this period.",
            timeline_image:
                "https://assets3.dailybruin.com/images/rivalry-issue-25-26/A.sp_.football.feature.MJD_.11.23.25.file_-19a0de0cfc3c132740b6be3caa6980bb.jpg",
        },
        {
            timeline_date: "September 2012",
            timeline_description:
                "A memorable game that brought the community together and solidified the team's legacy.",
            timeline_image:
                "https://assets3.dailybruin.com/images/rivalry-issue-25-26/A.sp_.football.feature.MJD_.11.23.25.file_-19a0de0cfc3c132740b6be3caa6980bb.jpg",
        },
    ] : data.timeline;

    const [activeIndex, setActiveIndex] = useState(-1);
    const [dotTops, setDotTops] = useState([])
    const timelineItemRefs = useRef([])
    useEffect(() => {
        const handleScroll = () => {
            const tops = timelineItemRefs.current.map((ref) => {
                if (!ref) return 0
                const rect = ref.getBoundingClientRect()
                return Math.max(0, Math.min(55 - rect.top, rect.height))
            })
            setDotTops(tops)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <Container>
            <Timeline>
                {timeline.map((event, index) => {
                    const isActive = index === activeIndex;

                    return (
                        <ScrollActivateItem
                            key={index}
                            onActiveChange={(inView) => {
                                if (inView) setActiveIndex(index);
                            }}
                        >
                            <TimelineItem isActive={isActive} isLast={index === timeline.length - 1} ref={el => timelineItemRefs.current[index] = el}>
                                <Dot isActive={isActive} style={{ top: `${dotTops[index] ?? 0}px` }} />
                                <DateColumn isActive={isActive}>
                                    <DateText>{event.timeline_date}</DateText>
                                </DateColumn>
                                <ContentColumn>
                                    <Description isActive={isActive}>
                                        {event.timeline_description}
                                    </Description>

                                    <Image
                                        isActive={isActive}
                                        src={event.timeline_image}
                                        alt={`Timeline event ${event.timeline_date}`}
                                    />
                                </ContentColumn>
                            </TimelineItem>
                        </ScrollActivateItem>
                    );
                })}
            </Timeline>
        </Container>
    );
};

export default TimelineContainer;
