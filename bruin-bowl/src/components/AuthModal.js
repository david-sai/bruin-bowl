import React from "react";
import Modal from "react-modal";

import { useContext } from "react";
import { ModalIsOpenContext } from "../context/Contexts.js";

function AuthModal() {
  const customStyles = {
    content: {
      maxWidth: "700px",
      maxHeight: "600px",
      margin: "auto", // center horizontally
    },
  };

  const { modalIsOpen, setModalIsOpen } = useContext(ModalIsOpenContext);

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
      >
        <p>Modal content</p>
      </Modal>
    </div>
  );
}

export default AuthModal;
