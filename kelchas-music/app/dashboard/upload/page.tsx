export default function Upload() {
  return (
    <div className="min-h-screen p-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-zinc-100 mb-4">Upload Music</h1>
        <div className="glass-card p-6 rounded-lg">
          <form className="flex flex-col gap-4">
            <input className="bg-transparent border border-white/6 p-3 rounded" placeholder="Track title" />
            <input className="bg-transparent border border-white/6 p-3 rounded" placeholder="Producer" />
            <input type="file" className="text-zinc-200" />
            <button className="mt-2 px-4 py-2 rounded bg-amber-400 text-black">Upload</button>
          </form>
        </div>
      </div>
    </div>
  );
}
