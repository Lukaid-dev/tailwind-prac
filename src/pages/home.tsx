import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <div className="text-5xl font-bold">Home</div>
      <div className="flex flex-col items-center justify-center">
        <ul className="text-2xl">
          <li>
            <Link to="/lec3">Lec3</Link>
          </li>
          <li>
            <Link to="/lec4">Lec4</Link>
          </li>
          <li>
            <Link to="/lec5">Lec5</Link>
          </li>
          <li>
            <Link to="/lec6">Lec6</Link>
          </li>
          <li>
            <Link to="/lec7">Lec7</Link>
          </li>
          <li>
            <Link to="/lec8">Lec8</Link>
          </li>
          <li>
            <Link to="/lec9">Lec9</Link>
          </li>
          <li>
            <Link to="/lec10">Lec10</Link>
          </li>
          <li>
            <Link to="/lec11">Lec11</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
