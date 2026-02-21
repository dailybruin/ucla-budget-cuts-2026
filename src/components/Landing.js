import styled, { createGlobalStyle } from "styled-components";
import arrow from '../images/arrow.svg'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Literata:ital,opsz,wght@0,7..72,200..900;1,7..72,200..900&display=swap');
`;

const LandingContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
`;

const Headline = styled.h1`
    font-family: 'Literata', serif;
    font-size: 60px;
    font-weight: 600;
    color: #165383;
    text-align: center;
    line-height: 100%;
    letter-spacing: 0%;
    max-width: 1200px;
`;

const ScrollArrow = styled.img`
    position: absolute;
    bottom: 30px;
    width: 60px;
    height: 60px;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(5px);

    }
`;

const Landing = ({data}) => {
//   if (!data) return null;
    const scrollToContent = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    }
  
  return (
    <>
      <GlobalStyle />
      <LandingContainer>
        <Headline>{data?.headline || 'Header'}</Headline>
        {data?.landing_image && <img src={data.landing_image} alt="Landing Illustration" />}
        <ScrollArrow 
            src={arrow}
            alt="Scroll Down"
            onClick={scrollToContent}
        />
      </LandingContainer>
    </>
  );
};

export default Landing;