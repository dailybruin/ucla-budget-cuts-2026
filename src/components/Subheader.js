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
    @media (max-width: 768px) {
      padding-bottom: 30%;
    }
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

    a{
      color: #000000;}
`;

const Subheader = ({ data }) => {
  return (
    <>
      <GlobalStyle />
      <SubheaderContainer>
        <SubheaderText>{data?.subheading}</SubheaderText>
      </SubheaderContainer>
    </>
  );
};

export default Subheader;