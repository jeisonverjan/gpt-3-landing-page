import { styled } from "styled-components";
import { Feature } from "../../components";
import Title from "../../components/ui/Title";

function WhatGPT3() {
  return (
    <StyledWhatGPT3>
      <div className="feature">
        <Feature
          title="What is GPT-3"
          position="inFront"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>
      <div className="section-title">
        <Title>The possibilities are beyond your imagination</Title>
        <p>Explore The Library</p>
      </div>
      <div className="features">
        <Feature
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
        />
        <Feature
          title="Knowledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments."
        />
        <Feature
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments."
        />
      </div>
    </StyledWhatGPT3>
  );
}

export default WhatGPT3;

const StyledWhatGPT3 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 2rem;
  padding: 2rem;
  background: var(--color-footer);

  /* ff 3.6+ */
  background: -moz-radial-gradient(
    circle at 30% -100%,
    #042c54 25%,
    rgba(4, 44, 84, 1) 85%,
    rgba(27, 120, 222, 1) 100%
  );

  /* safari 5.1+,chrome 10+ */
  background: -webkit-radial-gradient(
    circle at 30% -100%,
    #042c54 25%,
    rgba(4, 44, 84, 1) 85%,
    rgba(27, 120, 222, 1) 100%
  );

  /* opera 11.10+ */
  background: -o-radial-gradient(
    circle at 30% -100%,
    #042c54 25%,
    rgba(4, 44, 84, 1) 85%,
    rgba(27, 120, 222, 1) 100%
  );

  /* ie 10+ */
  background: -ms-radial-gradient(
    circle at 30% -100%,
    #042c54 25%,
    rgba(4, 44, 84, 1) 85%,
    rgba(27, 120, 222, 1) 100%
  );

  /* global 92%+ browsers support */
  background: radial-gradient(
    circle at 30% -100%,
    #042c54 25%,
    rgba(4, 44, 84, 1) 85%,
    rgba(27, 120, 222, 1) 100%
  );

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  .section-title {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    h1 {
      font-size: 24px;
      line-height: 35px;
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

  .features {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }

  @media screen and (min-width: 768px) {
    .section-title {
      h1 {
        max-width: 55%;
      }
    }
  }

  @media screen and (min-width: 1200px) {
    margin: 2rem 6rem;
    padding: 6rem 6rem;
    .features {
      flex-wrap: nowrap;
    }
    .section-title {
      h1 {
        max-width: 35%;
      }
    }
  }
`;
