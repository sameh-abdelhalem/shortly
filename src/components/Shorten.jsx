import { useState } from "react";

const Shorten = () => {
  const generateRandomNum = () => {
    const min = 100000;
    const max = 999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  let isEven = true;
  const [links, setLinks] = useState([
    {
      id: 1,
      link: "https://dummylink.io",
      shortenedLink: "https://rel.ink/k4IKyk",
    },
    {
      id: 2,
      link: "https://www.linkedin.com/in/sameh-mohamed-219a02206/",
      shortenedLink: "https://rel.ink/e4RxJk",
    },
    {
      id: 3,
      link: "https://github.com/sameh-abdelhalem/shortly",
      shortenedLink: "https://rel.ink/j2LGyk",
    },
  ]);
  const [website, setWebsite] = useState("");
  const [error, setError] = useState("");

  const validateWebsite = (value) => {
    const websiteRegex =
      /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\/\S*)?$/;
    if (!value) {
      setError("Website link is required");
      return false;
    } else if (!websiteRegex.test(value)) {
      setError("Invalid website link format");
      return false;
    } else {
      setError("");
      return true;
    }
  };

  const handleInputChange = (event) => {
    setWebsite(event.target.value);
    validateWebsite(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateWebsite(website)) {
      // Proceed with form submission
      console.log("Valid website link:", website);
    } else {
      // Validation failed, do something like displaying an error message
      console.log("Invalid website link:", website);
    }
  };

  return (
    <section id="shorten">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <form
          onSubmit={handleSubmit}
          id="link-form"
          className="relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3"
        >
          <input
            type="text"
            value={website}
            onChange={handleInputChange}
            className="flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none"
            placeholder="Shorten a link here"
            id="link-input"
          />
          {error && <div className="text-red flex items-center">{error}</div>}
          <button
            onClick={() => {
              validateWebsite(website) &&
                setLinks((prevState) => [
                  {
                    link: website,
                    shortenedLink: `https://rel.ink/${generateRandomNum()}`,
                    id: Math.random(),
                  },
                  ...prevState,
                ]);
            }}
            className="px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2"
          >
            Shorten It
          </button>
        </form>

        {/* Link 1 */}
        {links.map((link) => {
          isEven = !isEven;
          return (
            <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
              <p className="font-bold text-center text-veryDarkViolet md:text-left">
                {link.link}
              </p>

              <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
                <div className="font-bold text-cyan">{link.shortenedLink}</div>
                <button
                  className={`p-2 px-8 text-white ${
                    !isEven ? "bg-cyan" : "bg-darkViolet"
                  } rounded-lg hover:opacity-70 focus:outline-none`}
                >
                  Copy
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Shorten;
