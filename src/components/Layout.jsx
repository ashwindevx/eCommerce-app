import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <>
      <div class="h-full bg-teal-50">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;
