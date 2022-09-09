import React from "react";
import { Alert } from "@mui/material";
import { showNotification } from "../features/uiSlice";
import { useDispatch, useSelector } from "react-redux";
const Notifications = ({ type, message }) => {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);
  const handleClose = () => {
    dispatch(showNotification({ open: false }));
  };
  return (
    <div>
      {notification.open && (
        <Alert severity={type} onClose={handleClose}>
          {message}
        </Alert>
      )}
    </div>
  );
};

export default Notifications;
