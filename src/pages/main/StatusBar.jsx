import React from 'react'

const StatusBar = () => {
  return (
    <div className='py-2 bg-neutral-800'>
      <div className='flex px-4 gap-4 overflow-x-auto'>
        <div className="flex flex-col items-center">
          <div className="outlined p-[0.15rem] relative">
            <div className="status border-black border-2 rounded-full">
              <img src="images/user1.avif" alt="user" className='min-w-16 h-16 object-cover rounded-full' />
            </div>
            <div className='absolute bottom-1 right-1 border-[1px] border-black w-5 h-5 font-mono flex items-center justify-center bg-blue-500 rounded-full'>+</div>
          </div>
          <div className="text-sm">Status</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="outlined rounded-full bg-gradient-to-r from-lime-300 to-green-600 p-[0.15rem]">
            <div className="status border-black border-2 rounded-full">
              <img src="images/user2.jpg" alt="user" className='min-w-16 h-16 object-cover rounded-full' />
            </div>
          </div>
          <div className="text-sm w-16 text-center truncate ">StatusStatus atstfafs</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="outlined rounded-full bg-gradient-to-r from-lime-300 to-green-600 p-[0.15rem]">
            <div className="status border-black border-2 rounded-full">
              <img src="images/user9.avif" alt="user" className='min-w-16 h-16 object-cover rounded-full' />
            </div>
          </div>
          <div className="text-sm w-16 text-center truncate">Status</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="outlined rounded-full bg-gradient-to-r from-lime-300 to-green-600 p-[0.15rem]">
            <div className="status border-black border-2 rounded-full">
              <img src="images/user5.jpeg" alt="user" className='min-w-16 h-16 object-cover rounded-full' />
            </div>
          </div>
          <div className="text-sm w-16 text-center truncate">Status</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="outlined rounded-full bg-gradient-to-r from-lime-300 to-green-600 p-[0.15rem]">
            <div className="status border-black border-2 rounded-full">
              <img src="images/user2.webp" alt="user" className='min-w-16 h-16 object-cover rounded-full' />
            </div>
          </div>
          <div className="text-sm w-16 text-center truncate">Status</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="outlined rounded-full bg-gradient-to-r from-lime-300 to-green-600 p-[0.15rem]">
            <div className="status border-black border-2 rounded-full">
              <img src="images/user3.avif" alt="user" className='min-w-16 h-16 object-cover rounded-full' />
            </div>
          </div>
          <div className="text-sm w-16 text-center truncate">Status</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="outlined rounded-full bg-gradient-to-r from-lime-300 to-green-600 p-[0.15rem]">
            <div className="status border-black border-2 rounded-full">
              <img src="images/user3.webp" alt="user" className='min-w-16 h-16 object-cover rounded-full' />
            </div>
          </div>
          <div className="text-sm w-16 text-center truncate">Status</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="outlined rounded-full bg-gradient-to-r from-lime-300 to-green-600 p-[0.15rem]">
            <div className="status border-black border-2 rounded-full">
              <img src="images/user7.jpg" alt="user" className='min-w-16 h-16 object-cover rounded-full' />
            </div>
          </div>
          <div className="text-sm w-16 text-center truncate">Status</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="outlined rounded-full bg-gradient-to-r from-lime-300 to-green-600 p-[0.15rem]">
            <div className="status border-black border-2 rounded-full">
              <img src="images/user4.jpg" alt="user" className='min-w-16 h-16 object-cover rounded-full' />
            </div>
          </div>
          <div className="text-sm w-16 text-center truncate">Status</div>
        </div>
      </div>
    </div>
  )
}

export default StatusBar