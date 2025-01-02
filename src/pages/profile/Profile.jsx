import React from "react";
import { HiOutlineEnvelope } from "react-icons/hi2";

const Profile = () => {
  return (
    <div className="w-full h-full flex flex-col gap-5 p-4 overflow-y-auto">
      <div className="flex flex-col w-full items-center mt-3">
        <div className="w-20 h-20 relative rounded-lg bg-zinc-400">
          <img
            src="images/user1.avif"
            alt="user"
            className="h-full w-full object-cover rounded-lg"
          />
          <p className="absolute -bottom-2 -right-2 bg-lime-400 text-black leading-4 px-1 py-[0.15rem] font-mono rounded-full">
            +
          </p>
        </div>
        <h2 className="mt-3 text-lg">Micheal Shawn</h2>
        <p className="text-zinc-500 text-sm">Expert Gym Trainer</p>
      </div>
      <div className="w-full flex items-center justify-evenly">
        <div className="flex flex-col items-center">
          <p className="text-lg">12</p>
          <p className="text-zinc-500 text-sm">Posts</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-lg">10k</p>
          <p className="text-zinc-500 text-sm">Followers</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-lg">135</p>
          <p className="text-zinc-500 text-sm">Following</p>
        </div>
      </div>
      <div className="flex gap-4 w-full items-center justify-center">
        <button className="border px-4 py-1 rounded-lg">Edit Profile</button>
        <HiOutlineEnvelope className="text-2xl" />
      </div>
      {/* Category Stories */}
      <div className="flex gap-3 w-full items-center justify-start overflow-x-auto py-2 min-h-[6.5rem]">
        <div className="flex flex-col gap-1 items-center">
          <div className="w-16 h-16 bg-zinc-400 rounded-md">
            <img
              src="images/category1.jpeg"
              alt="category"
              className="w-full h-full object-cover rounded-lg border border-zinc-400"
            />
          </div>
          <p className="text-xs text-zinc-400 w-16 text-center truncate">
            Breakfast
          </p>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <div className="w-16 h-16 bg-zinc-400 rounded-md">
            <img
              src="images/category2.webp"
              alt="category"
              className="min-w-16 h-16 object-cover rounded-lg border border-zinc-400"
            />
          </div>
          <p className="text-xs text-zinc-400 w-16 text-center truncate">Gym</p>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <div className="w-16 h-16 bg-zinc-400 rounded-md">
            <img
              src="images/category3.jpg"
              alt="category"
              className="min-w-16 h-16 object-cover rounded-lg border border-zinc-400"
            />
          </div>
          <p className="text-xs text-zinc-400 w-16 text-center truncate">
            Travel
          </p>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <div className="w-16 h-16 bg-zinc-400 rounded-md">
            <img
              src="images/category4.webp"
              alt="category"
              className="min-w-16 h-16 object-cover rounded-lg border border-zinc-400"
            />
          </div>
          <p className="text-xs text-zinc-400 w-16 text-center truncate">Jog</p>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <div className="w-16 h-16 bg-zinc-400 rounded-md">
            <img
              src="images/category5.webp"
              alt="category"
              className="min-w-16 h-16 object-cover rounded-lg border border-zinc-400"
            />
          </div>
          <p className="text-xs text-zinc-400 w-16 text-center truncate">
            Team
          </p>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <div className="w-16 h-16 bg-zinc-400 rounded-md">
            <img src="images/explore6.jpg" alt="category" className='min-w-16 h-16 object-cover rounded-lg border border-zinc-400'  />
          </div>
          <p className="text-xs text-zinc-400 w-16 text-center truncate">
            Training
          </p>
        </div>
      </div>

      {/* All Posts section */}
      <div className="flex flex-col w-full">
        <div className="flex justify-evenly py-4 px-3 border-t-[1px] border-zinc-700">
          <button className="text-zinc-100 underline underline-offset-8 decoration-lime-400 decoration-2">
            All
          </button>
          <button className="text-zinc-400">Photos</button>
          <button className="text-zinc-400">Videos</button>
        </div>
        <div className="flex gap-2 justify-between flex-wrap">
          <div className="w-[31%] aspect-square rounded-lg overflow-hidden">
            <img
              src="images/post1e.avif"
              alt="post"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-[31%] aspect-square rounded-lg overflow-hidden">
            <img
              src="images/post1a.jpeg"
              alt="post"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-[31%] aspect-square rounded-lg overflow-hidden">
            <img
              src="images/post1b.avif"
              alt="post"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-[31%] aspect-square rounded-lg overflow-hidden">
            <img
              src="images/explore4.avif"
              alt="post"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-[31%] aspect-square rounded-lg overflow-hidden">
            <img
              src="images/post1d.jpg"
              alt="post"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-[31%] aspect-square rounded-lg overflow-hidden">
            <img
              src="images/explore6.jpg"
              alt="post"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-[31%] aspect-square rounded-lg overflow-hidden">
            <img
              src="images/post1c.jpg"
              alt="post"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-[31%] aspect-square rounded-lg overflow-hidden">
            <img
              src="images/category2.webp"
              alt="post"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-[31%] aspect-square rounded-lg overflow-hidden">
            <img
              src="images/category2.webp"
              alt="post"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="w-[31%] aspect-square rounded-lg overflow-hidden">
            <img
              src="images/category2.webp"
              alt="post"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-[31%] aspect-square rounded-lg overflow-hidden">
            <img
              src="images/category2.webp"
              alt="post"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-[31%] aspect-square rounded-lg overflow-hidden">
            <img
              src="images/category2.webp"
              alt="post"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-[31%] aspect-square rounded-lg overflow-hidden">
            <img
              src="images/category2.webp"
              alt="post"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
