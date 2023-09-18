import { styled } from "styled-components";

// eslint-disable-next-line react/prop-types
function NavList({ menuOpen }) {
  return (
    <StyledNavList $menuopen={String(menuOpen)}>
      <NavItem>
        <a href="#">Home</a>
      </NavItem>
      <NavItem>
        <a href="#wgpt">What is GPT?</a>
      </NavItem>
      <NavItem>
        <a href="#openAi">Open AI</a>
      </NavItem>
      <NavItem>
        <a href="#caseStudies">Case Studies</a>
      </NavItem>
      <NavItem>
        <a href="#library">Library</a>
      </NavItem>
    </StyledNavList>
  );
}

export default NavList;

const StyledNavList = styled.ul`
  background-color: var(--color-bg);
  position: absolute;
  right: ${(props) => (props.$menuopen === "true" ? "0" : "-50%")};
  transition: right 0.4s ease-in-out, background-color 0.3s, border 0.3s;
  top: 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  padding: 30px;
  gap: 15px;

  @media screen and (min-width: 768px) {
    order: 2;
    flex: 1;
    position: unset;
    flex-direction: row;
    animation: unset;
    padding: 0;
    gap: 10px;
    justify-content: space-around;
    background-color: transparent;

    li {
      font-size: 16px;
    }
  }
`;
const NavItem = styled.li`
  color: var(--color-text-basic);
  font-family: var(--font-family);
  font-weight: 500;

  &:hover {
    filter: brightness(0.8);
  }
`;
