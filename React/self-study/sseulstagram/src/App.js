import { useState } from "react";
import "./App.css";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "sseulgirang",
      caption: "하이루1",
      imageUrl:
        "https://images.unsplash.com/photo-1634942537034-2531766767d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGluc3RhZ3JhbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
    },
    {
      username: "seulgikim",
      caption: "하이루2",
      imageUrl:
        "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    },
    {
      username: "sseul",
      caption: "하이루3",
      imageUrl:
        "https://images.unsplash.com/photo-1643503640904-75c1a2093570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGluc3RhZ3JhbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
    },
    {
      username: "seulgiroo",
      caption: "하이루4",
      imageUrl:
        "https://images.unsplash.com/photo-1633886897663-44c707d71904?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGluc3RhZ3JhbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
    },
  ]);

  return (
    <div className="App">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          alt=""
        />
      </div>
      <h1>Hello Clever Programmers </h1>
      {posts.map((posts) => (
        <Post
          username={posts.username}
          caption={posts.caption}
          imageUrl={posts.imageUrl}
        />
      ))}

      {/* Header */}
      {/* Posts */}
      {/* Posts */}
    </div>
  );
}

export default App;
