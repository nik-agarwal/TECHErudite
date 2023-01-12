import React from "react";

export default function About() {
  const mystyle = {
    display: "flex",
    justifyContent: "space-between",
  };

  const mystyle2 = {
    width :"34rem",
    marginTop : "3rem"
  };
  return (
    <>
      <div>
        <h1 className="text-center">We grow brands</h1>
        <h1 className="text-center">What is Techerudite?</h1>
        <p className="text-center" style={{ margin: " 1rem 11rem" }}>
          Since its inception in 2014. Techerudite scrutinizes the needs of all
          customers and with the mass experience and talented people, we can
          create an online presence of your business for any type of industry.
          With the enormous skills in the web & mobile app development, UVUX
          design, digital marketing, we manage the entire creative process and
          stay available to provide robust solutions to solve complex tech
          snags.
        </p>
      </div>
      <div className="container" style={mystyle}>
        <div className="item" id="item1">
          image
        </div>
        <div className="item" id="item2">
          <p style={mystyle2}>
            Our tech mind offers expert, creative, scalable & high-quality
            solutions that fulfill your all requirements. We act ethically,
            deliver excellent solutions, respect your contribution. With
            nurturing trust, we analyze your requirements: put our heads into it
            to exceed customers' expectations. We offer best-suited services
            which fetch mutually profitable experience. 
            
            With the huge client base all over the world, we build brands and build a long-lasting
            relationship with customers who reflect our success, struggle & a
            journey of making Happy Customers Customer satisfaction & success is
            our biggest achievement We grow by making people's dreams alive by
            creating outstanding websites, mobile apps, and captivating designs.
            This is what we want to be remembered by making a difference. Be a
            part of our organization we warmly welcome challengingprojects &
            innovation
          </p>
        </div>
      </div>
    </>
  );
}
