import Link from "next/link";

import PageWrapper from "@/components/pageWrapper";
import Banner from "./components/banner";
import TopupForm from "./components/form/topupForm";
import { getTokenFromCookies } from "@/lib/cookies";

const TopupPage = () => {
  const token = getTokenFromCookies();
  return (
    <PageWrapper className="px-0">
      <Banner />
      <div className="px-4 grid lg:grid-cols-[minmax(0,350px)_minmax(0,1fr)] gap-4">
        <div className="p-4 bg-[#1B1818] rounded-lg h-fit w-auto sm:w-fit lg:w-auto mx-auto mb-8 lg-mb-0">
          <h1 className="font-bold text-lg mb-4">How to Buy?</h1>
          <p className="font-semibold">
            Step-by-step to top up Valorant Point:
          </p>
          <ol className="list-decimal pl-4">
            <li>
              You need to&nbsp;
              <Link href="/auth/login" className="text-logo font-medium">
                Login
              </Link>
              &nbsp;first
            </li>
            <li>Select the amount of Valorant Point you want</li>
            <li>Enter Riot ID</li>
            <li>Select the payment method you prefer</li>
            <li>Click Order Now and complete the payment</li>
            <li>
              Please wait, Valorant Points will be automatically transferred to
              your account
            </li>
          </ol>
        </div>
        <div>
          <TopupForm token={token} />
        </div>
      </div>
    </PageWrapper>
  );
};

export default TopupPage;
