import React from "react";
import { useSelector } from "react-redux";
import { AddEditPostModal } from "./AddEditPostModal";
import { EditUserInformationModal } from "./EditUserInformationModal";

import { Toast } from "./Toast";

const Portal = () => {
  const modalOpen = useSelector((state) => state.addEditPost.modalOpen);
  const editUserModalOpen = useSelector(
    (state) => state.eidtUserInformation.editUserModalOpen
  );
  return (
    <>
      <Toast />
      {modalOpen && <AddEditPostModal />}
      {editUserModalOpen && <EditUserInformationModal />}
    </>
  );
};

export { Portal };
