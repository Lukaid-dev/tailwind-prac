// State Modifier

// *: 모든 자식 컨테이너에 적용된다. (자식 선택자)
// has: 해당 컨테이너에서 특정 조건을 만족하는 자식을 확인, 특정 클래스를 가지고 있는지 확인 할 수도 있고, 가상 클래스를 가지고 있는지 확인 할 수도 있다. has-[:invalid]

export default function Lec7() {
  return (
    <main className="bg-gray-100 md:bg-green-100 h-screen flex items-center justify-center p-5">
      <div className="flex flex-col md:flex-row gap-2 bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm *:outline-none ring ring-transparent transition-shadow has-[:invalid]:ring-red-200 has-[:invalid]:ring has-[:focus:invalid]:bg-red-100">
        <input
          className="w-full rounded-full h-10 bg-gray-200 pl-5 py-3 ring ring-transparent focus:ring-green-500 focus:ring-offset-2 transition-shadow focus:placeholder:drop-shadow focus:invalid:bg-red-100 focus:invalid:ring-orange-500"
          type="text"
          required
          placeholder="Search here..."
        />
        <button className="bg-black text-white py-2 rounded-full active:scale-90 transition-transform font-medium md:px-10">
          Search
        </button>
      </div>
    </main>
  );
}
