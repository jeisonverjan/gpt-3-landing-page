import { useState } from "react";
import { styled } from "styled-components";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import NavList from "./NavList";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <StyledNavbar>
      <Logo className="logo">
        <img src="/logo.svg" alt="logo" />
      </Logo>
      <SignUp className="sign-up">
        <p>Sign in</p>
        <button>Sign up</button>
      </SignUp>
      <NavButton className="nav-button">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <MdClose /> : <MdMenu />}
        </button>
      </NavButton>
      <NavList menuOpen={isMenuOpen} />
    </StyledNavbar>
  );
}

export default Navbar;

const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  align-items: center;

  @media screen and (min-width: 768px) {
    gap: 1rem;
    .logo {
      flex: 0;
      img {
        width: 72.56px;
        height: 36.02px;
      }
    }

    .sign-up {
      order: 3;
      flex: 0.5;
      justify-content: flex-end;
      p {
        font-size: 16px;
      }
      button {
        font-size: 16px;
        padding: 18px 13px;
        min-width: 100px;
      }
    }

    .nav-button {
      display: none;
    }
  }

  @media screen and (min-width: 1200px) {
    padding: 2rem 6rem;
  }
`;
const Logo = styled.div`
  order: 1;
  img {
    width: 82.56px;
    height: 16.02px;
  }
`;
const NavButton = styled.div`
  order: 3;
  button {
    color: var(--color-text-basic);
    font-size: 2rem;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

const SignUp = styled.div`
  order: 2;
  display: flex;
  align-items: center;
  color: var(--color-text-basic);
  font-family: var(--font-family);
  gap: 0.5rem;

  p {
    font-size: 12px;
    font-weight: 500;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
  }

  button {
    font-size: 12px;
    font-weight: 500;
    background-color: var(--color-btn-bg);
    border-radius: 5px;
    padding: 15px 10px;
    min-width: 80px;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
