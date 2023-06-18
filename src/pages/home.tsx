import React, { useEffect } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ContainerContact } from "../components/ContainerContact";
import { ContainerRegisterContact } from "../components/ContainerRegisterContact";
import { useAppDispatch, useAppSelector } from "../hooks";
import { getUser } from "../features/user/userApi";
import { addUser, selectUser } from "../features/user/userSlice";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const select = useAppSelector;
  const user = select(selectUser).user;

  useEffect(() => {
    dispatch(getUser()).then((res) => {
      dispatch(addUser(res.payload));
    });
  }, []);

  //lembrar de passar esse useEffect para o meu middleware

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
