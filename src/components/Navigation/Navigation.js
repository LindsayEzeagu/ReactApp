/* eslint-disable jsx-a11y/anchor-is-valid */
import Button from "../button/Button";
import "./Navigation.css";

function Navigation() {
  return (
    <nav>
      <img src="" alt="my  web logo" />

      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
      </ul>
      <Button
        text="Join Niyo Family"
        buttonBackgroung="#fff"
        buttonColor="rgb(251,175,0)"
        />
    </nav>
  );
}

export default Navigation;