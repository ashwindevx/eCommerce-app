import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <>
      <div className="h-full">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;
