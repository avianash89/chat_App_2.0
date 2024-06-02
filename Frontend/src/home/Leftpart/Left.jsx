import React from "react";
import Search from "./Search.jsx";
import Users from "./Users.jsx";
import Logout from "./Logout.jsx";

function Left() {
  return (
    <div className="w-full bg-black text-gray-300">
      <Search />

      <div
        className="flex-1 overflow-y-auto"
        style={{ minHeight: "calc(89vh - 10vh)" }}>
        <Users />
      </div>
      <Logout />
    </div>
  );
}

export default Left;
