export default function Footer() {
  return (
    <footer className="grid w-full mt-24 divide-y-[1px] divide-gray-300 text-sm text-gray-500">
      <div className="px-8 py-3 ">
        <p>Bangladesh</p>
      </div>
      <div className="flex flex-wrap items-center py-3 px-7 sm:justify-between">
        <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start ">
          <p className="link">Advartising</p>
          <p className="link">Business</p>
          <p className="link">How search works</p>
        </div>
        <div className="flex justify-center space-x-8 md:ml-auto">
          <p className="link">Privacy</p>
          <p className="link">Terms</p>
          <p className="link">Settings</p>
        </div>
      </div>
    </footer>
  );
}

