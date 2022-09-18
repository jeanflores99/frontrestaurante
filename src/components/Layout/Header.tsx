import { Dispatch, SetStateAction } from "react";
import { HeaderMobile, HeaderDesktop } from "@components/header";
interface Iprops {
  children?: JSX.Element;
  showSidebar: boolean;
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
}
export const Header = ({ children, setShowSidebar, showSidebar }: Iprops) => {
  return (
    <>
      <HeaderMobile setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      {/* <HeaderDesktop /> */}
    </>
  );
};
