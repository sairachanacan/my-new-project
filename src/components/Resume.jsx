import React from "react";
import resumeFile from "../documents/resume.pdf";

const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: "2010 - 2014",
      title: "Bachelor Degree",
      place: "Vignan University",
      desc: "I studied computer science at Vignan University, gaining comprehensive knowledge in programming, software development, and computer systems.",
    },
  ];

  const experienceDetails = [
    {
      yearRange: "2014 - 2016",
      title: "UI Developer",
      place: "India",
      desc: "I worked as a UI developer in 'vidcentum', where I designed and developed engaging user interfaces for web applications and ensured seamless user experiences.",
    },
    {
      yearRange: "2016 - 2017",
      title: "UI Developer",
      place: "India",
      desc: "I worked as a UI developer using Angular in 'LMIPHL', where I designed and developed dynamic, single-page applications with seamless user experiences.",
    },
    {
      yearRange: "2017 - 2019",
      title: "Module lead - UI Developer",
      place: "India",
      desc: "I worked as a module lead in UI development using Angular in 'purple talk', where I led a team of developers, managed project timelines, and ensured high-quality code delivery for dynamic, single-page applications.",
    },
    {
      yearRange: "2019 - 2020",
      title: "UI/UX Designer Developer",
      place: "Canada",
      desc: "I worked as a UI/UX designer and developer in 'dappstreet', where I designed wireframes and prototypes to ensure seamless user experiences and developed responsive web applications using html5, css3, angular, react that were optimized for performance and accessibility.",
    },
    {
      yearRange: "2020 - 2021",
      title: "Front end developer",
      place: "Canada",
      desc: "I worked as a front-end engineer in 'bell', where I developed and maintained complex web applications using cutting-edge front-end technologies and collaborated with cross-functional teams to deliver high-quality code that was optimized for performance and user experience.",
    },
    {
      yearRange: "2021 - present",
      title: "UX Designer",
      place: "Canada",
      desc: "I worked as a UX designer in 'metareset' where I designed wireframes, prototypes, and user interfaces for web and mobile applications, and conducted user research and usability testing to ensure a seamless and intuitive user experience. I collaborated with cross-functional teams, including developers and product managers, to create engaging and effective designs that met business and user needs.",
    },
  ];

  const skills = [
    {
      name: "Web Design",
      percent: 90,
    },
    {
      name: "HTML/CSS",
      percent: 95,
    },
    {
      name: "JavaScript",
      percent: 80,
    },
    {
      name: "React JS",
      percent: 70,
    },
    {
      name: "Angular Js",
      percent: 85,
    },
    {
      name: "Bootstrap",
      percent: 99,
    },
  ];

  return (
    <section
      id="resume"
      className={"section " + (darkTheme ? "" : "bg-dark-1")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-light opacity-4" : "text-muted opacity-1")
            }
          >
            Summary
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-dark" : "text-white")
            }
          >
            {" "}
            Resume
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
          {/* My Education */}
          <div className="row gx-5">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "" : "text-white")
              }
            >
              My Education
            </h2>
            {educationDetails.length > 0 &&
              educationDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-white border" : "bg-dark")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "" : "text-white")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-danger" : "text-primary"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "" : "text-white-50")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
          {/* My Experience */}
          <div className="row gx-5">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "" : "text-white")
              }
            >
              My Experience
            </h2>
            {experienceDetails.length > 0 &&
              experienceDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-white border" : "bg-dark")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "" : "text-white")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-danger" : "text-primary"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "" : "text-white-50")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
        {/* My Skills */}
        <h2
          className={
            "text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "" : "text-white")
          }
        >
          My Skills
        </h2>
        <div className="row gx-5">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div key={index} className="col-md-6">
                <p
                  className={
                    " fw-500 text-start mb-2 " +
                    (darkTheme ? "text-dark" : "text-light")
                  }
                >
                  {skill.name}{" "}
                  <span className="float-end">{skill.percent}%</span>
                </p>
                <div
                  className={
                    "progress progress-sm mb-4 " + (darkTheme ? "" : "bg-dark")
                  }
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div>
        <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none"
            href={resumeFile}
            download
          >
            Download CV
            <span className="ms-1">
              <i className="fas fa-download" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
