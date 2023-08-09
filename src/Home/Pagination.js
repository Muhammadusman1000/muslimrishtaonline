import React from "react";
import "../App.css";

const Pagination = ({
  postperpage,
  totalpost,
  setcurrentpage,
  currentpage,
}) => {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalpost / postperpage); i++) {
    pages.push(i);
  }
  const prev = () => {
    if (currentpage > 1) setcurrentpage(currentpage - 1);
  };
  const next = () => {
    if (currentpage < pages.length) setcurrentpage(currentpage + 1);
  };

  return (
    <div className="py-12 flex mx-auto justify-center items-center">
      <button onClick={() => prev()}>prev</button>
      {pages.map((pages, id) => {
        return (
          <div key={id} className=" text-center ">
            <button
              className="mx-2 duration-300 w-10 h-10 border-[1px] border-gray-400 flex justify-center items-center"
              onClick={() => setcurrentpage(pages)}
            >
              {pages}
            </button>
          </div>
        );
      })}
      ...
      {/* <p className="mx-2 w-10 h-10 flex justify-center items-center border-[1px] border-gray-400">
        {pages.length}
      </p> */}
      <button onClick={() => next()}>next</button>
    </div>
  );
};

export default Pagination;
