"use client";
import { useState } from "react";

import ButtonPrimary from "@/components/button";
import { minimizeString } from "@/lib/utils";
import axios from "axios";
import { toastError, toastSuccess } from "@/lib/toast";
import { useRouter } from "next/navigation";

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

const UploadPayment = ({ token, id }) => {
  const router = useRouter();
  const [picture, setPicture] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSelectPicture = (e: any) => {
    setPicture(e.target.files[0]);
  };
  const handleUpload = async () => {
    if (!picture) {
      return toastError("Select Picture First");
    }
    if (picture?.size > 1024000) {
      return toastError("Picture Size Too Large, maximum 1MB.");
    }

    try {
      setLoading(true);

      const data = new FormData();
      data.append("picture", picture);

      const response = (
        await axios.patch(
          process.env.API_BASE_URL + `/topup/upload_payment/${id}`,
          data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          }
        )
      ).data;
      if (response?.success) {
        toastSuccess("Upload Payment Success");
        setPicture("");
        return setTimeout(() => {
          router.refresh();
        }, 1500);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <form encType="multipart/form-data">
        <label htmlFor="picture" style={styles.dropContainer}>
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            name="picture"
            id="picture"
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
        <ButtonPrimary
          text={loading ? "Loading ..." : "Submit"}
          onClick={() => handleUpload()}
          loading={loading ? 1 : 0}
          disabled={loading}
          className={`${
            loading ? "cursor-not-allowed opacity-75" : ""
          } w-32 ml-auto`}
        />
      </div>
    </div>
  );
};

export default UploadPayment;
