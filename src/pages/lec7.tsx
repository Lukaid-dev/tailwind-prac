// State Modifier

// *: 모든 자식 컨테이너에 적용된다. (자식 선택자)
// has: 해당 컨테이너에서 특정 조건을 만족하는 자식을 확인, 특정 클래스를 가지고 있는지 확인 할 수도 있고, 가상 클래스를 가지고 있는지 확인 할 수도 있다. has-[:invalid]

export default function Lec7() {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-100 p-5 md:bg-green-100">
      <div className="flex w-full max-w-screen-sm flex-col gap-2 rounded-3xl bg-white p-5 shadow-lg ring ring-transparent transition-shadow *:outline-none has-[:focus:invalid]:bg-red-100 has-[:invalid]:ring has-[:invalid]:ring-red-200 md:flex-row">
        <input
          className="h-10 w-full rounded-full bg-gray-200 py-3 pl-5 ring ring-transparent transition-shadow focus:ring-green-500 focus:ring-offset-2 focus:placeholder:drop-shadow focus:invalid:bg-red-100 focus:invalid:ring-orange-500"
          type="text"
          required
          placeholder="Search here..."
        />
        <button className="rounded-full bg-black py-2 font-medium text-white transition-transform active:scale-90 md:px-10">
          Search
        </button>
      </div>
    </main>
  );
}
