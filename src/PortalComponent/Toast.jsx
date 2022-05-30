import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";

const Toast = () => {
  return ReactDOM.createPortal(
    <ToastContainer
      position="top-right "
      autoClose={1600}
      hideProgressBar={true}
      theme="colored"
    />,
    document.getElementById("toast")
  );
};

export { Toast };
