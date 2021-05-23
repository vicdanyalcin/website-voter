import React from "react";
import { NavBar } from "./Header";
import SubmitButton from "./SubmitButton";
import { AddWebsite } from "./AddWebsite";
import Website from "./Website";
import WebsiteList from "./WebsiteList";

const Home = () => {
  return (
    <>
      {/*<NavBar />*/}
      <SubmitButton />
      {/*<AddWebsite />*/}
      <Website />
      <WebsiteList />
    </>
  );
};
export default Home;
