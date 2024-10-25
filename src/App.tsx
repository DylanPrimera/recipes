import { BrowserRouter, Link } from "react-router-dom";
import { Category } from "./components/Category";
import { Pages } from "./pages/Pages";
import { Search } from "./components/Search";
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="flex justify-start items-center py-16 px-0">
          <GiKnifeFork className="text-[2rem]"/>
          <Link to="/" className="text-[1.5rem] font-[400] italic">
            Good Kitchen
          </Link>
        </nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
