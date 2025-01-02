import React, { useState } from "react";
import Post from "./Post";
import Header from "../../../components/Header";
import StatusBar from "../StatusBar";

const Feed = () => {
  let posts = [
    {
      id: 1,
      author: "John Doe",
      authorImg: "images/user.jpeg",
      images: [
        "images/post0a.webp",
        "images/post0b.jpeg",
        "images/post0c.avif",
        "images/post0d.jpg",
      ],
      caption: "says: This is a sample post. Share your thoughts.",
      likes: 200,
      comments: 50,
      time: "Today, 11:30 AM",
      layout: "post-portrait",
    },
    {
      id: 2,
      author: "Jane Smith",
      authorImg: "images/user2.webp",
      images: ["images/post2.png"],
      caption: "says: Another sample post. Comment and like this one.",
      likes: 150,
      comments: 30,
      time: "Today, 10:45 AM",
      layout: "post-landscape",
    },
    {
      id: 3,
      author: "Bob Johnson",
      authorImg: "images/user3.avif",
      images: ["images/post3.jpeg"],
      caption: "says: A third sample post. Share your thoughts.",
      likes: 180,
      comments: 45,
      time: "Today, 10:15 AM",
      layout: "post-portrait",
    },
  ];
  return (
    <div className="feed">
      <Header />
      <main className="w-full h-full overflow-y-auto">
        <StatusBar />
        {posts.map((postData, index) => {
          return <Post key={index} postData={postData} />;
        })}
      </main>
    </div>
  );
};

export default Feed;
