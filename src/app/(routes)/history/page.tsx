import PageWrapper from "@/components/pageWrapper";
import ProtectedRoute from "@/components/protectedRoute";
import { FaHistory } from "react-icons/fa";
import HistoryList from "./components/historyList";

const HistoryPage = () => {
  return (
    <ProtectedRoute>
      <PageWrapper>
        <div className="py-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex gap-x-2 items-center mb-10">
              <FaHistory size={30} />
              <h1 className="text-2xl font-semibold">History</h1>
            </div>
            <div>
              <HistoryList />
            </div>
          </div>
        </div>
      </PageWrapper>
    </ProtectedRoute>
  );
};

export default HistoryPage;
