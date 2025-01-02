import React from "react";
import Header from "../../components/Header";
import Tabs from "../../components/Tabs";
import StatusBar from "./StatusBar";
import Feed from "./feed/Feed";
import { Route, Routes } from "react-router-dom";
import Explore from "../explore/Explore";
import NotFound from "../notfound/NotFound";
import Profile from "../profile/Profile";
import Notifications from "../notifications/Notifications";
import Upload from "../upload/upload";

const MainPage = () => {
  return (
    <div className="w-full h-full relative flex flex-col">
      <div className="h-full w-full flex-1">
        <Routes>
          <Route path="/feed" element={<Feed />}></Route>
          <Route path="/explore" element={<Explore />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/notifications" element={<Notifications />}></Route>
          <Route path="/upload" element={<Upload />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
      <div className="fixed w-full bottom-0">
        <Tabs />
      </div>
    </div>
  );
};

export default MainPage;
