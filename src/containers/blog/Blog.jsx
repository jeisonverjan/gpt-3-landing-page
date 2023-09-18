import { styled } from "styled-components";
import Title from "../../components/ui/Title";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

function Blog() {
  return (
    <StyledBlog id="library">
      <Title>A lot is happening, We are blogging about it.</Title>
      <div className="blog-content">
        <Article
          image={blog01}
          date="Sep 26, 2021"
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
        />
        <aside>
          <Article
            image={blog02}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            image={blog03}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            image={blog04}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            image={blog05}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </aside>
      </div>
    </StyledBlog>
  );
}

export default Blog;

const StyledBlog = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;

  h1 {
    font-size: 42px;
    line-height: 45px;
    letter-spacing: -1px;
  }

  .blog-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  aside {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    justify-content: center;
    gap: 3rem;

    h1 {
      font-size: 52px;
      line-height: 55px;
      letter-spacing: -0.04em;
      padding: 0.5rem;
    }
  }

  @media screen and (min-width: 1200px) {
    gap: 6rem;
    margin: 4rem 6rem;
    h1 {
      max-width: 60%;
      font-size: 62px;
      line-height: 75px;
      letter-spacing: -0.04em;
    }
    .blog-content {
      flex-direction: row;
      align-items: unset;
      gap: 2rem;
    }
    aside {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }
  }
`;
