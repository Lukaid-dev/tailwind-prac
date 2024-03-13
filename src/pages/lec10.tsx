// JIT & arbitrary value & tailwind.config.js

// tailwind css는 compiler이다. 클래스를 사용하면 그에 맞는 css를 그때그때 생성한다.
// 따라서 미리 생성된 class name 파일은 존재하지 않는다.

// JIT 덕분에 arbitrary value를 사용할 수 있다. ex) h-[123.456px] w-[123.456px]
// tailwind.config.js의 content에 있는 파일을 JIT이 읽어서 사용한다.
// 또한 custom class name을 생성 할 수 있다. tailwind.config.js -> theme -> extend

export default function Lec10() {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-100 p-5 md:bg-green-100">
      <div className="flex w-full max-w-screen-sm flex-col gap-3 rounded-3xl bg-white p-5 shadow-lg">
        <button className="text-primary rounded-wow my-a-lot h-[123.456px] w-full bg-[#2eb135]">
          submit
        </button>
      </div>
    </main>
  );
}
