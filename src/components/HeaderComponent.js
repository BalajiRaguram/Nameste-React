import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="logo"
          src="https://images-platform.99static.com/v84irzbNBd5aawXGKXfH4SEjcn0=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/117/117132/attachment_117132760"
        />
      </Link>
      <h1>Food App</h1>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about"> About Us</Link>
          </li>
          <li>
            <Link to="/contact"> Contact Us</Link>
          </li>

          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
