import type { NextPage } from "next";
import React from "react";
import { Header } from "../components/Header";
import { ContainerFormLogin } from "../components/ContainerFormLogin";
import { ContainerDecoration } from "../components/ContainerDecoration";
import { Footer } from "../components/Footer";
import { FormLogin } from "../components/FormLogin";

const IndexPage: NextPage = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="flex flex-col gap-5 px-[8%] py-10">
        <section>
          <ContainerDecoration />
        </section>
        <section className="flex flex-col items-center">
          <FormLogin />
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default IndexPage;
