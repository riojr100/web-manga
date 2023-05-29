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
    <footer className="footer">
      <nav className="navbar2">
        <a href="/">Home</a>
        <a href="/search">Search</a>
        <a href="/aboutus">About Us</a>
      </nav>
    </footer>
  );
}
