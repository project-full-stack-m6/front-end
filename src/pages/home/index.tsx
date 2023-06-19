import React, { useEffect } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ContainerContact } from "../../components/ContainerContact";
import { ContainerRegisterContact } from "../../components/ContainerRegisterContact";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getUser } from "../../features/user/userApi";
import {
  addUser,
  iUser,
  resetNavigation,
  selectUser,
} from "../../features/user/userSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const select = useAppSelector;
  const user = select(selectUser).user;

  useEffect(() => {
    dispatch(getUser()).then((res: any) => {
      dispatch(addUser(res.payload));
      console.log("tentando");
    });
  }, []);

  const navigation = useAppSelector(selectUser).navigation;
  const router = useRouter();

  useEffect(() => {
    if (navigation) {
      router.push("/");
    }
    console.log("tentando fazer a navegação", navigation);
    dispatch(resetNavigation);
  }, [navigation]);

  const onSubmit = () => {
    toast("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  //lembrar de passar esse useEffect para o meu middleware

  return (
    <React.Fragment>
      <Header />
      <main className="flex flex-col gap-12 px-[8%] py-12 md:flex-row items-center">
        <ContainerContact />
        <ContainerRegisterContact />
        <button onClick={() => onSubmit}>toast</button>
        <ToastContainer></ToastContainer>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Dashboard;
