
const Hero = () => {
    return (
        <section className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-[#eef2f9] text-white">
      <div className="max-w-4xl px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tigh text-black">
          Merge PDFs in Seconds
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-400">
          Simple. Fast. No sign-up. No nonsense.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="cursor-pointer px-4 py-3 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-400 transition">
            Start Merging
          </button>
{/* 
          <button className="px-6 py-3 rounded-xl border border-white/40 hover:bg-white/10 transition">
            Learn More
          </button> */}
        </div>
      </div>
    </section>
  )
}
        export default Hero;