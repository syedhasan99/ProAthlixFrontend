import React, { useState } from "react";
import { FaRegBookmark, FaRegComment, FaRegHeart } from "react-icons/fa6";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { LuSend } from "react-icons/lu";
import { useSwipeable } from "react-swipeable";

const Post = ({ postData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const {
    id,
    author,
    authorImg,
    images,
    caption,
    likes,
    comments,
    time,
    layout,
  } = postData;

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: goToNext,
    onSwipedRight: goToPrev,
    trackMouse: true,
    preventDefaultTouchmoveEvent: true,
    swipeThreshold: 100,
  });

  return (
    <div className="post">
      <div className="post-header flex items-center p-5 justify-between">
        <div className="flex gap-2">
          <img
            src={authorImg}
            alt="user"
            className="w-9 h-9 object-cover rounded-full"
          />
          <div className="flex flex-col">
            <div className="text-sm font-semibold">{author}</div>
            <div className="text-xs text-gray-500">{time}</div>
          </div>
        </div>
        <div className="dots">
          <HiOutlineDotsHorizontal className="text-xl" />
        </div>
      </div>
      <div className={layout}>
        {images.length == 1 ? (
          <img
            src={images[0]}
            alt="post"
            className="w-full h-full flex-shrink-0 object-cover"
          />
        ) : (
          <div {...swipeHandlers} className="relative overflow-hidden w-full h-full">
            {/* Image Container */}
            <div
              className="flex transition-transform duration-300 w-full h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Post ${index + 1}`}
                  className="w-full h-full flex-shrink-0 object-cover"
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-500 opacity-40 text-white rounded-full p-2 hover:bg-gray-900"
            >
              ❮
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-500 opacity-40 text-white rounded-full p-2 hover:bg-gray-900"
            >
              ❯
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <span
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full cursor-pointer ${
                    index === currentIndex ? "bg-white" : "bg-gray-400"
                  }`}
                ></span>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="post-desc flex flex-col gap-2 p-4">
        <section className="flex items-center justify-between">
          <div className="flex gap-4">
            <FaRegHeart className="text-2xl" />
            <FaRegComment className="text-2xl" />
            <LuSend className="text-2xl" />
          </div>
          <div>
            <FaRegBookmark className="text-2xl" />
          </div>
        </section>
        <section>
          <p className="text-sm font-semibold">{likes} likes</p>
        </section>
        <section>
          <p className="text-sm">
            <span className="font-semibold">{author}</span>&nbsp;&nbsp;
            {caption}
          </p>
        </section>
        <div>
          <div className="text-sm text-gray-500">
            View all {comments} comments
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
