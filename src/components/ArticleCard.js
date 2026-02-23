// src/components/ArticleCard.js
import styled from "styled-components";


const Card = styled.a`
  width: 100%;
  aspect-ratio: 367 / 376;

  position: relative;
  display: block;

  border-radius: 10px;
  overflow: hidden;

  text-decoration: none;
  color: inherit;

  /* Hover */
  transition: transform 160ms ease, box-shadow 160ms ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18);
  }

  /* Mobile: don't “lift” on tap */
  @media (hover: none) {
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`;

/* Image area = the whole card */
const Media = styled.div`
  position: absolute;
  inset: 0;
  background: #d9d9d9;
`;

/* Crop behavior */
const Img = styled.img`
  width: 100%;
  height: 100%;
  display: block;

  object-fit: cover;
  object-position: center;

  /* Subtle zoom on hover */
  transition: transform 220ms ease;

  ${Card}:hover & {
    transform: scale(1.03);
  }

  @media (hover: none) {
    ${Card}:hover & {
      transform: none;
    }
  }
`;

/* Blue -> transparent overlay (lets more photo show) */
const Gradient = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;

  /* vertical gradient like your comp */
  background: linear-gradient(
    180deg,
    rgba(22, 83, 131, 0) 0%,
    rgba(22, 83, 131, 0.0) 50%,
    rgba(22, 83, 131, 0.65) 60%,
    rgba(22, 83, 131, 0.92) 70%
  );
`;

/* Text sits on top of gradient at the bottom */
const Info = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  padding: clamp(10px, 1.6vw, 15px) clamp(12px, 1.8vw, 17px);
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  gap: clamp(8px, 1.2vw, 10px);

  color: #fff;
`;

const Headline = styled.h3`
  margin: 0;

  font-family: "Source Sans 3", system-ui, -apple-system, Segoe UI, Roboto,
    Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
  font-size: clamp(16px, 2.1vw, 25px);
  font-style: normal;
  font-weight: 600;
  line-height: 110%;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  /* Hover: underline headline */
  ${Card}:hover & {
    text-decoration: underline;
  }

  @media (hover: none) {
    ${Card}:hover & {
      text-decoration: none;
    }
  }
`;

const Byline = styled.p`
  margin: 0;

  font-family: "Source Sans 3", system-ui, -apple-system, Segoe UI, Roboto,
    Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
  font-size: clamp(12px, 1.4vw, 16px);
  font-style: normal;
  font-weight: 500;
  line-height: 110%;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default function ArticleCard({ href, imageUrl, headline, author }) {
  return (
    <Card href={href} target="_blank" rel="noreferrer">
      <Media>
        <Img src={(imageUrl || "").trim()} alt={headline} loading="lazy" />
        <Gradient />
      </Media>

      <Info>
        <Headline>{headline}</Headline>
        <Byline>{author}</Byline>
      </Info>
    </Card>
  );
}