import Image from "next/image";
import Link from "next/link";
import { BsQuestionDiamondFill } from "react-icons/bs";

import { GreenBadge, RedBadge } from "@/components/badge";
import { rupiah } from "@/lib/currency";
import { beautyDate } from "@/lib/utils";

import empty from "@/assets/empty.png";

const HistoryCard = ({ history, search }: { history: any; search: string }) => {
  if (!history.length && search) {
    return (
      <div className="text-center mb-8">
        <p>Transaction Not Found</p>
      </div>
    );
  }
  if (!history.length) {
    return (
      <div className="text-center mb-8">
        <div className="flex justify-center items-center">
          <Image src={empty} alt="empty" className="" />
        </div>
        <p className="text-gray-200/70">You Dont Have any Transactions</p>
      </div>
    );
  }
  return (
    <>
      {history?.map((data: any) => {
        return (
          <Link
            className="bg-[#1B1818] p-2 rounded-md mb-8 w-full grid md:grid-cols-[minmax(0,30%)_minmax(0,1fr)] md:h-[200px] group"
            href={`/topup/${data?.id}`}
            key={data?.id}
          >
            <div className="w-full h-[200px] sm:h-[250px] md:h-full overflow-hidden flex items-center justify-center border-base border-2 rounded-md">
              {data?.status === 1 ? (
                <BsQuestionDiamondFill
                  size={50}
                  className="text-logo"
                  title="Waiting Payment"
                />
              ) : (
                <img
                  src={data?.imagePayment}
                  alt="imagePayment"
                  className="w-full h-full object-center object-cover"
                />
              )}
            </div>
            <div className="py-1 px-2">
              <div className="mb-4">
                <div
                  className={`flex sm:justify-between sm:items-center ${
                    data?.RiotID.length > 10
                      ? "flex-col sm:flex-row"
                      : "flex-row justify-between items-center"
                  }`}
                >
                  <p className="text-xl font-medium group-hover:text-logo transition duration-500">
                    {data?.RiotID}
                  </p>
                  {data?.status === 1 ? (
                    <RedBadge
                      text="Waiting Payment"
                      className="w-fit ml-auto"
                    />
                  ) : (
                    <GreenBadge text="Finished" className="w-fit ml-auto" />
                  )}
                </div>
                <p className="text-sm text-gray-200/75">Order ID {data?.id}</p>
              </div>
              <div className="mb-4 font-semibold">
                <p>{data?.Point} Point</p>
                <p>{rupiah(data?.Total)}</p>
              </div>
              <div className="text-sm text-gray-200">
                <p>Date Order</p>
                <p>{beautyDate(data?.createdAt)}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default HistoryCard;
