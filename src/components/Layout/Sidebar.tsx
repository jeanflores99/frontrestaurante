import { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";
import { Show } from "@components/show";
import { DataUrl, IDataUrl } from "@datas/dataUrl";
import { FiChevronsRight, FiChevronsLeft, FiGrid } from "react-icons/fi";
import { useRouter } from "next/router";
interface Iprops {
  showSidebar: boolean;
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
  children: JSX.Element;
}
export const Sidebar = ({ setShowSidebar, showSidebar, children }: Iprops) => {
  const Router = useRouter();

  const IconSidebar = ({ icon: Icon, name, url }: IDataUrl) => (
    <div
      className="flex flex-row justify-start gap-2 items-center h-6 cursor-pointer "
      onClick={() => Router.push(url)}
    >
      <div className={`${showSidebar ? "" : ""}`}>
        <Icon />
      </div>
      <div className={`${showSidebar ? "" : "hidden"}`}>{name || ""}</div>
    </div>
  );

  return (
    <div className=" flex flex-row  w-auto h-[95.8vh] relative ">
      <div
        className={`${
          !showSidebar ? "w-10 " : "w-[200px] fixed md:relative"
        }  h-full bg-slate-400 z-30 transition-all duration-300`}
      >
        <div className="w-full flex flex-col gap-2 p-2">
          {DataUrl.map((item, k) => (
            <IconSidebar {...item} key={k} />
          ))}
        </div>
      </div>
      <div className={`w-full h-full bg-red-300 ${showSidebar ? "" : ""}`}>
        {children}
      </div>
    </div>
  );
};
