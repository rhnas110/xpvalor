"use client";
import { getHistory } from "@/app/actions/users/getHistory";

import Loading from "./loading";
import HistoryCard from "./historyCard";

import { useCallback, useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const HistoryList = () => {
  const [history, setHistory] = useState([]);
  const [nextPage, setNextPage] = useState(false);
  const [prevPage, setPrevPage] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const ref = useRef(null);

  const getAllHistory = useCallback(async () => {
    try {
      const response = (await getHistory(search, currentPage)).data;
      setHistory(response.data);
      setNextPage(response.nextPage);
      setPrevPage(response.prevPage);
      setLoading(false);
    } catch (error) {}
  }, [search, currentPage]);

  function handlePrevPage() {
    if (prevPage) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
  function handleNextPage() {
    if (nextPage) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
  function handleSearch(value: any, actions?: string) {
    if (value.length > 3) {
      setSearch(value);
      setCurrentPage(1);
    }
    if (actions === "clear") {
      setSearch("");
      ref.current.value = "";
    }
  }

  useEffect(() => {
    getAllHistory();
  }, [getAllHistory]);

  return (
    <>
      <div className="bg-[#1B1818] p-2 rounded-md mb-10">
        <div
          className={`relative flex items-center w-60 h-8 rounded-lg focus-within:shadow-lg bg-base overflow-hidden focus-within:border-logo border-b-2 ${
            history?.length ? "" : "cursor-not-allowed opacity-75"
          }`}
        >
          <div className="grid place-items-center h-full w-12 text-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            className={`peer h-full w-full outline-none text-sm text-gray-200 pr-2 bg-base placeholder:text-gray-200 ${
              history?.length ? "" : "cursor-not-allowed"
            }`}
            type="text"
            id="search"
            placeholder="Search Riot ID/TRID"
            onChange={(e) => handleSearch(e.target.value)}
            disabled={history?.length ? false : true}
            ref={ref}
          />
          <button
            className={`absolute right-2 ${
              !search ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
            onClick={() => handleSearch("", "clear")}
            disabled={!search ? true : false}
          >
            <IoClose size={24} />
          </button>
        </div>
      </div>

      <div>
        {loading ? (
          <Loading />
        ) : (
          <HistoryCard history={history} search={search} />
        )}
      </div>
      <div className="p-2 flex justify-center">
        {loading ? (
          <div className="flex gap-x-1 animate-pulse">
            <div className="w-8 h-10 rounded bg-[#1B1818]"></div>
            <div className="w-10 h-10 rounded bg-logo"></div>
            <div className="w-8 h-10 rounded bg-[#1B1818]"></div>
          </div>
        ) : !history.length ? null : (
          <div className="flex gap-x-1">
            <button
              className={`flex items-center justify-center w-8 rounded bg-[#1B1818] ${
                prevPage ? "" : "cursor-not-allowed opacity-75"
              }`}
              onClick={handlePrevPage}
              disabled={prevPage ? false : true}
            >
              <FaAngleLeft size={24} />
            </button>
            <div className="w-10 h-10 flex items-center justify-center bg-logo rounded font-medium text-lg">
              {currentPage}
            </div>
            <button
              className={`flex items-center justify-center w-8 rounded bg-[#1B1818] ${
                nextPage ? "" : "cursor-not-allowed opacity-75"
              }`}
              onClick={handleNextPage}
              disabled={nextPage ? false : true}
            >
              <FaAngleRight size={24} />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default HistoryList;
