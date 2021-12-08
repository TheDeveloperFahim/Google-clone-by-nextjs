import { ViewGridIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";

export default function Header() {
  return (
    <header className="flex w-full p-5 justify-between text-sm text-gray-700">
      {/* Left section */}
      <div className="flex space-x-4 items-center">
        <a href="#" className="link">
          About
        </a>
        <a href="#" className="link">
          Store
        </a>
      </div>

      {/* Right section */}
      <div className="flex space-x-4 items-center ">
        <a href="#" className="link">
          Gmail
        </a>
        <a href="#" className="link">
          Image
        </a>

        <ViewGridIcon className="h-10 w-10 p-2 cursor-pointer rounded-full hover:bg-gray-100 transition" />

        <Avatar url="https://lh3.googleusercontent.com/ogw/ADea4I516gTEbxyK0RXEHKONQdPnPKQKanTKFDZUi684=s32-c-mo" />
      </div>
    </header>
  );
}

