import React from "react";
import { useSelector } from "react-redux";
import { AddEditPostModal } from "./AddEditPostModal";

import { Toast } from "./Toast";

const Portal = () => {
  const modalOpen = useSelector((state) => state.addEditPost.modalOpen);
  return (
    <>
      <Toast />
      {modalOpen && <AddEditPostModal />}
    </>
  );
};

export { Portal };
