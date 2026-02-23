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

  @media (max-width: 425px) {
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

const DateText = styled.h3`
  width: 100%;
  font-size: 2rem;
  font-weight: 500;
  font-family: 'Literata', sans-serif;
  color: #165383;
  margin-top: -15px;
  position: sticky;
  top: 70px;

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
  @media (max-width: 425px) {
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
    const timeline = data?.timeline ?? [
        {
            timeline_date: "July 2020",
            timeline_description:
                "School staff - which includes deans, faculty, human relations and finance employees for each school - had salary increases totaling 29% or $183 million from 2020 to 2025, according to the documents. Administrative unit salaries also increased $46 million, or 34%.",
            timeline_image:
                "https://assets3.dailybruin.com/images/rivalry-issue-25-26/A.sp_.football.feature.MJD_.11.23.25.file_-19a0de0cfc3c132740b6be3caa6980bb.jpg",
            timeline_credits: "JOE BRUIN/Daily Bruin"
        },
        {
            timeline_date: "May 2022",
            timeline_description:
                "Gov. Gavin Newsom agrees to a five-year funding compact with the UC. He pledges to increase the University's budget by 5% annually in exchange for it enrolling more California residents, who pay lower tuition rates than out-of-state and international students.",
            timeline_image:
                "https://assets3.dailybruin.com/images/rivalry-issue-25-26/A.sp_.football.feature.MJD_.11.23.25.file_-19a0de0cfc3c132740b6be3caa6980bb.jpg",
            timeline_credits: "JOE BRUIN/Daily Bruin"
        },
        {
            timeline_date: "December 2022",
            timeline_description:
                "Teaching assistants and graduate student workers reach a contractual agreement with the UC, ending their one-month strike. The contract increases pay up to 80% from before 2022, improves childcare support and includes remission for tuition for international student workers for three years.",
            timeline_image:
                "https://assets3.dailybruin.com/images/rivalry-issue-25-26/A.sp_.football.feature.MJD_.11.23.25.file_-19a0de0cfc3c132740b6be3caa6980bb.jpg",
            timeline_credits: "JOE BRUIN/Daily Bruin"
        },
        {
            timeline_date: "June 2024",
            timeline_description:
                "The UC received a net funding increase of about 2% in the 2024-25 California state budget. The state was expected to provide the UC with a 5% budget increase in accordance with the higher education compact it entered into with the University in 2022, which pledged annual 5% funding increases in exchange for the UC increasing enrollment, including enrollment of California residents.",
            timeline_image:
                "https://assets3.dailybruin.com/images/rivalry-issue-25-26/A.sp_.football.feature.MJD_.11.23.25.file_-19a0de0cfc3c132740b6be3caa6980bb.jpg",
            timeline_credits: "JOE BRUIN/Daily Bruin"
        },
        {
            timeline_date: "January 2025",
            timeline_description:
                "President Donald Trump starts his second term and begins cutting federal research grants at universities across the United States. More than $230 million in research grants remained suspended or terminated across the UC as of Jan. 8, 2026, according to the UC Office of the President.",
            timeline_image:
                "https://assets3.dailybruin.com/images/rivalry-issue-25-26/A.sp_.football.feature.MJD_.11.23.25.file_-19a0de0cfc3c132740b6be3caa6980bb.jpg",
            timeline_credits: "JOE BRUIN/Daily Bruin"
        },
        {
            timeline_date: "March 2025",
            timeline_description:
                "The university implements cost-cutting measures, including a 10% budget cut for administrative units, a new hiring review process and limits on travel expenditures to reduce operational costs.",
            timeline_image:
                "https://assets3.dailybruin.com/images/rivalry-issue-25-26/A.sp_.football.feature.MJD_.11.23.25.file_-19a0de0cfc3c132740b6be3caa6980bb.jpg",
            timeline_credits: "JOE BRUIN/Daily Bruin"
        },
        {
            timeline_date: "June 2025",
            timeline_description:
                "The UC does not receive a funding increase in the 2025-26 California state budget. The legislature instead defers a $130 million payment to the University to the 2026-27 fiscal year.",
            timeline_image:
                "https://assets3.dailybruin.com/images/rivalry-issue-25-26/A.sp_.football.feature.MJD_.11.23.25.file_-19a0de0cfc3c132740b6be3caa6980bb.jpg",
            timeline_credits: "JOE BRUIN/Daily Bruin"
        },
        {
            timeline_date: "July 2025",
            timeline_description:
                "The Trump administration freezes $584 million of UCLA's federal research funding from the National Institutes of Health, the National Science Foundation and the U.S. Department of Energy.",
            timeline_image:
                "https://assets3.dailybruin.com/images/rivalry-issue-25-26/A.sp_.football.feature.MJD_.11.23.25.file_-19a0de0cfc3c132740b6be3caa6980bb.jpg",
            timeline_credits: "JOE BRUIN/Daily Bruin"
        },
        {
            timeline_date: "November 2025",
            timeline_description:
                "Chancellor Julio Frenk announces the creation of an Executive Budget Action Group, which will manage the university's budgetary shortfall amid state and federal funding cuts. Frenk said in an interview with the Daily Bruin that the group will help UCLA formulate its limited budget in accordance with the university's strategic goals.",
            timeline_image:
                "https://assets3.dailybruin.com/images/rivalry-issue-25-26/A.sp_.football.feature.MJD_.11.23.25.file_-19a0de0cfc3c132740b6be3caa6980bb.jpg",
            timeline_credits: "JOE BRUIN/Daily Bruin"
        },
    ];

    const [activeIndex, setActiveIndex] = useState(-1);
    const [dotTops, setDotTops] = useState([])
    const timelineItemRefs = useRef([])
    useEffect(() => {
        const handleScroll = () => {
            const tops = timelineItemRefs.current.map((ref) => {
                if (!ref) return 0
                const rect = ref.getBoundingClientRect()
                return Math.max(0, Math.min(90 - rect.top, rect.height))
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
                                <Dot isActive={isActive} isLast={index === timeline.length - 1} style={index !== timeline.length - 1 ? { top: `${dotTops[index] ?? 0}px` } : undefined} />
                                <DateColumn isActive={isActive} >
                                    <DateText isLast={index === timeline.length - 1}>{event.timeline_date}</DateText>
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
