import { styled } from "styled-components";
import Title from "../../components/ui/Title";

function Footer() {
  return (
    <StyledFooter>
      <div className="heading">
        <Title>Do you want to step in to the future before others</Title>
        <button>Request Early Access</button>
      </div>
      <div className="content">
        <div className="content-column content-column-title">
          <img src="/src/assets/logo.svg" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="content-column">
          <div className="title">
            <h4>Links</h4>
          </div>
          <div className="links">
            <a href="#">Overons</a>
            <a href="#">Social Media</a>
            <a href="#">Counters</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="content-column">
          <div className="title">
            <h4>Company</h4>
          </div>
          <div className="links">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="content-column">
          <div className="title">
            <h4>Get in touch</h4>
          </div>
          <div className="links">
            <a href="#">Crechterwoord K12 182 DK Alknjkcb</a>
            <a href="#">085-132567</a>
            <a href="#">info@payme.net</a>
          </div>
        </div>
      </div>
      <p className="copyright">© 2021 GPT-3. All rights reserved.</p>
    </StyledFooter>
  );
}

export default Footer;

const StyledFooter = styled.div`
  background-color: var(--color-blog);
  padding: 4rem 2rem;
  font-family: var(--font-family);
  color: var(--color-text-basic);
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  .heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5rem;

    h1 {
      font-size: 52px;
      line-height: 55px;
      letter-spacing: -1px;
      text-align: center;
    }

    button {
      font-family: var(--font-family);
      font-size: 18px;
      line-height: 21px;
      letter-spacing: 0em;
      padding: 1.5rem;
      border: 2px solid var(--color-text-basic);
      color: var(--color-text-basic);

      &:hover {
        filter: brightness(0.8);
      }
    }
  }

  .content {
    padding: 4rem 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 2.5rem;

    .content-column-title {
      img {
        width: 118px;
      }
      p {
        font-family: Gilroy-Medium;
        font-size: 12px;
        line-height: 14px;
        letter-spacing: 0em;
        text-align: left;
        max-width: 50%;
      }
    }
    .content-column {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .title {
        font-family: Gilroy-Bold;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: left;
      }
    }

    .links {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      a {
        font-family: Gilroy-Medium;
        font-size: 12px;
        line-height: 14px;
        letter-spacing: 0em;
        text-align: left;

        &:hover {
          filter: brightness(0.8);
        }
      }
    }
  }
  .copyright {
    margin: 0 auto;
    font-family: Gilroy-Medium;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
  }

  @media screen and (min-width: 768px) {
    .content-column-title {
      p {
        min-width: 80%;
      }
    }
  }

  @media screen and (min-width: 1200px) {
    padding: 4rem 8rem;
    gap: 5rem;
    .heading {
      h1 {
        font-size: 62px;
        max-width: 70%;
        line-height: 75px;
        letter-spacing: -0.04em;
      }
    }

    .content-column-title {
      p {
        min-width: 60%;
      }
    }
  }
`;
