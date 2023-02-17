import React, { useEffect, useRef } from "react";

import Slider from "react-slick";

const ProjectDetailsModal = ({ darkTheme, projectDetails }) => {
  const sliderRef = useRef();

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  useEffect(() => {
    sliderRef.current.slickGoTo(0);
  }, [projectDetails]);

  return (
    <>
      <div
        className="modal fade bg-dark-1"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div
            className={
              "modal-content " + (darkTheme ? "bg-dark-2 text-light" : "")
            }
          >
            <div className="modal-body">
              <button
                type="button"
                className={"btn-close " + (darkTheme ? "btn-close-white" : "")}
                data-bs-dismiss="modal"
                aria-label="Close"
              />
              <div
                className={
                  "container ajax-container " +
                  (darkTheme ? "bg-dark-2 text-light" : "")
                }
              >
                <h2
                  className={
                    "text-6 font-weight-600 text-center mb-4" +
                    (darkTheme ? " text-white" : "")
                  }
                >
                  {projectDetails?.title}
                </h2>
                <div className="row g-4">
                  <div className="col-md-7" style={{textAlign: "center"}}>
                    <Slider {...settings} ref={sliderRef}>
                      <div className="item">
                        <img
                          className="img-fluid" style={{width: "60%",margin: "auto"}}
                          alt=""
                          src={projectDetails?.thumbImage}
                        />
                      </div>
                      {projectDetails?.sliderImages?.length > 0 &&
                        projectDetails?.sliderImages?.map((image, index) => (
                          <div className="item"  key={index}>
                            <img className="img-fluid" alt="" src={image} style={{width: "60%",margin: "auto"}}/>
                          </div>
                        ))}
                    </Slider>
                  </div>
                  <div className="col-md-5">
                    <h4
                      className={
                        "text-4 font-weight-600" +
                        (darkTheme ? " text-white" : "")
                      }
                    >
                      Project Info:
                    </h4>
                    <p>{projectDetails?.projectInfo}</p>
                    <h4
                      className={
                        "text-4 font-weight-600 mt-4" +
                        (darkTheme ? " text-white" : "")
                      }
                    >
                      Project Details:
                    </h4>
                    <ul
                      className={
                        "list-style-2 " + (darkTheme ? "list-style-light" : "")
                      }
                    >
                      <li>
                        <span
                          className={
                            "text-dark font-weight-600 me-2" +
                            (darkTheme ? " text-white" : "")
                          }
                        >
                          Client:
                        </span>
                        {projectDetails?.client}
                      </li>
                     
                      <li>
                        <span
                          className={
                            "text-dark font-weight-600 me-2" +
                            (darkTheme ? " text-white" : "")
                          }
                        >
                          Date:
                        </span>
                        {projectDetails?.date}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsModal;
