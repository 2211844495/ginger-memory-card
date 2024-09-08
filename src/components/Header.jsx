import React from "react";
import "../styles/Header.css";
function Header() {
  return (
    <>
      <div className="header">
        <div className="img">
          <img
            className="thumbnail"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwmERsPz_lOOhSTF6M3wLrw65_Be8AEwpp_XBS7Ienmy2Fn3yZ"
            alt=""
          />
        </div>
        <h1>Memory Card Game <br/><span>Ginger Edition!</span></h1>
        <p>
          Try to get as many points as you can by clicking on a card. But, don't
          click on one card twice!
        </p>
      </div>
    </>
  );
}
export default Header;
