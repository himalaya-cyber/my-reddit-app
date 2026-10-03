import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Post from "./Post";
import Comments from "./Comments";

export default function App() {
  const samplePost = {
    title: "My First Reddit Post",
    content: "This is a demo post for my portfolio project."
  };

  const sampleComments = [
    "Nice post!",
    "This looks great.",
    "Keep building!"
  ];

  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/post"
          element={<Post title={samplePost.title} content={samplePost.content} />}
        />
        <Route
          path="/comments"
          element={<Comments comments={sampleComments} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
