// Group Modifier

// Group Modifier는 부모의 상태에 따라서 자식을 변경하는 것, 이벤트 버블링 같은 개념 같네

export default function Lec9() {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-100 p-5 md:bg-green-100">
      <div className="flex w-full flex-col gap-10">
        <div className="flex w-full max-w-screen-sm flex-col gap-3 rounded-3xl bg-white p-5 shadow-lg">
          {['Lukaid', 'Me', 'You', 'yourself'].map((person, index) => (
            <div key={index} className="group flex items-center gap-5">
              <div className="size-10 rounded-full bg-blue-400" />
              <span className="text-lg font-medium group-hover:text-red-500">
                {person}
              </span>
              <div className="relative flex size-6 items-center justify-center rounded-full bg-red-500 text-white">
                <span className="z-10">{index}</span>
                <div className="absolute flex size-6 animate-ping items-center justify-center rounded-full bg-red-500" />
              </div>
            </div>
          ))}
        </div>
        <div className="group flex w-full max-w-screen-sm flex-col gap-3 rounded-3xl bg-white p-5 shadow-lg">
          <input
            className="w-full bg-gray-100"
            type="text"
            placeholder="Write your email..."
          />
          <span className="hidden group-focus-within:block">
            Make sure it is a valid email
          </span>
          <button>submit</button>
        </div>
      </div>
    </main>
  );
}
