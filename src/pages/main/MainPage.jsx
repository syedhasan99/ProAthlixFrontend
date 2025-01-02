import React from "react";
import Tabs from "../../components/Tabs.jsx";
import Feed from "./feed/Feed.jsx";
import { Route, Routes } from "react-router-dom";
import Explore from "../explore/Explore.jsx";
import NotFound from "../notfound/NotFound.jsx";
import Profile from "../profile/Profile.jsx";
import Notifications from "../notifications/Notifications.jsx";
import Upload from "../upload/Upload.jsx";

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
