import { Dispatch, SetStateAction, useState } from "react";
import { Show } from "@components/show";
import { FiChevronsRight, FiChevronsLeft } from "react-icons/fi";

interface Iprops {
  children?: JSX.Element;
  showSidebar: boolean;
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
}
export const HeaderMobile = ({ setShowSidebar, showSidebar }: Iprops) => {
  return (
    <div className=" flex flex-row relative h-10 ">
      <div
        className={` left-0 top-0 bg-indigo-400 h-full border-r-[1px]  border-gray-200 transition-all duration-300  ${
          showSidebar ? "absolute md:relative w-[200px] z-50" : "w-[40px]"
        } `}
      >
        <Show
          Condition={showSidebar}
          IsDefault={
            <div className="flex flex-col items-center h-full">
              <div
                onClick={() => setShowSidebar(!showSidebar)}
                className="my-auto"
              >
                <FiChevronsRight />
              </div>
            </div>
          }
        >
          <div className="flex flex-row justify-between items-center h-full ">
            <div className="px-2">Logo</div>
            <div
              onClick={() => setShowSidebar(!showSidebar)}
              className="my-auto px-2 "
            >
              <FiChevronsLeft />
            </div>
          </div>
        </Show>
      </div>
      <div className={`w-full h-full  flex items-center bg-red-600 z-10`}>
        x
      </div>
    </div>
  );
};
