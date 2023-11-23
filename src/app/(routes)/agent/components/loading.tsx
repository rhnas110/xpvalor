import { generateDummyData } from "@/lib/utils";

const Loading = () => {
  const data = generateDummyData(8);
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-4 place-items-center">
      {data.map((data) => {
        return (
          <div
            className="w-[250px] h-[350px] animate-pulse bg-gray-600"
            key={data.uuid}
          ></div>
        );
      })}
    </div>
  );
};

export default Loading;
