import { Fragment } from "react";
import { Main } from "./components/Main";
import { Navbar } from "./components/Navbar";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Main />
    </Fragment>
  );
};

export { Home };

