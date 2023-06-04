import React, { useEffect, useState } from "react";
import "../style.css";
import Header from "../component/header";
import Footer from "../component/footer";
import ImageWave from "../gambar/bottom_wave.png";
import Slides from "../slides.json";
import Slider from "../component/Slider";
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
      {/* <div className="lol" id="lol">
        <a href="gacor777.org"></a>
        <img src="https://res.cloudinary.com/dm6cjn57q/image/upload/v1671276133/hasilslot_ysxmvi.gif" />
      </div> */}
      <Header />
      {/* Home */}
      <section className="home" id="home">
        <div className="content-background"></div>
        <div className="content">
          <h3>U-Manga Log</h3>

          <h1>
            <br />
            Selamat datang!
            <br />
            Lihat dan review manga yang
            <br />
            menarik dan trending saat ini!
            <br />
            <br />
          </h1>
          <a
            href="https://id.wikipedia.org/wiki/Manga"
            className="btn"
            alt="Klik untuk general info tentang manga"
          >
            Apa Itu Manga?
          </a>
        </div>
        <img src={ImageWave} alt="" className="wave" />
      </section>
      {/* End of Home */}
      {/* About */}
      <section className="about" id="about">
        <div className="box-container">
          <div className="image">
            <img src="https://images2.imgbox.com/d0/26/Ik28DvL2_o.png" alt="" />
          </div>

          <div className="content">
            <h3 className="title">Informasi</h3>
            <br />
            <p>
              Website kami adalah website untuk mengetahui berbagai informasi
              mengenai manga yang ingin kita cari. Tujuan dari website ini
              adalah agar orang - orang yang tertarik dengan manga dan komik
              dapat mencari informasi tentang manga dan komik yang ingin mereka
              cari.
              <br />
              Website ini terdapat highlight manga yang trending; Search bar
              untuk mencari manga yang Anda inginkan; dan About Us untuk
              informasi mengenai developer website ini. Website ini juga kami
              buat menggunakan React dan CSS.
            </p>
          </div>
        </div>
      </section>
      {/* End of About */}
      {/* Trend */}
      <section className="trend" id="trend">
        <h2 className="heading">📚 Catalogue</h2>

        <Slider slides={Slides} />

        {/* <div className="swiper gallery-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide slide">
              <div className="image">
                <img
                  src="https://media.tenor.com/qkPV6_DL-NAAAAAd/bocchi-the-rock-bocchi.gif"
                  alt=""
                />
              </div>
            </div>

            <div className="swiper-slide slide">
              <div className="image">
                <img
                  src="https://i.pinimg.com/originals/b7/65/ec/b765ecf0e2ff088b462e513e4d6b8b1a.jpg"
                  alt=""
                />
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
        </div> */}
      </section>
      <Footer />
      {/* End of Trend */}
    </React.StrictMode>
  );
}
// sessionStorage : Penyimpanan sesi website, di close akan hilang.
// localStorage : Penyimpanan di %LocalAppData%, di close akan save.
// https://www.w3schools.com/jsref/prop_win_sessionstorage.asp
// https://www.w3schools.com/jsref/prop_win_localstorage.asp
