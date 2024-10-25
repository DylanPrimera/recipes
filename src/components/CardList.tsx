import { Link } from "react-router-dom";
import { Cuisine } from "../types";


interface Props {
  data: Cuisine[];
}

export const CardList: React.FC<Props> = ({ data }) => {
  return (
    <div
      className="grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-[3rem]"
    >
      {data?.map((item) => (
        <div key={item.id}>
          <Link to={`/recipe/${item.id}`}>
            <img
              className="rounded-[2rem] w-full"
              src={item.image}
              alt={item.title}
            />
            <h4 className="text-center p-[1rem] font-bold">{item.title}</h4>
          </Link>
        </div>
      ))}
    </div>
  );
};
