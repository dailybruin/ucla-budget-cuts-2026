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

const TimelineItem = styled.div`
  display: flex;
  width: 80%;
  max-width: 1200px;
  padding-bottom: 70px;
  position: relative;
  will-change: opacity, transform, filter;

  &::before {
    content: '';
    position: absolute;
    top: 14px;
    bottom: 0;
    left: -1px;
    border-left: 2px solid #000;
  }

  ${props => props.isLast && css`
    &::before {
      display: none;
    }
  `}
  
  /* INACTIVE DEFAULT */
  opacity: 0.18;
  transform: translateY(18px);
  filter: blur(1px);

  transition:
    opacity 650ms ease,
    transform 650ms ease,
    filter 650ms ease;

  ${props => props.isActive && css`
    /* ACTIVE */
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  `}

  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    padding-bottom: 40px;

    /* blur can look weird on mobile; optional */
    filter: none;
    opacity: ${props => (props.isActive ? 1 : 0.35)};
  }
`;

const DateColumn = styled.div`
    width: 25%;
    padding-left: 20px; /* Space between line and date */
    padding-right: 0;
    text-align: left; /* Shift text to left */
    border-left: none;
    border-right: none;
    position: relative;
    
    /* The Dot */
    &::after {
        content: '';
        position: absolute;
        top: 0; 
        left: -6px; /* Center dot on left border */
        width: 10px;
        height: 10px;
        background-color: #000;
        border-radius: 50%;
        transform: scale(0.85);
        opacity: 0.35;
        transition: transform 300ms ease, opacity 300ms ease;
    }
    ${props => props.isActive && css`
    &::after {
      transform: scale(1);
      opacity: 1;
    }
  `}


    @media (max-width: 768px) {
        width: 100%;
        text-align: left;
        border-left: none;
        padding-left: 20px;
        margin-bottom: 15px;
        
        &::after {
            left: -6px; /* Keep consistent */
        }
    }
`;

const DateText = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #2c3e50;
  margin: 0;
  position: sticky;
  top: 100px;
`;

const ContentColumn = styled.div`
  width: 75%;
  padding-left: 100px;
  display: flex;
  flex-direction: column;
  text-align: left;

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 18px;
    margin-left: 2px;
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
  transition: opacity 800ms ease, transform 800ms ease;
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

const TimelineContainer = () => {
  const tempTimeline = [
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
  ];

  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <Container>
      {tempTimeline.map((event, index) => {
        const isActive = index === activeIndex;

        return (
          <ScrollActivateItem
            key={index}
            onActiveChange={(inView) => {
              if (inView) setActiveIndex(index);
            }}
          >
            <TimelineItem isActive={isActive} isLast={index === tempTimeline.length - 1}>
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
    </Container>
  );
};

export default TimelineContainer;
