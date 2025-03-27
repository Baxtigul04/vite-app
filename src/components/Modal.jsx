import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Modal = () => {
  const { user, setUser } = useContext(AppContext);
  return (
    <div className="w-[200px] h-[100px] border mx-auto">
      <h2>Modal {user}</h2>
      <button onClick={() => setUser("Bekzod")}>changename</button>
    </div>
  );
};

export default Modal;
