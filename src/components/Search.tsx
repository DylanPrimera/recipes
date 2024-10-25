import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(search === "") return;
    navigate(`/search/${search}`);
  };

  return (
    <form className="my-10" onSubmit={handleSubmit}>
      <div className="relative w-full">
        <FaSearch className="absolute top-[1.6rem] left-0 translate-x-[100%] translate-y-[-50%] text-white" />
        <input
          type="text"
          className="w-full border-none text-[1.5rem] bg-gradient-to-r from-[#494949] to-[#313131] text-white py-2 px-12 outline-none rounded-2xl"
          placeholder="Search a recipe"
          onChange={(e)=> setSearch(e.target.value)}
          value={search}
        />
      </div>
    </form>
  );
};
