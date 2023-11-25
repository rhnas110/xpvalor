const DetailOrder = ({ topupId }) => {
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
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                XPValor#1234
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                4000
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                Rp. 400.000
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                3
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                Rp. 1.200.000
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr className="mt-4 mb-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />

      <div className="bg-[#1B1818] px-2 sm:px-4 py-4 sm:py-2 flex sm:flex-row flex-col gap-y-2 justify-between">
        <div>
          <p>Order ID: {topupId}</p>
          <p>EMAIL</p>
        </div>
        <div>
          <p>Order Total</p>
          <p>Rp. 1.200.000</p>
        </div>
      </div>
    </>
  );
};

export default DetailOrder;
