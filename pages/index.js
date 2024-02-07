import { useState } from "react";
import Modal from "../components/Modal";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  function onClose() {
    console.log("onClose");
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <h2>This is a Modal</h2>
        <p>Using React Portals with Next.js</p>
        <button onClick={() => setIsOpen(false)}>Close Modal</button>
      </Modal>
    </div>
  );
};

export default HomePage;
