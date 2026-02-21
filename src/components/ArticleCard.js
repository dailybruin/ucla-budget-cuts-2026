// src/components/ArticleCard.js
import styled from "styled-components";

const FLATPAGE_BLUE = "#165383";

const Card = styled.a`
  width: 100%;
  aspect-ratio: 367 / 376;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: clamp(8px, 1.2vw, 10px);

  padding: clamp(10px, 1.6vw, 15px) clamp(12px, 1.8vw, 17px);
  box-sizing: border-box;

  border-radius: 10px;
  overflow: hidden;

  background: 
    linear-gradient(
      180deg,
      rgba(22, 83, 131, 1) 0%,
      rgba(22, 83, 131, 0.65) 55%,
      rgba(22, 83, 131, 0.25) 100%
    ),
    ${FLATPAGE_BLUE};

  text-decoration: none;
  color: inherit;
`;

/* Make the image "bleed" to the card edges despite card padding */
const ImageWrap = styled.div`
  width: calc(100% + (clamp(12px, 1.8vw, 17px) * 2));
  margin-left: calc(clamp(12px, 1.8vw, 17px) * -1);
  margin-right: calc(clamp(12px, 1.8vw, 17px) * -1);

  margin-top: calc(clamp(10px, 1.6vw, 15px) * -1);

  flex: 1 1 auto;

  overflow: hidden;
  background: #d9d9d9;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

/* Text panel (keeps the exact layout you liked + forces true left alignment) */
const Info = styled.div`
  width: 100%;
  flex: 0 0 auto;

  background: ${FLATPAGE_BLUE};
  border-radius: 10px;

  padding: clamp(10px, 1.6vw, 15px) clamp(12px, 1.8vw, 17px);
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: stretch; /* important: makes children fill width */
  text-align: left;    /* important: overrides any global centering */
  gap: clamp(8px, 1.2vw, 10px);
`;

const Headline = styled.h3`
  margin: 0;
  align-self: stretch;

  color: #ffffff;

  font-family: "Source Sans 3", system-ui, -apple-system, Segoe UI, Roboto,
    Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
  font-size: clamp(16px, 2.1vw, 25px);
  font-style: normal;
  font-weight: 600;
  line-height: 110%;

  text-align: left;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Byline = styled.p`
  margin: 0;
  align-self: stretch;

  color: #ffffff;

  font-family: "Source Sans 3", system-ui, -apple-system, Segoe UI, Roboto,
    Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
  font-size: clamp(12px, 1.4vw, 16px);
  font-style: normal;
  font-weight: 500;
  line-height: 110%;

  text-align: left;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default function ArticleCard({ href, imageUrl, headline, author }) {
  return (
    <Card href={href} target="_blank" rel="noreferrer">
      <ImageWrap>
        <Img src={(imageUrl || "").trim()} alt={headline} loading="lazy" />
      </ImageWrap>

      <Info>
        <Headline>{headline}</Headline>
        <Byline>{author}</Byline>
      </Info>
    </Card>
  );
}
