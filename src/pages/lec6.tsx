// Form Modifier
// invalid:bg-red-100은 input이 invalid 상태일 때 배경색을 빨간색으로 바꿔준다.
// 중첩 modifier도 가능한데, 중첩된 순서가 중요하다. (순서대로 적용된다.) focus:invalid:bg-red-100와 invalid:focus:bg-red-100은 다르다.

// peer: 형제 요소를 선택할 수 있다. (input과 button이 서로 형제 요소이다.)

// bonus!! Gradient -> bg-gradient-to-tr from-cyan-500 via-gray-400 to-purple-400

export default function Lec6() {
  return (
    <main className="bg-gray-100 md:bg-green-100 h-screen flex items-center justify-center p-5">
      <div className="flex flex-col md:flex-row gap-2 bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm">
        <input
          className="w-full rounded-full h-10 bg-gray-200 pl-5 py-3 outline-none ring ring-transparent focus:ring-green-500 focus:ring-offset-2 transition-shadow focus:placeholder:drop-shadow focus:invalid:bg-red-100 focus:invalid:ring-orange-500 peer"
          type="email"
          required
          placeholder="Email address"
        />
        <span className="text-red-500 hidden peer-invalid:block">
          Email is required
        </span>
        <button className="bg-black text-white py-2 rounded-full outline-none active:scale-90 transition-transform font-medium md:px-10 peer-required:bg-green-100">
          Login
        </button>
      </div>
    </main>
  );
}
