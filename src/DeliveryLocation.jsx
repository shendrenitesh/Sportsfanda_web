import { useState } from "react";
import { FiMapPin } from "react-icons/fi";

const DeliveryLocation = () => {
  const [showLocation, setShowLocation] = useState(false);

  return (
    <>
      <button
        className="flex w-full max-w-full items-center gap-2 rounded-full border border-gray-300 px-3 py-2 text-left text-sm text-gray-700 transition hover:border-blue-500 hover:text-blue-600 sm:w-auto sm:px-4"
        onClick={() => setShowLocation(true)}
      >
        <FiMapPin size={14} />
        <span className="truncate">Deliver to Nagpur, Maharashtra</span>
      </button>

      {showLocation && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-3"
          onClick={() => setShowLocation(false)}
        >
          <div
            className="w-full max-w-md rounded-2xl bg-white p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="mb-4 text-lg font-semibold text-gray-900">
              Choose Delivery Location
            </h2>

            <input
              type="text"
              placeholder="Enter Pincode"
              className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
            />

            <button className="mt-4 w-full rounded-lg bg-blue-600 p-3 font-medium text-white transition hover:bg-blue-700">
              Continue
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DeliveryLocation;
