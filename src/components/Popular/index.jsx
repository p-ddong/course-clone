import React from "react";
import "./style.scss";

import course1 from "../../assets/course_1.jpg";
import course2 from "../../assets/course_2.jpg";
import course3 from "../../assets/course_3.jpg";
import avatar from "../../assets/author.jpg";

const Popular = () => {
  return (
    <div className="popular">
      <h1 className="popular-title">Popular Courses</h1>
      <div className="popular-group">
        <div className="card">
          <img src={course1} alt="" />
          <div className="title">
            <h1>A complete guide to design</h1>
            <p>Adobe Guide, Layes, Smart Objects etc...</p>
          </div>
          <div className="foot">
            <div className="author">
              <img src={avatar} alt="" />
              <p>
                Michael Smith, <span>Author</span>
              </p>
            </div>
            <div className="price">$29</div>
          </div>
        </div>
        <div className="card">
        <img src={course2} alt="" />
          <div className="title">
            <h1>Beginners guide to HTML</h1>
            <p>Adobe Guide, Layes, Smart Objects etc...</p>
          </div>
          <div className="foot">
            <div className="author">
              <img src={avatar} alt="" />
              <p>
                Michael Smith, <span>Author</span>
              </p>
            </div>
            <div className="price">$29</div>
          </div>
        </div>
        <div className="card">
        <img src={course3} alt="" />
          <div className="title">
            <h1>Advanced Photoshop</h1>
            <p>Adobe Guide, Layes, Smart Objects etc...</p>
          </div>
          <div className="foot">
            <div className="author">
              <img src={avatar} alt="" />
              <p>
                Michael Smith, <span>Author</span>
              </p>
            </div>
            <div className="price">$29</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
