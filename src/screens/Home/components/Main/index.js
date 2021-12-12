import { Fragment } from "react";
import { Search } from "./components/Search";
import {List} from "./components/List";

const Main = () => {
  return (
    <Fragment>
      <Search />
      <List />
    </Fragment>
  );
};

export { Main };
