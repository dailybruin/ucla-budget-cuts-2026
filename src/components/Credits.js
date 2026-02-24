import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Literata:ital,opsz,wght@0,7..72,200..900;1,7..72,200..900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@200..900&display=swap');
`;

const CreditsContainer = styled.div`
    width: 100%;
    padding: 4rem 2rem;
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
    max-width: 1200px;
    box-sizing: border-box;
`;

const SectionTitle = styled.h2`
  font-family: 'Literata', serif;
  font-size: 36px;
  font-weight: 500;
  color: #165383;
  text-align: center;
  margin: 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
  }
`;

const CreditCard = styled.div`
  background-color: white;
  border: 2px solid #000000;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  box-sizing: border-box;
`;

const Name = styled.h3`
  font-family: 'Literata', serif;
  font-size: 25px;
  font-weight: 500;
  color: #165383;
  margin: 0;
`;

const Position = styled.p`
  font-family: 'Source Sans 3', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #165383;
  margin: 0;
`;

const Credits = ({ developers = [], designers = [] }) => {
  const writers = [{ name: "Daily Bruin News team", position: "" }
  ];

  return (
    <>
      <GlobalStyle />
      <CreditsContainer>
        <Section>
          <SectionTitle>Reporting by</SectionTitle>
          <Grid style={{ gridTemplateColumns: '1fr', maxWidth: '500px' }}>
            {writers.map((writer, index) => (
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
            {developers.map((dev, index) => (
              <CreditCard key={index}>
                <Name>{dev.last_name} {dev.first_name}</Name>
                <Position>{dev.position}</Position>
              </CreditCard>
            ))}
          </Grid>
        </Section>

        <Section>
          <SectionTitle>Designers and Data Journalists</SectionTitle>
          <Grid>
            {designers.map((designer, index) => (
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