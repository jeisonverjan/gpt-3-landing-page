import { styled } from "styled-components";

function Cta() {
  return (
    <StyledCta>
      <div className="section-content">
        <p>Request Early Access to Get Started</p>
        <h4>Register today & start exploring the endless possibilities.</h4>
      </div>
      <div className="section-btn">
        <button>Get Started</button>
      </div>
    </StyledCta>
  );
}

export default Cta;

const StyledCta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
  padding: 1rem;
  gap: 1.5rem;
  background: var(--gradient-bar);
  border-radius: 10.72px;

  .section-content {
    p {
      font-family: var(--font-family);
      font-size: 12px;
      font-weight: 500;
      line-height: 30px;
      letter-spacing: 0em;
      text-align: left;
    }

    h4 {
      font-family: var(--font-family);
      font-size: 20px;
      font-weight: 800;
      line-height: 35px;
      letter-spacing: 0em;
      text-align: left;
    }
  }

  .section-btn {
    button {
      background-color: var(--color-bg);
      color: var(--color-text-basic);
      padding: 1rem;
      border-radius: 40px;
      font-family: var(--font-family);
      font-size: 18px;
      font-weight: 700;
      line-height: 30px;
      letter-spacing: 0em;
      min-width: 189px;
      min-height: 59.4px;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }

  @media screen and (min-width: 1200px) {
    margin: 2rem 6rem;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 3rem;
    .section-content {
      h4 {
        font-size: 24px;
        line-height: 45px;
      }
    }
  }
`;
