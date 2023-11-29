"use server";
import { axiosPrivate } from "@/lib/axios";

export const getHistory = async (search?: string, page?: any) => {
  const response = (
    await axiosPrivate.get(
      `/topup?search=${search ? search : ""}&page=${page ? page : ""}`
    )
  ).data;

  return {
    status: true,
    data: response,
  };
};
