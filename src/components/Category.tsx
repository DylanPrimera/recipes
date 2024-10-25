import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const categories: { id: number; name: string; icon: any }[] = [
  {
    id: 1,
    name: "italian",
    icon: <FaPizzaSlice />,
  },
  {
    id: 2,
    name: "american",
    icon: <FaHamburger />,
  },
  {
    id: 3,
    name: "thai",
    icon: <GiNoodles />,
  },
  {
    id: 4,
    name: "japanese",
    icon: <GiChopsticks />,
  },
];

export const Category = () => {
  return (
    <div className="flex justify-center my-[2rem] mx-0 gap-[2rem]">
      {categories.map((category) => (
        <NavLink
          to={`/cuisine/${category.name}`}
          className="category-link"
          key={category.id}
        >
          {category.icon}
          <h4>{category.name}</h4>
        </NavLink>
      ))}
    </div>
  );
};
