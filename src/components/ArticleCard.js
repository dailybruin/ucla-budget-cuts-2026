// src/components/ArticleCard.js
import styled from "styled-components";

const FLATPAGE_BLUE = "#165383";

/**
 * Controls:
 * - MEDIA_END: where the photo stops (photo will NOT exist below this)
 * - GRADIENT_START: where the fade from photo -> blue begins (transparent up to here)
 * - TEXT_TOP: where the text block begins (push text down without affecting gradient)
 */
const MEDIA_END = "62%";
const GRADIENT_START = "50%";
const TEXT_TOP = "62%";

const Card = styled.a`
  width: 100%;
  aspect-ratio: 367 / 376;

  position: relative;
  display: block;

  border-radius: 10px;
  overflow: hidden;

  text-decoration: none;
  color: inherit;

  transition: transform 160ms ease, box-shadow 160ms ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18);
  }

  @media (hover: none) {
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`;

/* Photo only lives in the top portion */
const Media = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: ${MEDIA_END};

  background: #d9d9d9;
`;

/* Solid base fills below the photo */
const Bottom = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: ${MEDIA_END};
  bottom: 0;

  background: ${FLATPAGE_BLUE};
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  display: block;

  object-fit: cover;
  object-position: center;

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

/* Overlay gradient covers entire card and ends in FULL solid blue */
const Gradient = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;

  background: linear-gradient(
    to bottom,
    rgba(22, 83, 131, 0) 0%,
    rgba(22, 83, 131, 0) ${GRADIENT_START},
    rgba(22, 83, 131, 0.85) ${MEDIA_END},
    ${FLATPAGE_BLUE} 100%
  );
`;

/* Text: headline at top of readable region, byline pinned to bottom */
const Info = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: ${TEXT_TOP};
  bottom: 0;

  padding: clamp(10px, 1.6vw, 15px) clamp(12px, 1.8vw, 17px);
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
      </Media>

      <Bottom />
      <Gradient />

      <Info>
        <Headline>{headline}</Headline>
        <Byline>{author}</Byline>
      </Info>
    </Card>
  );
}