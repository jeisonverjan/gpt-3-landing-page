import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
  Wrapper,
} from "./containers";
import { Cta, Brand, Navbar } from "./components";
import GlobalStyles from "./styles/GlobalStyles";

const App = () => (
  <>
    <GlobalStyles />
    <Wrapper>
      <Navbar />
      <Header />
    </Wrapper>
    <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <Cta />
    <Blog />
    <Footer />
  </>
);

export default App;
