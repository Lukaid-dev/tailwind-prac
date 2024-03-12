// tailwind variables
// tailwind의 어떤 class들은 css를 바꾸는 것이 아니라 --tw-로 시작하는 변수를 바꾼다. ex) bg-opacity-100 -> --tw-bg-opacity: 1;
// ex) ring ring-orange-500 ring-offset-2 ring-offset-blue-600
// placeholder와 같은 가상요소에도 modifier를 적용할 수 있다. ex) placeholder:text-red-500 or focus:placeholder:text-red-500

export default function Lec4() {
  return (
    <main className="bg-gray-100 h-screen flex items-center justify-center p-5">
      <div className="flex flex-col gap-2 bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm">
        <input
          className="w-full rounded-full h-10 bg-gray-200 pl-5 py-3 outline-none ring ring-transparent focus:ring-orange-500 focus:ring-offset-2 transition-shadow focus:placeholder:drop-shadow"
          type="text"
          placeholder="Search here..."
        />
        <button className="bg-black text-white py-2 rounded-full outline-none active:scale-90 transition-transform font-medium">
          Search
        </button>
      </div>
    </main>
  );
}
