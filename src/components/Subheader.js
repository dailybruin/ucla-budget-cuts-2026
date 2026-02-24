import styled, { createGlobalStyle } from "styled-components";

/* Global styles — loads Source Sans 3 from Google Fonts */
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@200..900&display=swap');
`;

const breakpoints = {
    mobile: '768px',
};

const SubheaderContainer = styled.div`
    width: 100%;
    /* Figma shows significant whitespace around the text block */
    min-height: 80vh; 
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding: 5rem 2rem; 
    box-sizing: border-box;

    @media (max-width: ${breakpoints.mobile}) {
        padding: 3rem 1.25rem;
        align-items: flex-start;
    }
`;

const SubheaderText = styled.div`
    font-family: 'Source Sans 3', sans-serif;
    font-weight: 400;
    color: #000000;
    text-align: left;
    /* Figma subheader text typically uses a tighter line height than 1.6 */
    line-height: 1.4; 
    /* Standard readable column width in Figma */
    max-width: 800px; 
    width: 100%;
    font-size: 1.25rem; /* 20px */

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 1rem; /* 16px */
        line-height: 1.5;
    }

    p {
        /* Paragraph spacing to match the "Perfect Storm" layout */
        margin: 0 0 1.5rem 0; 
    }

    p:last-child {
        margin-bottom: 0;
    }

    a {
        color: #000000;
        text-decoration: underline;
        /* Matches the black link style in your screenshot */
        &:hover {
            opacity: 0.6;
        }
    }
`;

const Subheader = ({ data }) => {
    return (
        <>
            <GlobalStyle />
            <SubheaderContainer id="subheader">
                <SubheaderText>{data?.subheading}</SubheaderText>
            </SubheaderContainer>
        </>
    );
};

export default Subheader;