import { generateDummyData } from "@/lib/utils";

const Loading = () => {
  const data = generateDummyData(4);

  return (
    <>
      {data.map(({ uuid }) => {
        return (
          <div
            className="bg-[#1B1818] p-2 rounded-md mb-8 w-full grid md:grid-cols-[minmax(0,30%)_minmax(0,1fr)] md:h-[200px] animate-pulse"
            key={uuid}
          >
            <div className="w-full h-[200px] sm:h-[250px] md:h-full overflow-hidden flex items-center justify-center bg-base rounded-md animate-pulse">
              <div className="w-10 h-10 rounded-md rotate-45 bg-gray-200/75 animate-pulse"></div>
            </div>
            <div className="py-1 px-2">
              <div className="mb-6 animate-pulse">
                <div className="flex justify-between items-center">
                  <span className="w-16 h-4 bg-gray-200/70"></span>
                  <span className="w-20 h-6 rounded bg-gray-200/80"></span>
                </div>
                <div className="w-32 h-4 bg-gray-200/70"></div>
              </div>
              <div className="mb-6 animate-pulse">
                <div className="w-16 h-4 bg-gray-200/70 mb-1"></div>
                <div className="w-32 h-4 bg-gray-200/70"></div>
              </div>
              <div className="animate-pulse">
                <div className="w-16 h-4 bg-gray-200/70 mb-1"></div>
                <div className="w-32 h-4 bg-gray-200/70"></div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Loading;
