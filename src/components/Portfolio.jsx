import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    MOBILE: "Mobile",
    // BRAND: "Web/Desktop",
    WEB: "web",
  };

  const projectsData = [
    {
      title: "Metareset",
      projectInfo:
      "MetaReset is an UBI based social interactive metaverse platform. MetaReset aims to connect web3 products with IRL. It allows users to ship their products from digital to user’s doorstep.",
      client: "Metareset",
      date: "Present",
      thumbImage: "images/projects/metareset (1).png",
      sliderImages: [
        "images/projects/metareset(2).png",
        "images/projects/metareset3.png",
      ],
      categories: [filters.MOBILE],
    },
    {
      title: "Mann + hummel",
      projectInfo:
      "Developed website for Senzit project, it is a product of Man+hummel, provides more uptime to our customers and manages fleet maintenance. It uses sensors to monitor the air filter status of agricultural, construction or mining machinery. Senzit measures the condition of the air filter and transfers the data to the user's mobile device or the fleet manager’s desktop.",
      client: "Purple talk",
      date: "2017 - 2019",
      thumbImage: "images/projects/manndesktop1.png",
      sliderImages: [
        "images/projects/manndesktop2.png",
        "images/projects/manndesktop3.png",
      ],
      categories: [filters.WEB],
    },
    {
      title: "DR Reddy's",
      projectInfo:
      "Dr. Reddy's Laboratories is a global pharmaceutical company based in India, with a presence in over 100 countries. The company produces and markets a wide range of pharmaceutical products including generic drugs, biosimilars, and proprietary products. Dr. Reddy's is known for its research and development capabilities and has a strong focus on innovation, including drug discovery and development in key therapeutic areas such as oncology, gastroenterology, and cardiology. The company is also committed to corporate social responsibility and has several initiatives in place to improve access to healthcare and promote education and sustainability.",
      client: "Purple talk",
      date: "2017 - 2019",
      thumbImage: "images/projects/drreddysdesktop1.png",
      sliderImages: [
        "images/projects/drreddysdesktop2.png",
        "images/projects/drreddysdesktop3.png",
      ],
      categories: [filters.WEB],
    },
    {
      title: "Kalgudi",
      projectInfo:
        "Kalgudi is a free to use platform for agriculture related initiatives. Kalgudi is accessible from mobile devices as well as from web browsers seamlessly. Different stakeholders of agriculture like farmers, traders, input dealers, farmer producer Organizations, students, scientists, researchers etc., are using Kalgudi to share their needs, ask & answer questions, receive news & information like farm advisories, market linkages, etc., currently partnered with ICRISAT and CGG in their agriculture extension initiatives.",
      client: "Vidcentum",
      date: "2014 - 2016",
      thumbImage: "images/projects/kalgudi1.png",
      sliderImages: [
        "images/projects/kalgudi2.png",
        "images/projects/kalgudi3.png",
        "images/projects/kalgudi4.png",
      ],
      categories: [filters.MOBILE],
    },
    {
      title: "Metareset",
      projectInfo:
      "MetaReset is an UBI based social interactive metaverse platform. MetaReset aims to connect web3 products with IRL. It allows users to ship their products from digital to user’s doorstep.",
      client: "Metareset",
      date: "Present",
      thumbImage: "images/projects/meta.png",
      sliderImages: [
        "images/projects/metareset.png",
        "images/projects/metareset2.png",
      ],
      categories: [filters.WEB],
    },
    
    {
      title: "Mann + hummel",
      projectInfo:
      "Developed website for Senzit project, it is a product of Man+hummel, provides more uptime to our customers and manages fleet maintenance. It uses sensors to monitor the air filter status of agricultural, construction or mining machinery. Senzit measures the condition of the air filter and transfers the data to the user's mobile device or the fleet manager’s desktop.",
      client: "Purple talk",
      date: "2017 - 2019",
      thumbImage: "images/projects/mannhummel1.png",
      sliderImages: [
        "images/projects/mannhummel2.png",
        "images/projects/mannhummel3.png",
        "images/projects/mannhummel4.png",
      ],
      categories: [filters.MOBILE],
    },
    
    {
      title: "Dr, Reddy's",
      projectInfo:
      "Dr. Reddy's Laboratories is a global pharmaceutical company based in India, with a presence in over 100 countries. The company produces and markets a wide range of pharmaceutical products including generic drugs, biosimilars, and proprietary products. Dr. Reddy's is known for its research and development capabilities and has a strong focus on innovation, including drug discovery and development in key therapeutic areas such as oncology, gastroenterology, and cardiology. The company is also committed to corporate social responsibility and has several initiatives in place to improve access to healthcare and promote education and sustainability.",
      client: "Purple talk",
      date: "2017 - 2019",
      thumbImage: "images/projects/drreddys1.png",
      sliderImages: [
        "images/projects/dr reddys2.png",
        "images/projects/dr reddys3.png",
      ],
      categories: [filters.MOBILE],
    },
    {
      title: "Kalgudi",
      projectInfo:
        "Kalgudi is a free to use platform for agriculture related initiatives. Kalgudi is accessible from mobile devices as well as from web browsers seamlessly. Different stakeholders of agriculture like farmers, traders, input dealers, farmer producer Organizations, students, scientists, researchers etc., are using Kalgudi to share their needs, ask & answer questions, receive news & information like farm advisories, market linkages, etc., currently partnered with ICRISAT and CGG in their agriculture extension initiatives.",
      client: "Vidcentum",
      date: "2014 - 2016",
      thumbImage: "images/projects/kalgudidesktop1.png",
      sliderImages: [
        "images/projects/kalgudidesktop2.png",
        "images/projects/kalgudidesktop3.png",
      ],
      categories: [filters.WEB],
    // {
    //   title: "Project Title 5",
    //   projectInfo:
    //     "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    //   client: "Ruby Clinton",
    //   technologies: "iOS, HTML5, CSS3, PHP, Java",
    //   industry: "Art & Design",
    //   date: "July 16, 2019",
    //   thumbImage: "images/projects/project-5.jpg",
    //   sliderImages: [
    //     "images/projects/project-1.jpg",
    //     "images/projects/project-5.jpg",
    //   ],
    //   categories: [filters.DESIGN],
    // },
    // {
    //   title: "Project Title 6",
    //   projectInfo:
    //     "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    //   client: "Ruby Clinton",
    //   technologies: "iOS, HTML5, CSS3, PHP, Java",
    //   industry: "Art & Design",
    //   date: "July 16, 2019",
    //   url: {
    //     name: "www.example.com",
    //     link: "https://www.example.com",
    //   },
    //   socialLinks: {
    //     facebook: "http://www.facebook.com/",
    //     twitter: "http://www.twitter.com/",
    //     google: "http://www.google.com/",
    //     instagram: "http://www.instagram.com/",
    //     mail: "mailto:example@gmail.com",
    //   },
    //   thumbImage: "images/projects/project-6.jpg",
    //   sliderImages: [
    //     "images/projects/project-1.jpg",
    //     "images/projects/project-5.jpg",
    //   ],
    //   categories: [filters.BRAND],
    // },
    // {
    //   title: "Project Title 7",
    //   projectInfo:
    //     "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    //   client: "Ruby Clinton",
    //   technologies: "iOS, HTML5, CSS3, PHP, Java",
    //   industry: "Art & Design",
    //   date: "July 16, 2019",
    //   url: {
    //     name: "www.example.com",
    //     link: "https://www.example.com",
    //   },
    //   socialLinks: {
    //     facebook: "http://www.facebook.com/",
    //     twitter: "http://www.twitter.com/",
    //     google: "http://www.google.com/",
    //     instagram: "http://www.instagram.com/",
    //     mail: "mailto:example@gmail.com",
    //   },
    //   thumbImage: "images/projects/project-7.jpg",
    //   sliderImages: [
    //     "images/projects/project-1.jpg",
    //     "images/projects/project-5.jpg",
    //   ],
    //   categories: [filters.DESIGN, filters.PHOTOS],
    },
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-light" : "bg-dark-2")}
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
              Portfolio
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-dark" : "text-white")
              }
            >
              {" "}
              My Work
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          {/* Filter Menu */}
          <ul
            className={
              "portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 " +
              (darkTheme ? "" : "nav-light")
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link " +
                    (filterKey === filters[oneKey] ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(filters[oneKey])}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul>
          {/* Filter Menu end */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-3 filter-item " +
                      project.categories.join(" ")
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded">
                      <div className="portfolio-img rounded">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div className="portfolio-overlay">
                          <a
                            className="popup-ajax stretched-link"
                            href=""
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          />
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white fw-400">
                              {project.title}
                            </h5>
                            <span className="text-light">Category</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;
