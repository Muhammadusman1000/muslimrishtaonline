import React from "react";

const Steps = () => {
  return (
    <div className="w-full px-24 py-8">
      <div className="w-full h-auto py-8 flex justify-center items-center mt-10">
        <div className="w-auto">
          <p className="text-3xl font-poppins font-semibold text-gray-700">
            Step To Find Your Soul Mate
          </p>
          <div className="w-full">
            <img src="divider.png" alt="" className="mx-auto" />
          </div>
        </div>
      </div>
      <div className="w-full h-auto grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
        <div>
          <img src="1.png" alt="" className="w-44 mx-auto" />
          <p className="text-xl font-poppins font-semibold text-center mt-3 text-gray-700">
            Create a Profile
          </p>
          <p className="text-center px-16 font-poppins mt-2">
            Create your profile in seconds with our easy sign-up
          </p>
        </div>
        <div>
          <img src="2.png" alt="" className="w-44 mx-auto" />
          <p className="text-xl font-poppins font-semibold text-center mt-3 text-gray-700">
            Browse Matches
          </p>
          <p className="text-center px-16 font-poppins mt-2">
            Find matches based on your choices
          </p>
        </div>
        <div>
          <img src="3.png" alt="" className="w-44 mx-auto" />
          <p className="text-xl font-poppins font-semibold text-center mt-3 text-gray-700">
            Start Communicating
          </p>
          <p className="text-center px-16 font-poppins mt-2">
            Send a message or intrest to start communicating with other members
          </p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
