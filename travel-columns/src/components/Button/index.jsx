import { Button } from "./sytle";
import { Modal } from "../Modal";
import { useState } from "react";

export function StyledButton({ children, fontColor }) {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Button onClick={handleClick} fontColor={fontColor}>
        {children}
      </Button>
      {showModal && <Modal onClose={closeModal} />}
    </>
  );
}
