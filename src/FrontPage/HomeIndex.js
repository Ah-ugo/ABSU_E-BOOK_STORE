import React, { useEffect } from "react";
import NavComp from "./Components/NavComp";
import { Carousel, Typography } from "antd";
import { Button, Col, Container, Row } from "react-bootstrap";
import { CategoriesComponent } from "./Components/CategoriesComp";
import CategoriesCard from "./Components/CategoriesCard";
import BookCard from "./Components/BookCard";
import NavComp2 from "./Components/NavComp2";
import { NavComp3 } from "./Components/NavComp3";
import NavComp4 from "./Components/NavComp4";
import { AiOutlineArrowRight } from "react-icons/ai";
import FooterComponent from "./Components/FooterComponent";
import "bootstrap/dist/css/bootstrap.min.css";
// import OwlCarousel from "react-owl-carousel"
// import $ from 'jquery';
// import 'owl.carousel/dist/owl.carousel';

const { Text } = Typography;

export default function HomeIndex() {
  // useEffect(()=>{
  //   $(document).ready(function() {
  //     $('.owl-carousel').owlCarousel({
  //       items: 4,
  //       loop: true,
  //       margin: 10,
  //       autoplay: true,
  //       autoplayTimeout: 2000,
  //       autoplayHoverPause: true,
  //       responsive: {
  //         0: {
  //           items: 1
  //         },
  //         600: {
  //           items: 3
  //         },
  //         1000: {
  //           items: 4
  //         }
  //       }
  //     });
  //   });
  // },[])
  return (
    <div style={{ overflowX: "hidden" }}>
      <NavComp4 />
      {/* <main
        style={{
          height: "100%",
          width: "100%",
          position: "relative",
          top: 0,
          left: 0,
          zIndex: 0,
          background: "#1E315F",
          overflow: "hidden",
          backgroundPosition: "50% 50%",
        }}>
        <img
          src={require("./Assets/bgnorthpark.jpg")}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            opacity: 0.4,
          }}
        />

        <div
          style={{
            background: `url(${require("./Assets/yellow-arrow.png")}) 50% 100% no-repeat`,
            display: "table",
            margin: `0 auto 0.5rem`,
            overflow: "hidden",
            position: "absolute",
          }}>
          <Text>ONLINE BOOKSTORE</Text>
        </div>
      </main> */}

      <main style={{ overflowX: "hidden" }}>
        <Container>
          <Row>
            <Col
              lg={6}
              sm={6}
              style={{ textAlign: "left", marginTop: 40 }}

              // className="mt-0 mt-lg-4 mt-xl-4"
            >
              <Text
                style={{
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "50px",
                  lineHeight: "64px",

                  color: "#292929",
                }}>
                Explore & Imagine
              </Text>
              <br />
              <Text
                style={{
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "30px",
                  lineHeight: "40px",

                  color: "#828282",
                }}>
                With Abia State University's online bookstore - delve into your
                favourite books, listen to a multitude of stories, and unleash
                your creativity by penning down your own ideas, all in one
                convienent location.
              </Text>
              <br />
              {/* <main style={{ transform: "matrix(-1, 0, 0, 1, 0, 0)" }}> */}
              <Button
                style={{
                  width: "205px",
                  marginTop: 40,
                  height: "70px",
                  left: "272px",
                  // top: 615px;

                  background: "#56209F",
                  borderRadius: "10px",
                  // transform: "matrix(-1, 0, 0, 1, 0, 0)",
                }}
                className="mb-4">
                Explore Now
              </Button>
              {/* </main> */}
            </Col>
            <Col lg={6} sm={6} style={{ marginTop: 0 }}>
              <img
                src={require("../FrontPage/Assets/g10.png")}
                style={{ maxWidth: "100%", height: "100%" }}
              />
            </Col>
          </Row>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginTop: 20,
              }}>
              <div style={{ width: 33, height: 2, background: "#ED553B" }} />
              <Text
                style={{
                  fontFamily: "Inter",
                  fontStfyle: "normal",
                  fontWeight: "700",
                  fontSize: 14,
                  color: "#ED553B",
                }}>
                Categories
              </Text>
            </div>
            <div className="mb-3">
              <Text
                style={{
                  fontFamily: "Inter",
                  fontStfyle: "normal",
                  fontWeight: "700",
                  fontSize: 32,
                  color: "#393280",
                }}>
                Explore Our Top Categories
              </Text>
            </div>
            <main>
              {/* <CategoriesCard /> */}
              <Row>
                <Col lg={4} sm={6} className="mb-4">
                  <CategoriesCard
                    img={require("../FrontPage/Assets/img5.png")}
                    title={"First Year Books"}
                    link={"https://facebook.com"}
                  />
                </Col>
                <Col lg={4} sm={6} className="mb-4">
                  <CategoriesCard
                    img={require("../FrontPage/Assets/img6.png")}
                    title={"Management Books"}
                    link={"https://google.com"}
                  />
                </Col>
                <Col lg={4} sm={6} className="mb-4">
                  <CategoriesCard
                    img={require("../FrontPage/Assets/img7.png")}
                    title={"Engineering Books"}
                    link={"https://bluehost.com"}
                  />
                </Col>
                {/* <Col lg={4} sm={6}>
                  <CategoriesCard />
                </Col> */}
              </Row>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "end",
                }}>
                <a
                  href="#"
                  className="flex flex-row items-center justify-center content-center gap-2 text-textColor p-2 no-underline font-semibold">
                  VIEW MORE <AiOutlineArrowRight />
                </a>
              </div>
            </main>
          </div>
        </Container>
        <div
          style={{
            background:
              "linear-gradient(94.04deg, #FCECEC 1.85%, #F6FFFE 64.13%)",
            paddingTop: 10,
            paddingBottom: 10,
            marginTop: 20,
          }}>
          <Row style={{ display: "flex", alignItems: "center" }}>
            <Col sm={6} lg={6}>
              <Container>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}>
                    <div
                      style={{ width: 33, height: 2, background: "#ED553B" }}
                    />
                    <Text
                      style={{
                        fontFamily: "Inter",
                        fontStfyle: "normal",
                        fontWeight: "700",
                        fontSize: 14,
                        color: "#ED553B",
                      }}>
                      eBook
                    </Text>
                  </div>
                  <div>
                    <Text
                      style={{
                        fontFamily: "Inter",
                        fontStyle: "normal",
                        fontWeight: "800",
                        fontSize: 30,
                        color: "#38426C",
                        textAlign: "left",
                      }}>
                      Access, Read, Practice & Engage With Digital Content
                      (eBook){" "}
                    </Text>
                  </div>
                  <div>
                    <Text
                      style={{
                        fontFamily: "Inter",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: 18,
                        color: "rgba(57, 50, 128, 0.7)",
                        textAlign: "left",
                      }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna
                      commodo, lacus ut magna velit eleifend. Amet, quis urna, a
                      eu.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.
                    </Text>
                  </div>
                  <div className="pb-4 pt-3">
                    <Button
                      variant="outline-primary"
                      style={{
                        color: "#393280",
                        borderColor: "#393280",
                        borderRadius: 0,
                      }}>
                      SEE MORE
                    </Button>
                  </div>
                </div>
              </Container>
            </Col>
            <Col sm={6} lg={6} className="hidden md:flex">
              {/* <Container> */}
              <img
                src={require("../FrontPage/Assets/studentBook.png")}
                style={{ maxWidth: "100%", height: 552, objectFit: "cover" }}
              />
              {/* </Container> */}
            </Col>
          </Row>
        </div>
      </main>
      <div>
        <div className="my-4" style={{ textAlign: "center" }}>
          <Text
            style={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: 13,
              // lineHeight: 16,
              /* identical to box height */

              textAlign: "center",
              letterSpacing: "0.12em",
              textTransform: "uppercase",

              color: "#7A7A7A",
            }}>
            Some quality items
          </Text>
        </div>
        <div
          style={{
            textAlign: "center",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          className="d-block d-lg-flex d-xl-flex">
          <div
            className="hidden md:flex"
            style={{
              width: 445,
              // height: 0.1,
              border: "0.1px solid",
              color: "#E0E0E0",
              // left: 975px;
            }}
          />
          <Text
            style={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: 48,
              // lineHeight: 16,
              /* identical to box height */

              textAlign: "center",
              // letterSpacing: "0.12em",
              textTransform: "capitalize",

              color: "#393280",
            }}>
            New Release Books
          </Text>
          <div
            className="hidden md:flex"
            style={{
              width: 445,
              // height: 0.1,
              border: "0.1px solid",
              color: "#E0E0E0",
              // left: 975px;
            }}
          />
        </div>
      </div>
      <Container>
        <div>
          <Carousel autoplay>
            <div className="d-block d-lg-flex d-xl-flex">
              <BookCard
                className="d-none d-lg-block d-xl-block"
                cover={require("../FrontPage/Assets/book3 4.png")}
                title={"Database Management System"}
                author={"Engr. David Dimoji"}
                price={2600}
              />
              <BookCard
                className="d-none d-lg-block d-xl-block"
                cover={require("../FrontPage/Assets/book4 4.png")}
                title={"Introductory Chemistry"}
                author={"Mr. Godwin"}
                price={1850}
              />
              <BookCard
                className="d-none d-lg-block d-xl-block"
                cover={require("../FrontPage/Assets/book16 1.png")}
                title={"Introductory Physics"}
                author={"Dr. Emenike"}
                price={3000}
              />
              <BookCard
                cover={require("../FrontPage/Assets/book4 4.png")}
                title={"Fluid Mechanics"}
                author={"Engr. Nwasuka"}
                price={2500}
              />
            </div>
            <div className="d-block d-lg-flex d-xl-flex">
              <BookCard
                className="d-none d-lg-block d-xl-block"
                cover={require("../FrontPage/Assets/book3 4.png")}
                title={"Engineering Mathematics"}
                author={"Engr. Sylvanus"}
                price={3500}
              />
              <BookCard
                className="d-none d-lg-block d-xl-block"
                cover={require("../FrontPage/Assets/book4 4.png")}
                title={"Introduction To Programming"}
                author={"Engr. Francis"}
                price={2000}
              />
              <BookCard
                className="d-none d-lg-block d-xl-block"
                cover={require("../FrontPage/Assets/book4 4.png")}
                title={"Basics Of Matlab Programming"}
                author={"Engr. Chioma"}
                price={2500}
              />
              <BookCard
                cover={require("../FrontPage/Assets/book16 1.png")}
                title={"Engineering Science"}
                author={"Engr. Ahuchaogu"}
                price={2800}
              />
            </div>
          </Carousel>
        </div>
      </Container>
      <div
        style={{
          width: "100%",
          // height: 0.1,
          border: "0.1px solid",
          color: "#E0E0E0",
          // left: 975px;
        }}
      />
      <div
        // style={{
        //   textAlign: "right",
        //   marginRight: 10,
        //   marginTop: 34,
        //   marginBottom: 103,
        // }}
        className="flex justify-end flex-row align-middle items-center mb-14  mt-5 mx-32">
        <a
          href="#"
          className="flex flex-row align-middle items-center gap-2 text-textColor hover:text-blue-300"
          style={{
            textDecoration: "none",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "16px",
            // line-height: 19px;
            textAlign: "right",
            letterSpacing: "0.02em",
            textTransform: "capitalize",
          }}>
          View all products <AiOutlineArrowRight className="" />
        </a>
      </div>

      <main
        className="pb-10"
        style={{
          background:
            "linear-gradient(75.42deg, #FBEEEE 11.08%, #F7FFFE 89.87%)",
        }}>
        <Row>
          <Col lg={6} sm={6} style={{ marginTop: 90 }}>
            <img
              src={require("../FrontPage/Assets/book.png")}
              style={{ maxWidth: "100%", height: "100%" }}
            />
          </Col>
          <Col lg={6} sm={6} className="featuredBookTxt mt-4 pt-4">
            <Container
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}>
              <Text
                style={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "48px",
                  // line-height: 58px;
                  /* identical to box height */

                  textTransform: "capitalize",

                  color: "#393280",
                  marginBottom: "40px",
                }}>
                Featured book
              </Text>
              <div
                style={{ width: "101px", height: "2px", background: "#ED553B" }}
              />

              <Text
                style={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "13px",
                  // line-height: 58px;
                  /* identical to box height */

                  textTransform: "uppercase",
                  letterSpacing: "0.16em",
                  color: "#888888",
                  marginTop: 11,
                  marginBottom: 30,
                }}>
                By Timbur Hood
              </Text>
              <Text
                style={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "28px",
                  // lineHeight: 34px;
                  /* identical to box height */

                  textTransform: "capitalize",

                  color: "#393280",
                  marginBottom: 16,
                }}>
                Birds gonna be happy
              </Text>
              <Text
                style={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "16px",
                  // line-height: 58px;
                  /* identical to box height */

                  // textTransform: "uppercase",
                  letterSpacing: "0.02em",
                  color: "#7A7A7A",
                  textAlign: "left",
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                feugiat amet, libero ipsum enim pharetra hac.
              </Text>
              <Text
                style={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "23px",
                  // line-height: 58px;
                  /* identical to box height */

                  textTransform: "capitalize",
                  letterSpacing: "0.02em",
                  color: "#ED553B",
                  marginTop: "30px",
                  marginBottom: "50px",
                }}>
                N 2800
              </Text>

              <a
                href="#"
                className="flex flex-row items-center gap-2 align-middle text-borderColor rounded no-underline font-semibold">
                View More <AiOutlineArrowRight />
              </a>
            </Container>
          </Col>
        </Row>
      </main>
      <FooterComponent />
    </div>
  );
}
