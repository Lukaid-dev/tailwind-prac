// Form Modifier
// invalid:bg-red-100은 input이 invalid 상태일 때 배경색을 빨간색으로 바꿔준다.
// 중첩 modifier도 가능한데, 중첩된 순서가 중요하다. (순서대로 적용된다.) focus:invalid:bg-red-100와 invalid:focus:bg-red-100은 다르다.

// peer: 형제 요소를 선택할 수 있다. (input과 button이 서로 형제 요소이다.)

// bonus!! Gradient -> bg-gradient-to-tr from-cyan-500 via-gray-400 to-purple-400

export default function Lec6() {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-100 p-5 md:bg-green-100">
      <div className="flex w-full max-w-screen-sm flex-col gap-2 rounded-3xl bg-white p-5 shadow-lg md:flex-row">
        <input
          className="peer h-10 w-full rounded-full bg-gray-200 py-3 pl-5 outline-none ring ring-transparent transition-shadow focus:ring-green-500 focus:ring-offset-2 focus:placeholder:drop-shadow focus:invalid:bg-red-100 focus:invalid:ring-orange-500"
          type="email"
          required
          placeholder="Email address"
        />
        <span className="hidden text-red-500 peer-invalid:block">
          Email is required
        </span>
        <button className="rounded-full bg-black py-2 font-medium text-white outline-none transition-transform active:scale-90 peer-required:bg-green-100 md:px-10">
          Login
        </button>
      </div>
    </main>
  );
}
