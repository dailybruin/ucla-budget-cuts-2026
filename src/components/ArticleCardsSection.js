// src/components/ArticleCardsSection.js
import styled from "styled-components";
import ArticleCard from "./ArticleCard";

const FLATPAGE_BLUE = "#165383";

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: clamp(20px, 3vw, 36px) 16px clamp(40px, 5vw, 60px);
`;

const Title = styled.h2`
  color: ${FLATPAGE_BLUE};
  text-align: center;

  font-family: "Literata", serif;
  font-size: clamp(26px, 4vw, 45px);
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  margin: 0 0 clamp(16px, 2.5vw, 28px) 0;
`;

const Grid = styled.div`
  display: grid;
  gap: clamp(18px, 2vw, 30px);

  grid-template-columns: repeat(3, minmax(0, 1fr));
  max-width: calc(367px * 3 + 30px * 2);
  margin: 0 auto;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    max-width: calc(367px * 2 + 30px * 1);
  }

  @media (max-width: 650px) {
    grid-template-columns: minmax(0, 1fr);
    max-width: 367px;
  }
`;

export default function ArticleCardsSection({ title, articles }) {
  const all_articles = articles ?? [];
  return (
    <Section>
      <Title>{title}</Title>
      <Grid>
        {all_articles.map((a, idx) => (
          <ArticleCard
            key={a.article_url ?? idx}
            href={a.article_url}
            imageUrl={a.article_image}
            headline={a.article_title}
            author={a.article_byline}
          />
        ))}
      </Grid>
    </Section>
  );
}
