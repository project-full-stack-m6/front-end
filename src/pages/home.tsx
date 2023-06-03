import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ContainerContact } from "../components/ContainerContact";
import { ContainerRegisterContact } from "../components/ContainerRegisterContact";

const Dashboard = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="flex flex-col gap-10 px-[8%] py-10 md:flex-row items-center">
        <ContainerContact />
        <ContainerRegisterContact />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Dashboard;
