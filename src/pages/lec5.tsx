// Responsive Modifier
// tailwind는 기본적으로 모바일 환경을 기준으로 디자인되어 었다. 그래서 반응형 디자인을 위해선, sm, md, lg, xl, 2xl 등의 modifier를 사용해야 한다.
// 여기서 sm은 640px 이상일 때 적용되는 스타일을 의미한다. (최소값을 정의해주는 것)

export default function Lec5() {
  return (
    <main className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100 h-screen flex items-center justify-center p-5">
      <div className="flex flex-col md:flex-row gap-2 bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm">
        <input
          className="w-full rounded-full h-10 bg-gray-200 pl-5 py-3 outline-none ring ring-transparent focus:ring-orange-500 focus:ring-offset-2 transition-shadow focus:placeholder:drop-shadow"
          type="text"
          placeholder="Search here..."
        />
        <button className="bg-black text-white py-2 rounded-full outline-none active:scale-90 transition-transform font-medium md:px-10">
          Search
        </button>
      </div>
    </main>
  );
}
