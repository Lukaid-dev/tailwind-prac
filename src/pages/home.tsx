import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <div className="font-bold text-5xl">Home</div>
      <div className="flex flex-col items-center justify-center">
        <ul className="text-2xl">
          <li>
            <Link to="/lec3">Lec3</Link>
          </li>
          <li>
            <Link to="/lec4">Lec4</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
