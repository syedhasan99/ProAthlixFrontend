import React from "react";
import { FaRegImage } from "react-icons/fa6";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { LuClipboardList, LuLink } from "react-icons/lu";
import { MdOndemandVideo, MdOutlinePoll } from "react-icons/md";

const Upload = () => {
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <div className="flex justify-between items-center py-2 px-3 mt-1">
        <div className="flex items-center gap-2">
          <button className="border border-zinc-600 p-2 rounded-full w-12 h-12 flex items-center justify-center font-mono text-lg">
            &#x3c;
          </button>
          <p className="text-lg text-zinc-300">Create a new post</p>
        </div>
        <button className="py-1 px-4 border border-zinc-500 rounded-lg hover:bg-slate-800">
          Post
        </button>
      </div>
      <hr className="border-zinc-500 w-11/12 mx-auto" />
      <div className="flex flex-col flex-1">
        <div className="flex justify-between px-3 py-2 items-center">
          <div className="flex items-center gap-2">
            <div className="min-w-14 h-14 rounded-full">
              <img
                src="images/user1.avif"
                alt="user"
                className="overflow-hidden w-full h-full object-cover rounded-full"
              />
            </div>
            <p className="font-semibold tracking-wide">Micheal Shawn</p>
          </div>
          <div>
            <HiOutlineDotsVertical className="text-xl" />
          </div>
        </div>
        <div className="flex-1 w-full h-full">
          <textarea
            className="bg-gradient-to-br from-slate-900 to-gray-900 w-full h-1/2 outline-none border-none py-3 px-4"
            placeholder="Express your thoughts..."
          ></textarea>
          <div className="flex flex-col">
            <div className="flex items-center gap-3 border-b border-zinc-500 pt-2 pb-3 px-5 cursor-pointer hover:bg-slate-800">
                <LuClipboardList className="text-2xl" />
                <p className="text-zinc-400">Blosco Notes</p>
            </div>
            <div className="flex items-center gap-3 border-b border-zinc-500 pt-2 pb-3 px-5 cursor-pointer hover:bg-slate-800">
                <p className="text-2xl font-serif px-1">T</p>
                <p className="text-zinc-400">Text</p>
            </div>
            <div className="flex items-center gap-3 border-b border-zinc-500 pt-2 pb-3 px-5 cursor-pointer hover:bg-slate-800">
                <FaRegImage className="text-2xl" />
                <p className="text-zinc-400">Photo</p>
            </div>
            <div className="flex items-center gap-3 border-b border-zinc-500 pt-2 pb-3 px-5 cursor-pointer hover:bg-slate-800">
                <MdOndemandVideo className="text-2xl" />
                <p className="text-zinc-400">Video</p>
            </div>
            <div className="flex items-center gap-3 border-b border-zinc-500 pt-2 pb-3 px-5 cursor-pointer hover:bg-slate-800">
                <MdOutlinePoll className="text-2xl" />
                <p className="text-zinc-400">Poll</p>
            </div>
            <div className="flex items-center gap-3 border-b border-zinc-500 pt-2 pb-3 px-5 cursor-pointer hover:bg-slate-800">
                <LuLink className="text-2xl" />
                <p className="text-zinc-400">Link</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-9"></div>
    </div>
  );
};

export default Upload;
