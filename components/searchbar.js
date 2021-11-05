const SearchBar = () => {
  return (
    <div className=" pt-40 p-20	">
      <div className="bg-white flex items-center justify-self-center rounded-full shadow-xl">
        <input
          className="rounded-l-full w-full  px-6 text-gray-700 leading-tight focus:outline-none"
          id="search"
          type="text"
          placeholder="Search"
        />

        <div className="p-4">
          <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
            icon
          </button>
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
