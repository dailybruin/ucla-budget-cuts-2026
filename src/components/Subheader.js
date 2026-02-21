import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@200..900&display=swap');
`;

const SubheaderContainer = styled.div`
    width: 100%;
    height: 100vh;
    max-width: 680px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    margin: 0 auto;
`;

const SubheaderText = styled.h1`
    font-family: 'Source Sans 3', sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: #000000;
    text-align: left;
    line-height: 160%;
    letter-spacing: 0%;
    max-width: 680px;
    padding: 0 20px;
`;

const Subheader = ({ data }) => {
    const formatted = data?.subheading
        ?.split('\n\n')
        .map(p => `<p>${p}</p>`)
        .join('') || '<p>Subheader</p>';

  return (
    <>
      <GlobalStyle />
      <SubheaderContainer>
        <SubheaderText dangerouslySetInnerHTML={{ __html: formatted }} />
      </SubheaderContainer>
    </>
  );
};

export default Subheader;