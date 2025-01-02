import React, { useState } from "react";
import { BsFillLightningFill, BsLightning } from "react-icons/bs";
import { FaCircleUser } from "react-icons/fa6";
import { GoBell, GoBellFill } from "react-icons/go";
import {
  RiSearch2Fill,
  RiSearch2Line,
  RiUpload2Fill,
  RiUpload2Line,
} from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Tabs = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("feed");
  const tabs = [
    {
      id: "feed",
      outlinedIcon: <BsLightning />,
      filledIcon: <BsFillLightningFill />,
    },
    {
      id: "explore",
      outlinedIcon: <RiSearch2Line />,
      filledIcon: <RiSearch2Fill />,
    },
    {
      id: "upload",
      outlinedIcon: <RiUpload2Line />,
      filledIcon: <RiUpload2Fill />,
    },
    {
      id: "notifications",
      outlinedIcon: <GoBell />,
      filledIcon: <GoBellFill />,
    },
    {
      id: "profile",
      outlinedIcon: <FaCircleUser />,
      filledIcon: <FaCircleUser />,
    },
  ];
  return (
    <div className="px-3 py-3 flex border-t-[1px] border-zinc-700 items-center justify-between bg-[#1D1C21] ">
      {tabs.map((tab) => {
        return (
          <div
            key={tab.id}
            className={`w-1/5 flex items-center justify-center cursor-pointer text-2xl ${
              activeTab == tab.id ? "text-white" : "text-zinc-600"
            }`}
            onClick={() => {
              setActiveTab(tab.id);
              navigate(`/main/${tab.id}`);
            }}
          >
            {activeTab == tab.id ? tab.filledIcon : tab.outlinedIcon}
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
