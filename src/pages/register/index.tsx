import type { NextPage } from "next";
import React from "react";
import { Header } from "../../components/Header";
import { ContainerDecoration } from "../../components/ContainerDecoration";
import { Footer } from "../../components/Footer";
import { ContainerFormRegister } from "../../components/ContainerFormRegister";

const IndexPage: NextPage = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="flex flex-col gap-5 px-[8%] py-5">
        <ContainerDecoration />
        <ContainerFormRegister />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default IndexPage;
