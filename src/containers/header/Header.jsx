import { styled } from "styled-components";
import Title from "../../components/ui/Title";
import Paragraph from "../../components/ui/Paragraph";

function Header() {
  return (
    <StyledHeader>
      <div className="content">
        <Heading>
          <Title className="title">
            Let’s Build Something amazing with GPT-3 OpenAI
          </Title>
          <Paragraph className="paragraph">
            Yet bed any for traveling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </Paragraph>
        </Heading>
        <Form className="form">
          <input type="text" placeholder="Your Email Address" />
          <button>Get Started</button>
        </Form>
        <People className="people">
          <img src="/src/assets/people.png" alt="comments" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </People>
      </div>
      <div className="image">
        <img src="/src/assets/ai.png" alt="ia" />
      </div>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;

  .title {
    font-size: 42px;
    line-height: 45px;
    letter-spacing: -1px;
  }

  .paragraph {
    font-size: 15px;
    line-height: 25px;
  }
  .content {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  .image {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    .paragraph {
      font-size: 18px;
      line-height: 28px;
    }
    .content {
      flex: 1;
    }
    .image {
      flex: 1;
      height: 450px;
    }
  }

  @media screen and (min-width: 1200px) {
    padding: 1rem 6rem;
    .title {
      font-size: 62px;
      line-height: 75px;
      letter-spacing: -4px;
    }
    .paragraph {
      font-size: 20px;
      line-height: 27.32px;
    }
    .image {
      flex: 1;
      height: auto;
    }
    .form {
      input {
        height: 73px;
        min-width: 456px;
        font-size: 20px;
      }
      button {
        font-size: 20px;
      }
    }
    .people {
      gap: 10px;
      img {
        width: 200px;
        //height: 38px;
      }

      p {
        font-size: 12px;
      }
    }
  }
`;
const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
const Form = styled.form`
  display: flex;
  input {
    background-color: var(--color-blog);
    border: none;
    outline: none;
    height: 53px;
    min-width: 65%;
    border-radius: 5px 0px 0px 5px;
    font-family: var(--font-family);
    padding-left: 15px;
    font-size: 14px;
    color: var(--color-text);
  }
  button {
    background-color: var(--color-btn-bg);
    width: 100%;
    border-radius: 0px 5px 5px 0px;
    color: var(--color-text-basic);
    font-family: var(--font-family);
    font-size: 14px;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
const People = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  img {
    width: 155px;
  }

  p {
    font-size: 10px;
    font-family: var(--font-family);
    font-weight: 500;
    color: var(--color-text-basic);
  }
`;
