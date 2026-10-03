import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/post">Post</a></li>
        <li><a href="/comments">Comments</a></li>
      </ul>
    </nav>
  );
}
