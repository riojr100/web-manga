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

if (localStorage.getItem("username") === null) {
  localStorage.clear();
  localStorage.setItem("username", "");
}

export default function Header(props) {
  const storedItems = localStorage.getItem("username");
  const [textBox, setTextbox] = useState("");
  const [username, setUsername] = useState("Welcome, " + storedItems);

  const submitHandler = (e) => {
    e.preventDefault();
    setUsername("Welcome, " + textBox);
    localStorage.setItem("username", textBox);
  };

  return (
    <header className="header">
      <a href="/" className="logo">
        <i className="fas fa-book"></i> U-MangaLog
      </a>

      <nav className="navbar">
        <ul className="navbarList">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/search">Search</a>
          </li>
          <li>
            <a href="/aboutus">About Us</a>
          </li>
        </ul>
      </nav>

      <div className="icons">
        <div id="login-btn" className="fas fa-user" onClick={loginButton}></div>
        <div id="menu-btn" className="fas fa-bars" onClick={menuButton}></div>
      </div>
      <form onSubmit={submitHandler} className="login-form">
        <h3>
          {localStorage.getItem("username") == "" ? "Set Username" : username}
        </h3>

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
      </form>
    </header>
  );
}
