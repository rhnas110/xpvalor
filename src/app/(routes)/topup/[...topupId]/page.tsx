import Image from "next/image";

import { axiosPrivate } from "@/lib/axios";
import { getTokenFromCookies } from "@/lib/cookies";

import BackButton from "./components/backButton";
import DetailOrder from "./components/detailOrder";
import UploadPayment from "./components/uploadPayment";
import ProtectedRoute from "@/components/protectedRoute";
import approved from "@/assets/approved.jpg";

interface IParams {
  topupId?: string;
}

const TopupDetailPage = async ({ params }: { params: IParams }) => {
  const { topupId } = params;
  const token = getTokenFromCookies();
  const response = await (await axiosPrivate.get(`/topup/${topupId}`)).data;
  const {
    Point,
    Amount,
    Total,
    Price,
    RiotID,
    id,
    status,
    email,
    imagePayment,
  } = response.data;
  const detailOrder = {
    Point,
    Amount,
    Total,
    Price,
    RiotID,
    id,
    status,
    email,
  };
  return (
    <ProtectedRoute>
      <div className="max-w-xl mx-auto h-screen sm:px-2">
        <div className="h-full flex flex-col relative">
          <div className="h-16 w-full rounded-t-lg bg-logo absolute py-4">
            <BackButton />
            <h1 className="text-center font-medium text-lg">
              Upload Your Payment Proof
            </h1>
          </div>
          <div className="border-l-4 border-r-4 border-[#1B1818] h-full md:h-auto mt-16 mb-16 md:mb-0 overflow-auto">
            <div className="bg-[#1B1818] px-2 pt-4 sm:p-4 mb-4">
              <DetailOrder detailOrder={detailOrder} />
            </div>

            <div className="bg-[#1B1818] px-2 sm:px-4 py-4 sm:py-2">
              <div className="flex flex-col justify-center gap-y-2 items-center">
                <p>Transfer to</p>
                <div className="w-72 p-3 bg-gradient-to-r from-gray-600 to-black rounded-lg">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <h1 className="text-2xl font-semibold text-gray-100">
                        XPValor
                      </h1>
                      <span className="text-xs text-gray-300 font-bold">
                        1234 4567 8901 2345
                      </span>
                    </div>
                    <Image
                      src="https://img.icons8.com/offices/80/000000/sim-card-chip.png"
                      alt="XPValor Chip Card"
                      width={48}
                      height={48}
                    />
                  </div>
                </div>
              </div>
              <hr className="my-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />

              {status === 2 ? (
                <div className="flex justify-center h-56 rounded-lg overflow-hidden">
                  <img
                    src={imagePayment ? imagePayment : approved.src}
                    alt="imagePayment"
                    className="object-cover object-center bg-neutral-500/50"
                  />
                </div>
              ) : (
                <UploadPayment token={token} id={id} />
              )}
            </div>
          </div>
          <div className="h-16 w-full rounded-b-lg bg-logo absolute md:relative py-4 bottom-0">
            <p className="text-center">
              {"Last Sync: " + new Date().toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default TopupDetailPage;
