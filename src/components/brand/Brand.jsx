import { styled } from "styled-components";
import { google, slack, atlassian, dropbox, shopify } from "./imports";

function Brand() {
  return (
    <StyledBrand>
      <div>
        <img src={google} />
      </div>
      <div>
        <img src={slack} />
      </div>
      <div>
        <img src={atlassian} />
      </div>
      <div>
        <img src={dropbox} />
      </div>
      <div>
        <img src={shopify} />
      </div>
    </StyledBrand>
  );
}

const StyledBrand = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 15px;

  @media screen and (min-width: 768px) {
    padding-top: 2rem;

  }

  @media screen and (min-width: 1200px) {
    padding-top: 0rem;
    gap: 25px;
    img {
      width: 101px;
    }
  }
`;

export default Brand;
