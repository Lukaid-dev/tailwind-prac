// Directives

// index.css or globals.css에 있는 @tailwind ~~ 를 Directives라고 부름
// 대충 placeholder라고 생각할 수 있음
// 컴파일러는 이 directive들을 생성된 class name으로 바꿔줌

// 만약 같은 css 스타일을 반복하여 사용하고 싶다면 두가지 옵션이 있음
// 1. react component로 만들어서 사용
// 2. @apply directive를 사용

export default function Lec10() {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-100 p-5 md:bg-green-100">
      <div className="flex w-full max-w-screen-sm flex-col gap-3 rounded-3xl bg-white p-5 shadow-lg">
        <a className="text-bigger" href="">
          this link is green
        </a>
        <button className="btn">Submit</button>
      </div>
    </main>
  );
}
