import { styled } from "styled-components";
import Title from "../../components/ui/Title";
import Paragraph from "../../components/ui/Paragraph";

function Possibility() {
  return (
    <StyledPossibility>
      <div className="image">
        <img src="/possibility.png" alt="virtual glasses" />
      </div>
      <div className="section-content">
        <p>Request Early Access to Get Started</p>
        <Title>The possibilities are beyond your imagination</Title>
        <Paragraph>
          Yet bed any for traveling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </Paragraph>
        <p>Request Early Access to Get Started</p>
      </div>
    </StyledPossibility>
  );
}

export default Possibility;

const StyledPossibility = styled.div`
  display: flex;
  padding: 2rem;
  flex-direction: column;
  gap: 1.5rem;

  .image {
    img {
      width: 100%;
      height: 100%;
    }
  }

  .section-content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    p:first-child,
    p:last-child {
      color: var(--color-subtext);
      font-family: var(--font-family);
      font-size: 16px;
      font-weight: 500;
      line-height: 30px;
    }
    p:first-child {
      color: var(--color-subtext-variation);
    }

    h1 {
      font-size: 34px;
      line-height: 40px;
      letter-spacing: 0em;
    }
  }

  @media screen and (min-width: 1200px) {
    padding: 2rem 6rem;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;
