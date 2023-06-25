import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ContainerContact } from "../components/ContainerContact";
import { ContainerRegisterContact } from "../components/ContainerRegisterContact";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addLoading, selectUser } from "../features/user/userSlice";
import "react-toastify/dist/ReactToastify.css";
import { getUser } from "../features/user/userApi";
import { useRouter } from "next/router";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { user, loading, error } = useAppSelector(selectUser);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    function validateToken() {
      const token = window.localStorage.getItem("authToken");
      console.log(token);
      if (token === null) {
        return dispatch(addLoading(false));
      }

      dispatch(getUser()).then((res) => console.log(res));
    }

    validateToken();
  }, []);

  useEffect(() => {
    function protectedRoute() {
      if (!loading) {
        return user ? null : router.push("/");
      }
    }
    if (mounted) {
      protectedRoute();
    }

    setMounted(true);
  }, [loading]);

  //lembrar de passar esse useEffect para o meu middleware

  return (
    <React.Fragment>
      <Header />
      <main className="flex flex-col gap-12 px-[8%] py-12 md:flex-row items-center">
        <ContainerContact />
        <ContainerRegisterContact />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Dashboard;
