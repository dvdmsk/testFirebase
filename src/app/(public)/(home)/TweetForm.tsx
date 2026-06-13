import postTweet from "@/server-actions/post-tweet";

export default function TweetForm() {
  return (
    <form
      action={postTweet}
      className="w-full border border-white/10 rounded-2xl bg-white/[0.01] p-4 flex flex-col gap-3 transition-all focus-within:border-blue-500/40 focus-within:bg-white/[0.02] mb-6"
    >
      <div className="flex gap-3 items-start">
        {/* Аватарка-заглушка */}
        <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold select-none shrink-0">
          U
        </div>

        {/* Текстове поле */}
        <div className="flex-1">
          <textarea
            name="content"
            className="w-full bg-transparent text-white placeholder-white/30 border-0 outline-none resize-none py-1.5 text-lg leading-relaxed focus:ring-0"
            placeholder="What's happening?"
            rows={3}
          />
        </div>
      </div>

      {/* Розділювач */}
      <div className="h-[1px] bg-white/10 w-full" />

      {/* Нижня панель з кнопкою та іконками */}
      <div className="flex items-center justify-between">
        {/* Кнопки дій (додатковий візуальний стиль) */}
        <div className="flex gap-1 text-blue-400">
          <button
            type="button"
            className="p-2 rounded-full hover:bg-blue-500/10 transition-colors cursor-pointer"
            title="Media"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375 0 11-.75 0 .375 0 01.75 0z" />
            </svg>
          </button>
          <button
            type="button"
            className="p-2 rounded-full hover:bg-blue-500/10 transition-colors cursor-pointer flex items-center justify-center"
            title="GIF"
          >
            <span className="text-[10px] font-bold border border-blue-400 rounded px-1 py-0.5 select-none leading-none">GIF</span>
          </button>
          <button
            type="button"
            className="p-2 rounded-full hover:bg-blue-500/10 transition-colors cursor-pointer"
            title="Emoji"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
            </svg>
          </button>
        </div>

        {/* Кнопка відправки */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 active:scale-95 text-white font-semibold px-5 py-2 rounded-full text-sm transition-all shadow-md shadow-blue-500/10 cursor-pointer"
        >
          Post
        </button>
      </div>
    </form>
  );
}
