import styled, { createGlobalStyle } from "styled-components";

/* Global styles — loads Literata and Source Sans 3 from Google Fonts */
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Literata:ital,opsz,wght@0,7..72,200..900;1,7..72,200..900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@200..900&display=swap');
`;

/* Breakpoints for responsive design */
const breakpoints = {
    tablet: '1024px',
    mobile: '768px',
};

const CreditsContainer = styled.div`
    width: 100%;
    padding: 4em 2rem;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    text-align: center;
    position: relative;
    justify-content: center;
    box-sizing: border-box;
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 100%;
    max-width: 75%;
    box-sizing: border-box;
`;

/* H4 spec: Literata, 25px, 500 Weight, 100% Line Height */
const SectionTitle = styled.h2`
    font-family: 'Literata', serif;
    font-size: 1.5625em; /* 25px */
    font-weight: 500;
    color: #165383;
    text-align: center;
    line-height: 100%;
    letter-spacing: 0%;
    margin: 0;

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 1.25em; /* 20px */
        font-weight: 400;
    }
`;

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center; /* This centers the last row */
    gap: 1.5rem;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: ${breakpoints.tablet}) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${breakpoints.mobile}) {
        grid-template-columns: 1fr;
        max-width: 31.25rem; /* 500px */
        margin: 0 auto;
    }
`;

const CreditCard = styled.div`
    background-color: white;
    border: 2px solid #000000;
    border-radius: 0.75rem; /* 12px */
    padding: 1.5rem; /* 24px */
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 0.5rem; /* 8px */
    box-sizing: border-box;
`;

/* H4 spec: Literata, 25px, 500 Weight, 100% Line Height */
const Name = styled.h3`
    font-family: 'Literata', serif;
    font-size: 1.5625em; /* 25px */
    font-weight: 500;
    color: #165383;
    line-height: 100%;
    letter-spacing: 0%;
    margin: 0;

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 1.25em; /* 20px */
        font-weight: 400;
    }
`;

/* caption sm spec: Source Sans 3, 20px, 600 Weight, 110% Line Height */
const Position = styled.p`
    font-family: 'Source Sans 3', sans-serif;
  font-size: 1.25em; 
  font-weight: 600; /* Must be 600 for SemiBold */
  line-height: 110%; /* Per Figma spec */
  color: #165383;
  margin: 0;

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 1em; /* 16px */
    }
`;

const Credits = ({ developers, designers }) => {
    if (!developers && !designers) return null;

    const writerList = [
        { name: "Daily Bruin News team", position: "" }
    ];

    const devList = developers || [
        { name: "First, Last name", position: "DB Position" },
        { name: "First, Last name", position: "DB Position" },
        { name: "First, Last name", position: "DB Position" },
        { name: "First, Last name", position: "DB Position" },
        { name: "First, Last name", position: "DB Position" },
        { name: "First, Last name", position: "DB Position" }
    ];

    const designerList = designers || [
        { name: "First, Last name", position: "DB Position" },
        { name: "First, Last name", position: "DB Position" },
        { name: "First, Last name", position: "DB Position" }
    ];

    return (
        <>
            <GlobalStyle />
            <CreditsContainer>
                <Section>
                    <SectionTitle>Written by</SectionTitle>
                    <Grid style={{ gridTemplateColumns: '1fr', maxWidth: '31.25rem' }}>
                        {writerList.map((writer, index) => (
                            <CreditCard key={index}>
                                <Name>{writer.name}</Name>
                                {writer.position && <Position>{writer.position}</Position>}
                            </CreditCard>
                        ))}
                    </Grid>
                </Section>

                <Section>
                    <SectionTitle>Developers</SectionTitle>
                    <Grid>
                        {devList.map((dev, index) => (
                            <CreditCard key={index}>
                                <Name>{dev.name}</Name>
                                <Position>{dev.position}</Position>
                            </CreditCard>
                        ))}
                    </Grid>
                </Section>

                <Section>
                    <SectionTitle>Designers and Data Journalists</SectionTitle>
                    <Grid>
                        {designerList.map((designer, index) => (
                            <CreditCard key={index}>
                                <Name>{designer.name}</Name>
                                <Position>{designer.position}</Position>
                            </CreditCard>
                        ))}
                    </Grid>
                </Section>
            </CreditsContainer>
        </>
    );
};

export default Credits;