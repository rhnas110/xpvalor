"use client";
import { useState } from "react";

import ButtonPrimary from "@/components/button";
import { minimizeString } from "@/lib/utils";

const styles = {
  dropContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    height: "175px",
    borderRadius: "10px",
    border: "2px dashed #555",
    color: "#444",
    cursor: "pointer",
  },
};

const UploadPayment = () => {
  const [picture, setPicture] = useState("");

  const handleSelectPicture = (e) => {
    setPicture(e.target.files[0]);
  };
  return (
    <div>
      <form encType="multipart/form-data">
        <label htmlFor="payment" style={styles.dropContainer}>
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            name="payment"
            id="payment"
            onChange={(e) => handleSelectPicture(e)}
            hidden={picture ? true : false}
            className="w-20 sm:w-full lg:w-auto"
          />
          {picture ? (
            <div hidden={picture ? false : true}>
              <img
                alt="payment_picture"
                src={URL.createObjectURL(picture)}
                className="h-[125px] m-auto aspect-auto"
              />
              <p className="text-center text-logoSecondary mt-2">
                {picture ? minimizeString(picture?.name, 33) : ""}
              </p>
            </div>
          ) : null}
        </label>
      </form>
      <div className="mt-4 md:mb-6">
        <ButtonPrimary text="Submit" className="w-32 ml-auto" />
      </div>
    </div>
  );
};

export default UploadPayment;
