import { useEffect, useState } from "react";

function loginButton() {
  let login = document.querySelector(".login-form");
  let navbar = document.querySelector(".header .navbar");
  login.classList.toggle("active");
  navbar.classList.remove("active");
}
function menuButton() {
  let login = document.querySelector(".login-form");
  let navbar = document.querySelector(".header .navbar");
  login.classList.remove("active");
  navbar.classList.toggle("active");
}
window.onscroll = () => {
  let login = document.querySelector(".login-form");
  let navbar = document.querySelector(".header .navbar");
  login.classList.remove("active");
  navbar.classList.remove("active");
};

// sessionStorage.setItem("username", "");
// sessionStorage.clear();

export default function Header(props) {
  const [textBox, setTextbox] = useState("");
  const [username, setUsername] = useState("");
  if (sessionStorage.getItem("username") !== null) {
    // let user = sessionStorage.getItem("username");
    // setUsername(user);
  }

  useEffect(() => {
    // const user = username;
    // sessionStorage.setItem("username", user);
  }, [username]);

  return (
    <header className="header">
      <a href="/" className="logo">
        <i className="fas fa-book"></i> U-MangaLog
      </a>

      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/search">Search</a>
        <a href="/aboutus">About Us</a>
      </nav>

      <div className="icons">
        <div id="login-btn" className="fas fa-user" onClick={loginButton}>
          {username}
        </div>
        <div id="menu-btn" className="fas fa-bars" onClick={menuButton}></div>
      </div>
      <div action="" className="login-form">
        <h3>Set Username</h3>

        <input
          onChange={(e) => {
            setTextbox(e.target.value);
          }}
          type="text"
          placeholder="Masukkan Username"
          className="box"
        />
        {/* <input
          type="password"
          placeholder="Masukkan password"
          className="box"
        /> */}
        {/* <div className="remember">
          <input type="checkbox" name="" id="remember-me" />
          <label htmlFor="remember-me">ingat saya</label>
        </div> */}
        <button className="btn">Set</button>
      </div>
    </header>
  );
}
