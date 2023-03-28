import React from "react";
import { Button } from "react-bootstrap";
import success from "./../../assets/img/sai_new.png";

export const SuccessAlert = (props) => {
  return (
    <div className="text-center">
      <img className="saved-success" src={success} alt="success" />
      <div className="text-center">{props.message}</div>
      <br />
      <div className="text-center">
        <Button
          onClick={() => props.onClose()}
          variant="primary blue-btn action-btn"
        >
          Ok
        </Button>
      </div>
    </div>
  );
};
