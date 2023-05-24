import React from "react";

const AboutUs = () => {
  const members = [
    {
      name: "Reinhard Javera Maheswara",
      image: require("../gambar/seele.png"),
      nim: "00000077732",
    },
    {
      name: "Rio Joan Rinaldo",
      image: require("../gambar/seele.png"),
      nim: "00000078315",
    },
    {
      name: "Darryl Kurniawan",
      image: require("../gambar/seele.png"),
      nim: "00000078767",
    },
    {
      name: "Muhammad Tristan Ajibrilyan Nandipinto",
      image: require("../gambar/seele.png"),
      nim: "00000078653",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        <footer id="footerAboutUs">
          <h2 className="mt-3 text-center">About Us</h2>
        </footer>
      </div>
      <div className="row mt-4 d-flex justify-content-center">
        {members.map((member, index) => (
          <div
            className="col-md-6 d-flex justify-content-center"
            key={index}
            id={`aboutUs${member.name.split(" ")[0]}`}
          >
            <div className="card mx-1 kartu">
              <img
                className="card-img-top"
                src={member.image}
                alt={member.name}
                id={member.name.split(" ")[0]}
                data-bs-toggle="modal"
                data-bs-target="#ImagePreview"
                style={{ width: "2rem" }}
              />

              <div className="card-body">
                <p
                  className="card-text-center pt-2"
                  id={`nim${member.name.split(" ")[0]}`}
                >
                  {member.name}
                  <br />
                  {member.nim}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <b r />
      <br />
      <hr
        styl
        e={{
          height: "10px",
          borderWidth: "10px",
          borderRadius: "10px",
          color: "#ffffff",
          backgroundColor: "#0044aa",
        }}
      />
    </div>
  );
};

export default AboutUs;
