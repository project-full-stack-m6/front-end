import React, { Dispatch, SetStateAction } from "react";
import { Dialog } from "@headlessui/react";

interface iModalEditUser {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
}

export const Modal = ({
  openModal,
  setOpenModal,
  children,
}: iModalEditUser) => {
  return (
    <Dialog
      open={openModal}
      onClose={() => setOpenModal(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      {children}
    </Dialog>
  );
};
