"use client";
import { rupiah } from "@/lib/currency";
import { minimizeString } from "@/lib/utils";
import { useState } from "react";

const DetailOrder = ({ detailOrder }: { detailOrder: any }) => {
  const [isVisible, setIsVisible] = useState(true);
  function handleIsVisible() {
    setIsVisible(!isVisible);
  }
  const { Point, Amount, Total, Price, RiotID, id, status, email } =
    detailOrder;
  return (
    <>
      <div className="overflow-auto">
        <table className="table-auto w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead>
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
              >
                Riot ID
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
              >
                Point
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
              >
                Price
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
              >
                Amount
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
              >
                Subtotal
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-800 dark:text-gray-200">
                {RiotID}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                {Point}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                {rupiah(Price)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                {Amount}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                {rupiah(Total)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr className="mt-4 mb-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />

      <div className="bg-[#1B1818] px-2 sm:px-4 py-4 sm:py-2 flex sm:flex-row flex-col gap-y-2 justify-between">
        <div>
          <p>Order ID: {id}</p>
          <p>
            Status:&nbsp;
            <span className={`${status === 2 && "text-logo font-medium"}`}>
              {status === 1 ? "Waiting Payment" : "Finished"}
            </span>
          </p>
          <div className="flex gap-x-2">
            <p>Email: {isVisible ? minimizeString(email, 3) : email}</p>
            <p onClick={handleIsVisible} className="opacity-80 cursor-pointer">
              {isVisible ? "Show" : "Hide"}
            </p>
          </div>
        </div>
        <div>
          <p>Order Total</p>
          <p> {rupiah(Total)}</p>
        </div>
      </div>
    </>
  );
};

export default DetailOrder;
