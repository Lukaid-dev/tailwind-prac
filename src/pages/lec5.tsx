// Responsive Modifier
// tailwind는 기본적으로 모바일 환경을 기준으로 디자인되어 었다. 그래서 반응형 디자인을 위해선, sm, md, lg, xl, 2xl 등의 modifier를 사용해야 한다.
// 여기서 sm은 640px 이상일 때 적용되는 스타일을 의미한다. (최소값을 정의해주는 것)

export default function Lec5() {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-100 p-5 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100">
      <div className="flex w-full max-w-screen-sm flex-col gap-2 rounded-3xl bg-white p-5 shadow-lg md:flex-row">
        <input
          className="h-10 w-full rounded-full bg-gray-200 py-3 pl-5 outline-none ring ring-transparent transition-shadow focus:ring-orange-500 focus:ring-offset-2 focus:placeholder:drop-shadow"
          type="text"
          placeholder="Search here..."
        />
        <button className="rounded-full bg-black py-2 font-medium text-white outline-none transition-transform active:scale-90 md:px-10">
          Search
        </button>
      </div>
    </main>
  );
}
