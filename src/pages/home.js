import React from "react";
import "../style.css";
import Header from "../component/header";
import ImageWave from "../gambar/bottom_wave.png";
// import { Swiper } from "https://unpkg.com/swiper@7/swiper-bundle.min.css";

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

// var swiper = new Swiper(".gallery-slider", {
//   grabCursor: true,
//   loop: true,
//   centeredSlides: true,
//   spaceBetween: 20,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     700: {
//       slidesPerView: 2,
//     },
//   },
// });

export default function Home(props) {
  return (
    <React.StrictMode>
      <Header loginClick={loginButton} menuClick={menuButton} />
      {/* Home */}
      <section className="home" id="home">
        <div className="content">
          <h3>Karya Koleksi</h3>

          <h1>
            <br />
            Kunjungi dan Nikmati
            <br />
            Lukisan Dari Indonesia
          </h1>
          <a
            href="https://en.m.wikipedia.org/wiki/Indonesian_painting"
            className="btn"
          >
            Jelajahi Lebih
          </a>
        </div>

        <img src={ImageWave} alt="" className="wave" />
      </section>
      {/* End of Home */}
      {/* About */}
      <section className="about" id="about">
        <div className="box-container">
          <div className="image">
            <img
              src="https://www.dewimagazine.com/img/images/DEWI%20MAGAZINE%20-%20Hendra%20Gunawan-Pengantin%20Revolusi%281%29.jpg"
              alt=""
            />
          </div>

          <div className="content">
            <h3 className="title">Informasi</h3>
            <p>
              Website kami adalah website museum online yang menampilkan
              lukisan-lukisan dari pelukis atau artist di Indonesia. Website ini
              juga kami buat menggunakan HTML dan JavaScript.
            </p>
          </div>
        </div>
      </section>
      {/* End of About */}
      {/* Gallery */}
      <section className="gallery" id="gallery">
        <h2 className="heading">Galeri</h2>

        <div className="swiper gallery-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide slide">
              <div className="image">
                <img src={require("../gambar/galeri.jpg")} alt="" />
              </div>
            </div>

            <div className="swiper-slide slide">
              <div className="image">
                <img src={require("../gambar/galeri2.jpg")} alt="" />
              </div>
            </div>

            <div className="swiper-slide slide">
              <div className="image">
                <img src={require("../gambar/galeri3.jpg")} alt="" />
              </div>
            </div>

            <div className="swiper-slide slide">
              <div className="image">
                <img src={require("../gambar/galeri4.jpg")} alt="" />
              </div>
            </div>
          </div>

          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </section>
      {/* End of Gallery */}
      {/* Lukisan */}
      <section className="lukisan" id="lukisan">
        <h2 className="heading">Lukisan</h2>

        <div className="box-container">
          <div className="box">
            <img src="gambar/seele.png" alt="" />
            <div className="content">
              <h3>seele</h3>
              <a
                href="https://honkai-star-rail.fandom.com/wiki/Seele"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                see details
              </a>
            </div>
          </div>

          <div className="box">
            <img src="gambar/galeri2.jpg" alt="" />
            <div className="content">
              <h3>m. yatim</h3>
              <a
                href="https://medanartdirectory.wordpress.com/2015/01/01/yatim-mustafa/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                see details
              </a>
            </div>
          </div>

          <div className="box">
            <img src="gambar/galeri3.jpg" alt="" />
            <div className="content">
              <h3>hendrik hermanus joel</h3>
              <a
                href="https://id.wikipedia.org/wiki/Henk_Ngantung"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                see details
              </a>
            </div>
          </div>

          <div className="box">
            <img src="gambar/galeri4.jpg" alt="" />
            <div className="content">
              <h3>basoeki abdullah</h3>
              <a
                href="https://id.wikipedia.org/wiki/Basuki_Abdullah"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                see details
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* End of Lukisan */}
    </React.StrictMode>
  );
}
// sessionStorage : Penyimpanan sesi website, di close akan hilang.
// localStorage : Penyimpanan di %LocalAppData%, di close akan save.
// https://www.w3schools.com/jsref/prop_win_sessionstorage.asp
// https://www.w3schools.com/jsref/prop_win_localstorage.asp
