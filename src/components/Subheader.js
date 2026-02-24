import styled from "styled-components";

const SubheaderContainer = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding: 4rem 0;
    box-sizing: border-box;
`;

const SubheaderText = styled.div`
    font-family: 'Source Sans 3', sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #000;
    text-align: left;
    line-height: 1;
    letter-spacing: 160%;

    width: 71.625rem; /* 1146px */

    font-size: 1.25rem; /* 20px */

    @media (max-width: 48em) {
        width: 21.375rem; /* 342px */
        font-size: 1rem; /* 16px */
    }

    p {
        margin-bottom: 2rem;
    }

    p:last-child {
        margin-bottom: 0;
    }

    a {
        text-decoration: underline;
        color: inherit;
    }
`;

const Subheader = () => {
    return (
        <SubheaderContainer id="subheader">
            <SubheaderText>
                <p>
                    UCLA is projected to run a $425 million deficit for the 2025-26 fiscal year, Stephen Agostini, UCLA’s former chief financial officer, told the Daily Bruin on Feb. 6. Chancellor Julio Frenk announced that Agostini had been replaced as CFO four days after the Bruin published a Feb. 13 article in which Agostini alleged that UCLA administrators have mismanaged the university’s finances, contributing to the deficit. Mary Osako, vice chancellor for strategic communications, called Agostini’s deficit projection an overestimate in a Feb. 17 statement but did not provide additional financial data.
                </p>

                <p>
                    The university has not posted annual{" "}
                    <a
                        href="https://www.finance.ucla.edu/corporate-accounting/ucla-annual-financial-reports"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        financial reports
                    </a>
                    , which Agostini said contain erroneous numbers, for the last two fiscal years as of mid-February. Frenk told the Daily Bruin Jan. 15 that several factors – some of which are laid out in the timeline below – have combined to create “a perfect storm” culminating in UCLA’s current budget crisis. Programs across campus have had their funding slashed, from student-run retention projects to tour guide organizations.
                </p>

                <p>
                    The Daily Bruin News team’s special project – “A Perfect Storm”: How Budget Cuts Have Impacted UCLA – outlines the history behind UCLA’s budget shortfalls and tracks the parts of campus that have faced cuts.
                </p>
            </SubheaderText>
        </SubheaderContainer>
    );
};

export default Subheader;