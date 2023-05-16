import React from "react";
// css
import styles from "./Foot.module.css";
// React-Toastify library
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Foot = ({ startEnd }) => {
  const sendHandler = () => {
    if (startEnd.start && startEnd.end) {
      // request with starEnd data will send to backend
      toast.success("بازه زمانی ثبت شد");
    } else {
      toast.error("بازه ی زمانی خود را کاملا مشخص کنید");
    }
  };
  return (
    <>
      <div className={styles.container}>
        <hr />
        <button onClick={sendHandler}>تایید</button>
      </div>
      <ToastContainer />
    </>
  );
};

export default Foot;
