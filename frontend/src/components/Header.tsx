import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-row bg-slate-700">
      <div className="header-button">
        <Link to="/">About me</Link>
      </div>
      <div className="header-button">
        <Link to="/auto">Auto</Link>
      </div>
      <div className="header-button">
        <Link to="/art">Art</Link>
      </div>
      <div className="header-button">
        <Link to="/music">Music</Link>
      </div>
    </div>
  );
};

export default Header;
