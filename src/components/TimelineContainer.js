import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  position: relative;
`;

const Timeline = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 550px) {
    width: 90%;
    margin-right: 5%;
  }
`;

const TimelineItem = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 10vh;
  position: relative;
  border-left: 1px solid black;
  ${props => props.isLast && css`   // no border on last item
    border: 1px solid rgba(0,0,0,0);  // transparent border to maintain spacing
  `}


  @media (max-width: 550px) {
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
  @media (max-width: 550px) {
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

const DateText = styled.h3`
  width: 100%;
  font-size: 2rem;
  font-weight: 500;
  font-family: 'Literata', sans-serif;
  color: #165383;
  margin-top: -15px;
  position: sticky;
  top: 70px;
  opacity: 1;
  transition: opacity 300ms ease;

  ${props => props.isHidden && css`
    opacity: 0;
  `}

  ${props => props.isLast && css`
    position: static;
  `}
`;

const ContentColumn = styled.div`
  width: 75%;
  margin-left: 10%;
  margin-top: -15px;
  display: flex;
  flex-direction: column;
  text-align: left;

  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 550px) {
    margin-left: 5%;
  }
`;

const Description = styled.p`
  font-size: 20px;
  font-family: 'Source Sans 3', sans-serif;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0%;
  margin-top: 0;
  margin-bottom: 20px;
  text-align: left;
  width: 100%;

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

const PhotoCredits = styled.small`
    font-family: 'Source Sans 3', sans-serif;
    text-align: right;
    font-size: 12px;
    margin-top: 5px; 
    opacity: 0;
    transition: opacity 650ms ease, transform 650ms ease;
    ${props => props.isActive && css`
        opacity: 1;
        transform: translateY(0);
  `}
`

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
    // console.log(data.data)
    const timeline = data?.data ?? [];

    const [activeIndex, setActiveIndex] = useState(-1);
    const [dotTops, setDotTops] = useState([])
    const [dateHidden, setDateHidden] = useState([])
    const timelineItemRefs = useRef([])
    useEffect(() => {
        const handleScroll = () => {
            const tops = timelineItemRefs.current.map((ref) => {
                if (!ref) return 0
                const rect = ref.getBoundingClientRect()
                return Math.max(0, Math.min(90 - rect.top, rect.height))
            })
            setDotTops(tops)

            // Hide the date when it reaches the image midpoint
            const hidden = timelineItemRefs.current.map((ref) => {
                if (!ref) return false
                const img = ref.querySelector('img')
                if (!img) return false
                const imgRect = img.getBoundingClientRect()
                const imgQuarter = imgRect.top + imgRect.height * 0.25
                return imgQuarter <= 70 // 70px is the sticky top position
            })
            setDateHidden(hidden)
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
                                <Dot isActive={isActive} isLast={index === timeline.length - 1} style={index !== timeline.length - 1 ? { top: `${dotTops[index] ?? 0}px` } : undefined} />
                                <DateColumn isActive={isActive} >
                                    <DateText isLast={index === timeline.length - 1} isHidden={dateHidden[index]}>{event.timeline_date}</DateText>
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
                                    <PhotoCredits isActive={isActive}>{event.timeline_credits}</PhotoCredits>
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
