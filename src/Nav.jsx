import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>

    <li>
      <Link to="/post">Post</Link>
    </li>

    <li>
      <Link to="/comments">Comments</Link>
    </li>
  </ul>
</nav>
  );
}