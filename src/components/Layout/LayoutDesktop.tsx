import { Header } from "./Header";
import { useState } from "react";
import { Sidebar } from "./Sidebar";
interface Iprops {
  children: JSX.Element;
}
export const LayoutDesktop = ({ children }: Iprops) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div>
      <Header setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      <Sidebar setShowSidebar={setShowSidebar} showSidebar={showSidebar}>
        {children}
      </Sidebar>
    </div>
  );
};
