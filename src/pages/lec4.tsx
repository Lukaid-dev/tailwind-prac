// tailwind variables
// tailwind의 어떤 class들은 css를 바꾸는 것이 아니라 --tw-로 시작하는 변수를 바꾼다. ex) bg-opacity-100 -> --tw-bg-opacity: 1;
// ex) ring ring-orange-500 ring-offset-2 ring-offset-blue-600
// placeholder와 같은 가상요소에도 modifier를 적용할 수 있다. ex) placeholder:text-red-500 or focus:placeholder:text-red-500

export default function Lec4() {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-100 p-5">
      <div className="flex w-full max-w-screen-sm flex-col gap-2 rounded-3xl bg-white p-5 shadow-lg">
        <input
          className="h-10 w-full rounded-full bg-gray-200 py-3 pl-5 outline-none ring ring-transparent transition-shadow focus:ring-orange-500 focus:ring-offset-2 focus:placeholder:drop-shadow"
          type="text"
          placeholder="Search here..."
        />
        <button className="rounded-full bg-black py-2 font-medium text-white outline-none transition-transform active:scale-90">
          Search
        </button>
      </div>
    </main>
  );
}
