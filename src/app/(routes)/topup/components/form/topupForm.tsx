"use client";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Swal from "sweetalert2";

import BoxWithStep from "../boxWithStep";
import ButtonPrimary from "@/components/button";
import { points } from "@/constants/points";
import { rupiah } from "@/lib/currency";

import valorant_points from "@/assets/valorant-points.png";
import bank_icon from "@/assets/svg/bank-svg.svg";
import gopay_icon from "@/assets/svg/gopay-svg.svg";
import qris_icon from "@/assets/svg/qris-svg.svg";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toastError } from "@/lib/toast";

const TopupForm = ({ token }: { token: any }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      amount: "",
      total: 0,
      riotId: "",
      payment: "",
    },
  });
  const [totalAmount, setTotalAmount] = useState({
    price: 0,
    amount: 0,
    point: 0,
  });
  const [loading, setLoading] = useState(false);
  const rp =
    totalAmount.amount >= 0 ? totalAmount.price * totalAmount.amount : 0;

  // DO CREATE TRANSACTION OR TOPUP
  const onSubmit = async (data: any) => {
    if (!totalAmount.point) {
      return toastError("Select Valorant Point first");
    }
    if (!data.total) {
      return toastError("Minimum purchase amount 1");
    }
    if (!data.riotId) {
      return toastError("Riot ID can't be empty");
    }
    if (!data.payment) {
      return toastError("Select your payment");
    }

    try {
      setLoading(true);
      const swalResponse = Swal.fire({
        title: "Confirm Your Order",
        text: `${data.riotId}●${rupiah(rp)}●${data.payment}`,
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#221e1e",
        cancelButtonColor: "#fd4556",
        confirmButtonText: "Confirm",
      }).then(async (result) => {
        const dataTopup = {
          Point: totalAmount.point,
          Amount: data.total,
          Price: totalAmount.price,
          RiotID: data.riotId,
        };

        if (result.isConfirmed) {
          const response = (
            await axios.post(process.env.API_BASE_URL + "/topup", dataTopup, {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            })
          ).data;
          if (response.success) {
            Swal.fire({
              title: "Success",
              text: "Order success, please pay immediately!",
              icon: "success",
            });
            reset();
            return router.push(`/topup/${response.data.t_id}`);
          }
        }
      });
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BoxWithStep
        className="mb-8"
        step_number="1"
        step_title="Select Top Up Valorant Point"
      >
        <div className="px-2 flex gap-4 flex-wrap sm:justify-normal justify-center">
          {points?.map(
            ({ point, price }: { point: number; price: number }, index) => {
              return (
                <div key={index}>
                  <input
                    type="radio"
                    id={"point" + point}
                    className="hidden peer"
                    value={`${point}, ${price}`}
                    {...register("amount")}
                    onChange={() =>
                      setTotalAmount({ ...totalAmount, price, point })
                    }
                  />
                  <label
                    htmlFor={"point" + point}
                    className="max-w-[150px] sm:max-w-[150px] max-h-[175px] rounded-md overflow-hidden flex border-[3px] border-amber-100 peer-checked:border-logo peer-checked:shadow-[0_10px_15px_-3px_rgb(255,255,255,0.1),0_4px_6px_-2px_rgb(255,255,255,0.05)]"
                  >
                    <div className="p-2 flex flex-col items-center gap-4 bg-amber-50 text-base">
                      <div className="text-center">
                        <Image
                          src={valorant_points}
                          alt="Valorant Points"
                          width={250}
                          height={250}
                        />
                        <p className="mt-2">{point} Points</p>
                      </div>
                      <p>{rupiah(price)}</p>
                    </div>
                  </label>
                </div>
              );
            }
          )}
        </div>
      </BoxWithStep>

      <BoxWithStep
        className="mb-8"
        step_number="2"
        step_title="Enter purchase amount"
      >
        <div className="px-2">
          <input
            className="shadow appearance-none border rounded-md w-full py-2 px-3 text-base leading-tight focus:outline-none focus:shadow-outline placeholder:text-base"
            id="total"
            type="number"
            placeholder="Amount"
            defaultValue={1}
            min={1}
            max={100}
            maxLength={3}
            {...register("total")}
            onChange={(e) => {
              setTotalAmount({ ...totalAmount, amount: +e.target.value });
            }}
          />
        </div>
      </BoxWithStep>

      <BoxWithStep
        className="mb-8"
        step_number="3"
        step_title="Enter your Riot ID"
      >
        <div className="px-2">
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded-md w-full py-2 px-3 text-base leading-tight focus:outline-none focus:shadow-outline placeholder:text-base"
              id="riotId"
              type="text"
              placeholder="Riot ID"
              {...register("riotId")}
            />
          </div>
          <p className="italic text-sm text-white/75">Example = XPValor#1234</p>
        </div>
      </BoxWithStep>

      <BoxWithStep className="mb-8" step_number="4" step_title="Select payment">
        <div className="px-2 flex flex-col gap-y-4">
          <div>
            <p className="mb-2">Transfer</p>
            <div>
              <input
                type="radio"
                id="transfer"
                className="hidden peer"
                value="transfer"
                {...register("payment")}
              />
              <label
                htmlFor="transfer"
                className="flex p-3 sm:p-4 border-2 border-gray-400 cursor-pointer gap-x-6 sm:gap-x-12 w-fit items-center rounded-md peer-checked:border-logo peer-checked:shadow-[0_10px_15px_-3px_rgb(255,255,255,0.1),0_4px_6px_-2px_rgb(255,255,255,0.05)]"
              >
                <div className="flex items-center gap-x-2">
                  <Image
                    src={bank_icon}
                    alt="Bank Icon"
                    width={50}
                    height={50}
                    className="sm:w-12 w-8"
                  />
                  <p className="font-medium">Transfer</p>
                </div>
                <p>
                  {rp
                    ? rupiah(totalAmount.price * totalAmount.amount)
                    : "Ready"}
                </p>
              </label>
            </div>
          </div>
          <div>
            <p className="mb-2">E-Wallet & QRIS</p>
            <div className="flex flex-wrap gap-2">
              <div>
                <input
                  type="radio"
                  id="gopay"
                  name="payment"
                  className="hidden peer"
                  value="gopay"
                  disabled
                />
                <label
                  htmlFor="gopay"
                  className="flex p-3 sm:p-4 border-2 border-gray-400 cursor-pointer gap-x-6 sm:gap-x-12 w-fit items-center rounded-md peer-disabled:cursor-not-allowed peer-disabled:opacity-75"
                >
                  <div className="flex items-center gap-x-2">
                    <Image
                      src={gopay_icon}
                      alt="Gopay Icon"
                      width={50}
                      height={50}
                      className="sm:w-12 w-8"
                    />
                    <p className="font-medium">Gopay</p>
                  </div>
                  <p>Coming Soon</p>
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="qris"
                  name="payment"
                  className="hidden peer"
                  value="qris"
                  disabled
                />
                <label
                  htmlFor="qris"
                  className="flex p-3 sm:p-4 border-2 border-gray-400 cursor-pointer gap-x-6 sm:gap-x-12 w-fit items-center rounded-md peer-disabled:cursor-not-allowed peer-disabled:opacity-75"
                >
                  <div className="flex items-center gap-x-2">
                    <Image
                      src={qris_icon}
                      alt="QRIS Icon"
                      width={50}
                      height={50}
                      className="sm:w-12 w-8"
                    />
                    <p className="font-medium">QRIS</p>
                  </div>
                  <p>Coming Soon</p>
                </label>
              </div>
            </div>
          </div>
        </div>
      </BoxWithStep>

      <div>
        {session?.user?.email ? (
          <ButtonPrimary
            text={loading ? "Loading ..." : "Order Now"}
            type="submit"
            loading={loading ? 1 : 0}
            disabled={loading}
            className={`${
              loading ? "cursor-not-allowed opacity-75" : ""
            } w-full`}
          />
        ) : (
          <div className="text-right">
            <p>
              You need to&nbsp;
              <Link href="/auth/login" className="text-logo font-medium">
                Login
              </Link>
              &nbsp;first to Top Up
            </p>
          </div>
        )}
      </div>
    </form>
  );
};

export default TopupForm;
