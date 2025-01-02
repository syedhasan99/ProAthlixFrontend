import React from "react";

const Notifications = () => {
  return (
    <div className="flex flex-col gap-3 p-4 relative h-full">
      <div className="border border-zinc-600 p-2 rounded-full absolute w-12 h-12 flex items-center justify-center font-mono text-lg">
        &#x3c;
      </div>
      <div className="mt-2 mb-3 flex items-center justify-center ">
        <h2 className="text-xl font-semibold text-center">Notifications</h2>
      </div>
      <div className="flex justify-between p-3 border-b-[1px] border-zinc-700">
        <p className=" text-zinc-200">Friend Requests</p>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-lime-400"></div>
          <p className="text-lime-400 text-sm">200+</p>
        </div>
      </div>
      <div className="flex flex-col gap-1 bg-zinc-950 py-3 px-2 rounded-lg overflow-y-auto flex-1">
        <div className="flex gap-1 px-2 pt-4 pb-6 border-b-[1px] border-zinc-600">
          <div className="flex-1 flex gap-3 items-center">
            <div className="min-w-16 w-16 h-16 rounded-lg">
                <img src="images/post1a.jpeg" alt="post" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-sm"><span className="font-semibold">Kostas</span> <span className="text-zinc-300">liked your post</span></p>
                <p className="text-xs text-zinc-400">25 min ago</p>
            </div>
          </div>
          <div className="w-5 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-lime-400"></div>
          </div>
        </div>
        <div className="flex gap-1 px-2 pt-4 pb-6 border-b-[1px] border-zinc-600">
          <div className="flex-1 flex gap-3 items-center">
            <div className="min-w-16 w-16 h-16 rounded-lg">
                <img src="images/explore1.jpg" alt="post" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-sm"><span className="font-semibold">Josh</span> <span className="text-zinc-300">commented on your post: "Nice one!!"</span></p>
                <p className="text-xs text-zinc-400">25 min ago</p>
            </div>
          </div>
          <div className="w-5 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-lime-400"></div>
          </div>
        </div>
        <div className="flex gap-1 px-2 pt-4 pb-6 border-b-[1px] border-zinc-600">
          <div className="flex-1 flex gap-3 items-center">
            <div className="min-w-16 w-16 h-16 rounded-lg">
                <img src="images/explore6.jpg" alt="post" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-sm"><span className="font-semibold">Yulia</span> <span className="text-zinc-300">commented on your post: "Keep up the good work!"</span></p>
                <p className="text-xs text-zinc-400">25 min ago</p>
            </div>
          </div>
          <div className="w-5 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-lime-400"></div>
          </div>
        </div>
        <div className="flex gap-1 px-2 pt-4 pb-6 border-b-[1px] border-zinc-600">
          <div className="flex-1 flex gap-3 items-center">
            <div className="min-w-16 w-16 h-16 rounded-lg">
                <img src="images/explore7.jpg" alt="post" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-sm"><span className="font-semibold">Venesa</span> liked your post</p>
                <p className="text-xs text-zinc-400">25 min ago</p>
            </div>
          </div>
          <div className="w-5 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-lime-400"></div>
          </div>
        </div>
        <div className="flex gap-1 px-2 pt-4 pb-6 border-b-[1px] border-zinc-600">
          <div className="flex-1 flex gap-3 items-center">
            <div className="min-w-16 w-16 h-16 rounded-lg">
                <img src="images/post1a.jpeg" alt="post" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-sm"><span className="font-semibold">Henry</span><span className="text-zinc-300"> liked your post</span></p>
                <p className="text-xs text-zinc-400">25 min ago</p>
            </div>
          </div>
          <div className="w-5 flex items-center justify-center">
            {/* <div className="w-3 h-3 rounded-full bg-lime-400"></div> */}
          </div>
        </div>
        <div className="flex gap-1 px-2 pt-4 pb-6 border-b-[1px] border-zinc-600">
          <div className="flex-1 flex gap-3 items-center">
            <div className="min-w-16 w-16 h-16 rounded-lg">
                <img src="images/post1a.jpeg" alt="post" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-sm"><span className="font-semibold">Zync</span><span className="text-zinc-300"> commented on your post: "I've also played here!"</span></p>
                <p className="text-xs text-zinc-400">25 min ago</p>
            </div>
          </div>
          <div className="w-5 flex items-center justify-center">
            {/* <div className="w-3 h-3 rounded-full bg-lime-400"></div> */}
          </div>
        </div>
        <div className="flex gap-1 px-2 pt-4 pb-6 border-b-[1px] border-zinc-600">
          <div className="flex-1 flex gap-3 items-center">
            <div className="min-w-16 w-16 h-16 rounded-lg">
                <img src="images/post1a.jpeg" alt="post" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="flex flex-col gap-1">
            <p className="text-sm"><span className="font-semibold">Kostas</span> <span className="text-zinc-300">liked your post</span></p>
            <p className="text-xs text-zinc-400">25 min ago</p>
            </div>
          </div>
          <div className="w-5 flex items-center justify-center">
            {/* <div className="w-3 h-3 rounded-full bg-lime-400"></div> */}
          </div>
        </div>
        <div className="flex gap-1 px-2 pt-4 pb-6 border-b-[1px] border-zinc-600">
          <div className="flex-1 flex gap-3 items-center">
            <div className="min-w-16 w-16 h-16 rounded-lg">
                <img src="images/post1a.jpeg" alt="post" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="flex flex-col gap-1">
            <p className="text-sm"><span className="font-semibold">Kostas</span> <span className="text-zinc-300">liked your post</span></p>
            <p className="text-xs text-zinc-400">25 min ago</p>
            </div>
          </div>
          <div className="w-5 flex items-center justify-center">
            {/* <div className="w-3 h-3 rounded-full bg-lime-400"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
