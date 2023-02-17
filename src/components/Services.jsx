import React from "react";

const Services = ({ classicHeader, darkTheme }) => {
  // services details
  const services = [
    {
      name: "UI/UX Design",
      desc: "I offer comprehensive UX/UI design services to help you bring your ideas to life and ensure that your users have the best possible experience.My design process is focused on understanding your target audience and their needs, and I work closely with you to create a custom design solution that meets your specific goals. Whether you need a new website, mobile app, or other digital product, I can help you create a seamless user experience that will keep your users engaged and coming back for more.",
      icon: "fas fa-pencil-ruler",
    },
    {
      name: "Web development",
      desc: "My development process is focused on understanding your business goals and delivering a website or web application that is tailored to your unique requirements. Whether you need a simple brochure website or a complex web application, I can help you create a fast, responsive, and secure web presence that drives results.",
      icon: "fas fa-desktop",
    },
    {
      name: "Front end development",
      desc: "My development process is focused on delivering a website or web application that is optimized for performance, accessibility, and user engagement. I specialize in using Angular to build dynamic, single-page applications that offer seamless user experiences.",
      icon: "fas fa-desktop",
    },
  ];

  return (
    <section
      id="services"
      className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-white-50  opacity-1" : "text-light  opacity-4")
            }
          >
            Services
          </h2>
          <p
            className={
              "text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            What I Do?
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        {/* content start */}
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              {services.length > 0 &&
                services.map((service, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="featured-box style-3 mb-5">
                      <div
                        className={
                          "featured-box-icon text-primary  shadow-sm rounded " +
                          (darkTheme ? "bg-dark-1" : "bg-white")
                        }
                      >
                        <i className={service.icon} />
                      </div>
                      <h3 className={darkTheme ? "text-white" : ""}>
                        {service.name}
                      </h3>
                      <p
                        className={"mb-0 " + (darkTheme ? "text-white-50" : "")}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* content end */}
      </div>
    </section>
  );
};

export default Services;
