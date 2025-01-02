import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { LuSettings2 } from "react-icons/lu";

const Explore = () => {
  return (
    <div className="w-full h-full flex flex-col gap-3 items-start p-4">
      <div className="flex gap-3 w-full items-center ">
        <div className="searchbar bg-[#121214] flex-1 flex gap-2 items-center py-2 px-3 rounded-lg">
          <HiMagnifyingGlass className="text-lg text-zinc-500" />
          <input
            type="search"
            className="bg-transparent outline-none w-full placeholder:text-zinc-500"
            placeholder="Search"
          />
        </div>
        <div className="p-3 border-[1px] border-zinc-500 rounded-full">
          <LuSettings2 className="text-lg" />
        </div>
      </div>
      <div className="flex flex-col gap-4 overflow-y-auto w-full h-full">
        <div className="explore-posts grid grid-cols-2 gap-4 grid-rows-5 w-full min-h-96 aspect-[3/4]">
          <div className="row-start-1 row-span-3 bg-slate-300 rounded-lg overflow-hidden">
            <img
              src="images/explore1.jpg"
              alt="post"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="row-start-4 row-span-2 bg-slate-300 rounded-lg overflow-hidden">
            <img
              src="images/explore2.jpg"
              alt="post"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="row-start-1 row-span-2 bg-slate-300 rounded-lg overflow-hidden">
            <img
              src="images/explore3.jpg"
              alt="post"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="row-start-3 row-span-3 bg-slate-300 rounded-lg overflow-hidden">
            <img
              src="images/explore4.avif"
              alt="post"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="explore-posts grid grid-cols-2 gap-4 grid-rows-5 w-full aspect-[3/4] min-h-96">
          <div className="row-start-1 row-span-3 bg-slate-300 rounded-lg overflow-hidden">
            <img
              src="images/explore5.jpg"
              alt="post"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="row-start-4 row-span-2 bg-slate-300 rounded-lg overflow-hidden">
            <img
              src="images/explore6.jpg"
              alt="post"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="row-start-1 row-span-2 bg-slate-300 rounded-lg overflow-hidden">
            <img
              src="images/explore7.jpg"
              alt="post"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="row-start-3 row-span-3 bg-slate-300 rounded-lg overflow-hidden">
            <img
              src="images/explore8.jpg"
              alt="post"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="explore-posts grid grid-cols-2 grid-rows-5 gap-4 w-full aspect-[3/4] min-h-96">
          <div className="row-start-1 row-span-3 bg-slate-300 rounded-lg overflow-hidden">
            01
          </div>
          <div className="row-start-4 row-span-2 bg-slate-300 rounded-lg overflow-hidden">
            02
          </div>
          <div className="row-start-1 row-span-2 bg-slate-300 rounded-lg overflow-hidden">
            03
          </div>
          <div className="row-start-3 row-span-3 bg-slate-300 rounded-lg overflow-hidden">
            04
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
