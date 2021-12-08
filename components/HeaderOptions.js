import {
  DotsVerticalIcon,
  LocationMarkerIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";

export default function HeaderOptions() {
  return (
    <div className="flex items-center ml-0 sm:ml-48 pl-2 border-b border-gray-200">
      {/* Left Ssection */}
      <LeftSection />

      {/* Right Ssection */}
      <div>
        <p className="btn cursor-pointer py-1 text-[#86898D]">Tools</p>
      </div>
    </div>
  );
}

const LeftSection = () => {
  return (
    <div className="flex mr-3 items-center">
      <p className="items text-blue-500 border-b-2 border-blue-500">
        <SearchIcon className="h-5 pr-1" />{" "}
        <span className="hidden sm:inline-flex"> All </span>
      </p>
      <p className="items">
        <PhotographIcon className="h-5 pr-1" />{" "}
        <span className="hidden sm:inline-flex"> Images</span>
      </p>
      <p className="items">
        <PlayIcon className="h-5 pr-1" />{" "}
        <span className="hidden sm:inline-flex"> Video</span>
      </p>
      <p className="items">
        <NewspaperIcon className="h-5 pr-1" />{" "}
        <span className="hidden sm:inline-flex"> News</span>
      </p>
      <p className="items">
        <LocationMarkerIcon className="h-5 pr-1" />{" "}
        <span className="hidden sm:inline-flex"> Map</span>
      </p>
      <p className="items">
        <DotsVerticalIcon className="h-5 pr-1" />{" "}
        <span className="hidden sm:inline-flex"> More</span>
      </p>
    </div>
  );
};
