import React, { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RiWechatFill } from "react-icons/ri";
import { PiHeartbeatFill } from "react-icons/pi";
import { RiProfileLine } from "react-icons/ri";
import Pagination from "./Pagination";

const ProfileBody = () => {
  const data = useSelector((state) => state.data);
  const [currentpage, setcurrentpage] = useState(1);
  const postPerpage = 8;

  const lastPostIndex = currentpage * postPerpage;
  const firstPostIndex = lastPostIndex - postPerpage;
  const currentpost = data.slice(firstPostIndex, lastPostIndex);
  // const disptach = useDispatch();
  // console.log(data);
  return (
    <div className="w-full bg-gray-100 h-auto pt-16">
      <div className="flex justify-center items-center">
        <div>
          <p className="text-3xl font-poppins font-semibold tracking-widest">
            Fetured <span className="text-[#8c0b86]">Profile</span>
          </p>
          <img src="divider.png" alt="" className="" />
        </div>
      </div>
      {/* ---------profile body starts */}

      <div className="w-full grid grid-cols-1  md:grid-cols-2 gap-5 p-5 ">
        {currentpost.map((data, key) => {
          return (
            <div key={key} className="w-full shadow-sm shadow-gray-400 mt-5 ">
              <div className="p-5 h-[350px] bg-white flex rounded-md">
                <div className="w-[30%] blur-sm">
                  <img src={data.image} alt="" className="w-full h-full" />
                </div>
                <div className="w-[70%] ml-5  text-gray-400 font-poppins ">
                  <div className="flex justify-between">
                    <p className="mt-3">
                      user ID
                      <span className="text-[#8c0b86] ml-2">{data.userid}</span>
                    </p>
                    <button className="mt-3  bg-[#8c0b86] text-white px-2 py-1 rounded-lg">
                      Interested
                    </button>
                  </div>
                  <div className="flex">
                    <p>online :</p>
                    <RiWechatFill size={25} className="ml-3" />
                  </div>
                  <hr className="mt-2" />

                  <div className="flex w-full">
                    <div className="w-[30%]">
                      <p className="mt-2">Age</p>
                      <p className="mt-2 ">Religion/Sect</p>
                      <p className="mt-2">Education</p>
                      <p className="mt-2">Profession</p>
                      <p className="mt-2">Location</p>
                    </div>

                    <div className="w-[70%]">
                      <div className="flex justify-between mt-2 w-full">
                        <p> {data.age}</p>
                        <div className="flex justify-center items-center cursor-pointer">
                          <PiHeartbeatFill
                            size={18}
                            className="text-red-600 mr-2"
                          />
                          <p className=" rounded-lg">Shortlist</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <p>{data.religionsect}</p>
                        <div className="flex">
                          <RiProfileLine
                            size={15}
                            className="text-red-600 mr-1"
                          />
                          <p>View full Profile</p>
                        </div>
                      </div>
                      <p className="mt-2"> {data.education}</p>
                      <p className="mt-2"> {data.profession}</p>
                      <p className="mt-2"> {data.location}</p>
                    </div>
                  </div>
                  <hr />
                  <p className="text-[15px] py-2">
                    {data.description}
                    <span className="text-[#8c0b86] cursor-pointer ml-2 text-[15px]">
                      Read more
                    </span>
                  </p>
                </div>
              </div>
              {/* ---------------------------------------------------------- */}

              {/* ------------------------------------------------------------ */}
            </div>
          );
        })}
      </div>
      <Pagination
        postperpage={postPerpage}
        totalpost={data.length}
        setcurrentpage={setcurrentpage}
        currentpage={currentpage}
        // lastPostIndex={lastPostIndex}
      />
    </div>
  );
};

export default ProfileBody;
