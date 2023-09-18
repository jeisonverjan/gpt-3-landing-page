import { styled } from "styled-components";
import Title from "../../components/ui/Title";
import { Feature } from "../../components";

function Features() {
  return (
    <StyledFeatures id="caseStudies">
      <div className="title-section">
        <Title>
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </Title>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="features-section">
        <Feature
          title="Improving end distrusts instantly"
          position="inFront"
          text="From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
        />
        <Feature
          title="Become the tended active"
          position="inFront"
          text="Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
        />
        <Feature
          title="Message or am nothing"
          position="inFront"
          text="Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
        />
        <Feature
          title="Really boy law county"
          position="inFront"
          text="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."
        />
      </div>
    </StyledFeatures>
  );
}

export default Features;

const StyledFeatures = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .title-section {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    h1 {
      font-size: 34px;
      line-height: 40px;
      letter-spacing: 0em;
    }
    p {
      color: var(--color-subtext);
      font-family: var(--font-family);
      font-size: 16px;
      font-weight: 500;
      line-height: 30px;
    }
  }

  .features-section {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  @media screen and (min-width: 1200px) {
    padding: 4rem 6rem;
    flex-direction: row;
    .title-section {
      flex: 1;
      h1 {
        font-size: 34px;
        line-height: 45px;
      }
    }
    .features-section {
      flex: 1.5;
    }
  }
`;
