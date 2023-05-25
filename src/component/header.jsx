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

export default function Header(props) {
  return (
    <header className="header">
      <a href="#" className="logo">
        <i className="fas fa-book"></i> U-MangaLog
      </a>

      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/search">Search</a>
        <a href="/aboutus">About Us</a>
      </nav>

      <div className="icons">
        <div id="login-btn" className="fas fa-user" onClick={loginButton}></div>
        <div id="menu-btn" className="fas fa-bars" onClick={menuButton}></div>
      </div>
      <form action="" className="login-form">
        <h3>login</h3>

        <input type="email" placeholder="Masukkan email" className="box" />
        <input
          type="password"
          placeholder="Masukkan password"
          className="box"
        />
        <div className="remember">
          <input type="checkbox" name="" id="remember-me" />
          <label htmlFor="remember-me">ingat saya</label>
        </div>
        <a href="#" className="btn">
          login
        </a>
      </form>
    </header>
  );
}
