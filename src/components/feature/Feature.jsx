import { styled } from "styled-components";
import Paragraph from "../ui/Paragraph";

// eslint-disable-next-line react/prop-types
function Feature({ title, text, position }) {
  return (
    <StyledFeature id="wgpt" $position={position}>
      <h3>{title}</h3>
      <Paragraph className="text">{text}</Paragraph>
    </StyledFeature>
  );
}

export default Feature;

const StyledFeature = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0rem;

  h3 {
    flex: 1.1;
    color: var(--color-text-basic);
    padding: 15px 0px;
    max-width: 180px;
    margin-right: 2rem;
    font-size: 14px;
    line-height: 22px;
    font-weight: 800;
  }

  p {
    flex: 2;
    font-size: 12px;
    line-height: 20px;
    font-weight: 500;
    line-height: 18px;
  }

  &::before {
    content: "";
    position: absolute;
    width: 38px;
    height: 3px;
    top: 0;
    left: 0;
    background: var(--gradient-bar);
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    h3 {
      font-size: 16px;
      line-height: 20px;
      letter-spacing: -0.04em;
    }
    p {
      font-size: 12px;
      line-height: 22px;
    }
  }

  @media screen and (min-width: 1200px) {
    flex-direction: ${(props) =>
      props.$position === "inFront" ? "row" : "column"};
    h3 {
      font-size: 18px;
      line-height: 24px;
      letter-spacing: -0.04em;
    }
    p {
      font-size: 14px;
      line-height: 24px;
    }
  }
`;
