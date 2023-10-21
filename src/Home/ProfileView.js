import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

const ProfileView = () => {
  var select = useSelector((state) => state.cart);
  console.log(select);
  return (
    <div>
      {select.map((data, key) => {
        return (
          <div key={key} className="pt-44">
            <div className="border-2 border-black ">
              <img src={data.image} alt="" className="" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileView;
