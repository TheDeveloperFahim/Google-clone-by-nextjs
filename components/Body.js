import { MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";

export default function Body() {
  const router = useRouter();
  const searchInputRef = useRef();

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <form className="flex flex-col items-center mt-28 flex-grow ">
      <Image
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        alt="Google"
        height={100}
        width={300}
      />

      {/* Input Search bar Area  */}
      <div className="flex w-full mt-5 items-center hover:shadow-lg transition duration-200 focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 sm:max-w-xl ">
        <SearchIcon className="h-5 mr-3 text-gray-400" />
        <input
          ref={searchInputRef}
          type="text"
          className="flex-grow focus:outline-none "
        />
        <MicrophoneIcon className="h-5 cursor-pointer text-gray-800" />
      </div>

      {/* Search bar bottom buttons Area */}
      <div className="flex flex-col space-y-2 w-1/2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
        <button className="btn" onClick={search}>
          Google Search
        </button>
        <button className="btn" onClick={search}>
          I'm Feeling Lucky
        </button>
      </div>
    </form>
  );
}
