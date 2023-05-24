export default function Header(props) {
  return (
    <header className="header">
      <a href="#" className="logo">
        <i className="fas fa-paint-brush"></i> ART MUSEUM
      </a>

      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/aboutus">About Us</a>
        <a href="#gallery">Highlight</a>
        <a href="#lukisan">Gallery</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="icons">
        <div
          id="login-btn"
          className="fas fa-user"
          onClick={props.loginClick}
        ></div>
        <div
          id="menu-btn"
          className="fas fa-bars"
          onClick={props.menuClick}
        ></div>
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
