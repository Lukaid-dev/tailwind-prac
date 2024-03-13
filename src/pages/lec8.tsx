// List and Animation

// 리스트에서 짝수와 홀수번째 아이템에 따라 다른 스타일을 적용하는 방법 -> odd:bg-gray-100 even:bg-cyan-100
// 마지막 아이템에만 border-bottom을 다르게 적용하는 방법 -> border-b-2 pb-5 last:border-0 last:pb-0
// 리스트 아이템에 애니메이션을 적용하는 방법 -> animate-spin animate-bounce animate-pulse (animate-pulse를 이용해서 스켈레톤 같은거 만들기 삽가능)

export default function Lec8() {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-100 p-5 md:bg-green-100">
      <div className="flex flex-col gap-6">
        <div className="flex w-full max-w-screen-sm flex-col gap-3 rounded-3xl bg-white p-5 shadow-lg">
          {['Lukaid', 'Me', 'You', 'yourself', ''].map((person, index) => (
            <div key={index} className="flex items-center gap-5">
              <div className="size-10 rounded-full bg-blue-400" />
              <span className="text-lg font-medium empty:h-5 empty:w-24 empty:animate-pulse empty:rounded-full empty:bg-gray-300">
                {person}
              </span>
              <div className="relative flex size-6 items-center justify-center rounded-full bg-red-500 text-white">
                <span className="z-10">{index}</span>
                <div className="absolute flex size-6 animate-ping items-center justify-center rounded-full bg-red-500" />
              </div>
            </div>
          ))}
        </div>
        {/* Skeleton Example */}
        <div className="flex w-full max-w-screen-sm flex-col gap-3 rounded-3xl bg-white p-5 shadow-lg">
          <div className="flex items-center justify-center">
            <span className="text-xl text-gray-600">Skeleton Example</span>
          </div>
          {[0, 1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="flex items-center gap-5
          *:animate-pulse">
              <div className="size-10 rounded-full bg-blue-400" />
              <div className="h-4 w-40 rounded-full bg-gray-400"></div>
              <div className="h-4 w-20 rounded-full bg-gray-400"></div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
