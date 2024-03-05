const Shorten = () => {
  return (
    <section id="shorten">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <form
          id="link-form"
          className="relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3"
        >
          <input
            type="text"
            className="flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none"
            placeholder="Shorten a link here"
            id="link-input"
          />
          <button className="px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2">
            Shorten It
          </button>
        </form>
        {/* Link 1 */}
        <div class="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
          <p class="font-bold text-center text-veryDarkViolet md:text-left">
            https://dummylink.io
          </p>

          <div class="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
            <div class="font-bold text-cyan">https://rel.ink/k4IKyk</div>
            <button class="p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none">
              Copy
            </button>
          </div>
        </div>
        {/* Link 2 */}
        <div class="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
          <p class="font-bold text-center text-veryDarkViolet md:text-left">
            https://www.linkedin.com/in/sameh-mohamed-219a02206/
          </p>

          <div class="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
            <div class="font-bold text-cyan">https://rel.ink/e4RxJk</div>
            <button class="p-2 px-8 text-white bg-darkViolet rounded-lg hover:opacity-70 focus:outline-none">
              Copy
            </button>
          </div>
        </div>
        {/* Link 3 */}
        <div class="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
          <p class="font-bold text-center text-veryDarkViolet md:text-left">
            https://github.com/sameh-abdelhalem/shortly
          </p>

          <div class="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
            <div class="font-bold text-cyan">https://rel.ink/j2LGyk</div>
            <button class="p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none">
              Copy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shorten;
