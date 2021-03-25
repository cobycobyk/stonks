import "./Header.css";
import Logo from "../robinhood.svg";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

export default function Header() {
  return (
    <div className="header">
      {/* logo */}
      <Link to="/">
        <img className="header__logo" src={Logo} width={25} />
      </Link>
      {/* search */}
      <div className="header__search">
        <SearchIcon className="header__searchIcon" />
        <input
          className="header__searchInput"
          type="text"
          placeholder="Search"
        />
      </div>
      {/* menu items */}
      <div className="header__menuItems">
        <Link to="/">Free Stocks</Link>
        <Link to="/">Portfolio</Link>
        <Link to="/">Cash</Link>
        <Link to="/">Messages</Link>
        <Link to="/">Account</Link>
      </div>
    </div>
  );
}
