import type { NextPage } from "next";
import React from "react";
import { Header } from "../components/Header";
import { ContainerDecoration } from "../components/ContainerDecoration";
import { Footer } from "../components/Footer";
import { ContainerFormRegister } from "../components/ContainerFormRegister";
import { FormRegister } from "../components/FormRegister";

const IndexPage: NextPage = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="flex flex-col gap-5 px-[8%] py-10">
        <ContainerDecoration />
        <section className="flex flex-col items-center">
          <FormRegister />
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default IndexPage;
