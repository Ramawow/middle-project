import logo from "../images/logo.svg";

const Header = () => {
  return (
    <header>
      <h1>Todo App</h1>
      <img src={logo} className="logo" alt="Logo" />
    </header>
  );
};

export default Header;
