// Plugin

// tailwind.config.js에는 plugin을 추가할 수 있다.
// plugin들이 하는 일은 base, components, utilities layer를 확장하는 것이다.

// tailwind팀에서 공식적으로 지원하는 typography나 forms같은 것들이 있다.
// npm i @tailwindcss/forms

export default function Lec12() {
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
