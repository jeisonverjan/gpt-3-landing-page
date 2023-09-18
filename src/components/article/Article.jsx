import { styled } from "styled-components";

// eslint-disable-next-line react/prop-types
function Article({ image, date, title }) {
  return (
    <StyledArticle>
      <div className="image">
        <img src={image} alt="article" />
      </div>
      <div className="article-content">
        <div className="article-section">
          <p className="mini-text">{date}</p>
          <h3>{title}</h3>
        </div>
        <a className="mini-text" href="#">
          Read Full Article
        </a>
      </div>
    </StyledArticle>
  );
}

export default Article;

const StyledArticle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-blog);
  color: var(--color-text-basic);
  font-family: var(--font-family);
  .image {
    img {
      width: 100%;
      height: 100%;
    }
  }

  .article-content {
    padding: 1rem;
    display: flex;
    gap: 3rem;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    .mini-text {
      font-size: 12px;
      font-weight: 700;
      line-height: 35px;
      letter-spacing: 0em;
    }

    h3 {
      font-size: 19px;
      font-weight: 800;
      line-height: 30px;
      letter-spacing: 0em;
    }

    a:hover {
      filter: brightness(0.8);
    }
  }

  @media screen and (min-width: 768px) {
    width: 90%;
  }

  @media screen and (min-width: 1200px) {
    width: 100%;
  }
`;
