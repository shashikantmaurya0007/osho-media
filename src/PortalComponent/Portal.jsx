import React from "react";
import { AddEditPostModal } from "./AddEditPostModal";

import { Toast } from "./Toast";

const Portal = () => {
  return (
    <>
      <Toast />
      <AddEditPostModal />
    </>
  );
};

export { Portal };
