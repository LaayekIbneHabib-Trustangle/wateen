import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { HeroSecondary, Wrapper } from "../../components";
import RequestADemo from "../../components/request-a-demo";
import Pagination from "../../components/pagination/pagination";
import data from "../data/blog-posts.json";
import "./style.scss";

let PageSize = 4;

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeButton, setActiveButton] = useState(null);

  const currentBlogs = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  const handleClick = (button) => {
    setActiveButton(button);
  };

  const location = ["Home", "Resources", "Blog"];

  return (
    <>
      <section>
        <HeroSecondary
          location={location}
          h2="Wateen Blog"
          h3="Tool and strategies modern teams need to help their companies grow."
        />
      </section>
      <section>
        <Wrapper>
          <div className="container">
            <div className="sort">
              <input type="text" placeholder="Search" />
              <p>
                <span>Blog categories</span>
              </p>
              <button
                className={`my-button ${
                  activeButton === "button1" ? "active" : ""
                }`}
                onClick={() => handleClick("button1")}
              >
                View all
              </button>
              <button
                className={`my-button ${
                  activeButton === "button2" ? "active" : ""
                }`}
                onClick={() => handleClick("button2")}
              >
                Design
              </button>
              <button
                className={`my-button ${
                  activeButton === "button3" ? "active" : ""
                }`}
                onClick={() => handleClick("button3")}
              >
                Product
              </button>
              <button
                className={`my-button ${
                  activeButton === "button4" ? "active" : ""
                }`}
                onClick={() => handleClick("button4")}
              >
                Software Development
              </button>
              <button
                className={`my-button ${
                  activeButton === "button5" ? "active" : ""
                }`}
                onClick={() => handleClick("button5")}
              >
                Customer Success
              </button>
              <button
                className={`my-button ${
                  activeButton === "button6" ? "active" : ""
                }`}
                onClick={() => handleClick("button6")}
              >
                Leadership
              </button>
              <button
                className={`my-button ${
                  activeButton === "button7" ? "active" : ""
                }`}
                onClick={() => handleClick("button7")}
              >
                Management
              </button>
            </div>
            <div className="posts">
              {currentBlogs.map((item) => {
                return (
                  <div className="single-post" key={item.id}>
                    <img src={item.cover} alt="" />
                    <h2>{item.title}</h2>
                    <p>{item.preview}</p>
                    <Link to={`/blog/${item.id}`}>
                      <span>
                        Read more <img src="/images/read-more.webp" alt="" />
                      </span>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </Wrapper>
      </section>
      <section style={{ marginTop: "10rem" }}>
        <Wrapper>
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={data.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </Wrapper>
      </section>
      <section style={{ marginBottom: "55rem" }}>
        <Wrapper>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "6rem",
            }}
          >
            <RequestADemo />
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default Blogs;
